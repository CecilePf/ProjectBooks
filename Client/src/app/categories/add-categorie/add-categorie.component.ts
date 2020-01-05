import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from '../../models/category.model'
import { CategoriesService } from 'src/app/services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {

  addCategoryForm : FormGroup;
  category : Category;
  error_message: string = '';

  constructor(private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.addCategoryForm = this.formBuilder.group({
      label : ['', [Validators.required ]],
    });
  }

  onSubmit() {
    let myForm = this.addCategoryForm;
    this.category = {
      label : myForm.get('label').value
    };

    this.categoriesService.addCategory(this.category).subscribe(
      (res) => {
        this.router.navigate(['categories']);
      }, (err) => {
        if(err.error.ErrorCode == 11000) {
            this.error_message = "Ce nom est déjà pris, veuillez en mettre un autre.";
        }
      }
    );   
  }

}
