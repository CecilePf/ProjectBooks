import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Book } from '../../models/book.model'
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  
  book: Book;
  error: number;
  error_message: string = "";
  addBookForm: FormGroup;

  categories: Observable<any[]>;

  constructor(private booksService: BooksService,
    private formBuilder : FormBuilder,
    private router: Router,
    private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.addBookForm = this.formBuilder.group({
      title : ['', [Validators.required ]],
      resume : ['' , [Validators.required ]],
      categories : this.formBuilder.array([]),
      note : ['' ,[ Validators.required , Validators.pattern('^([0-9]\d*)(?:\.[5]?)?$')]],
    });
    this.getAllCategories();
    this.onAddCategory();
  }

  getCategories(): FormArray {
    return this.addBookForm.get('categories') as FormArray;
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
    let myForm = this.addBookForm;
    this.book = {
      title : myForm.get('title').value ,
      resume : myForm.get('resume').value,
      categories: myForm.get('categories').value,
      note :  myForm.get('note').value,
      userId : localStorage.getItem('id')
    };

    // console.log("new : ", this.book);

    this.booksService.addBook(this.book).subscribe(
      (res) => {
        this.router.navigate(['books']);
      }, (err) => {
        if(err.error.ErrorCode == 11000) {
            this.error_message = "Ce titre est déjà pris, veuillez en mettre un autre.";
        }
      }
    );    
  }

}
