import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

	oldBook: Book;
	book: Book;
	bookId: string;
	editBookForm : FormGroup;
    isLoaded: boolean = false;
    categories: Observable<any[]>;
    error_message: string = "";

	constructor(private router: Router,
		private route: ActivatedRoute,
		private formBuilder : FormBuilder,
        private booksService: BooksService,
        private categoriesService: CategoriesService) { }

    ngOnInit() {
        this.bookId = this.route.snapshot.params['id'];
		
		this.booksService.getbook(this.bookId).subscribe(
			(res) => {
				this.oldBook = res;
                this.isLoaded = true;  
                this.initForm();
                this.editBookForm.setControl('categories', this.formBuilder.array(res.categories || []));
			}
        );       
    }
	
	initForm() {
        this.editBookForm = this.formBuilder.group({
            title : [this.oldBook.title, [Validators.required ]],
            resume : [this.oldBook.resume , [Validators.required ]],
            categories : this.formBuilder.array([]),
            note : [this.oldBook.note ,[ Validators.required , Validators.pattern('^([0-9]\d*)(?:\.[5]?)?$')]],
        });
        this.getAllCategories();
        this.onAddCategory();
    }

    getCategories(): FormArray {
        return this.editBookForm.get('categories') as FormArray;
    }

    getAllCategories() {
        return this.categoriesService.getCategories().subscribe(
          (res) => {
            this.categories = res;
          }
        );
    }
    
    onAddCategory() {
        const newCategoryControl = this.formBuilder.control(null, Validators.required);
        this.getCategories().push(newCategoryControl);
    }
	
	onSubmit() {    
        let myForm = this.editBookForm;
        this.book = {
            title : myForm.get('title').value ,
            resume : myForm.get('resume').value,
            categories: myForm.get('categories').value,
            note :  myForm.get('note').value,
            userId : localStorage.getItem('id')
        };

    this.booksService.editBook(this.bookId, this.book).subscribe(
      (res) => {
        this.router.navigate(['books']);
      }, (err) => {
        console.log(err);
        if(err.error.ErrorCode == 11000) {
            this.error_message = "Ce titre est déjà pris, veuillez en mettre un autre.";
        }
      }
    )    
  }

}
