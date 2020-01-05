import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  categories: Observable<any[]>;

  constructor(private categoriesService: CategoriesService,
    private router: Router) { }

  ngOnInit() {
    this.categoriesService.getCategories().subscribe(
      (categories) => {
        this.categories = categories;
      }
    )
  }

  edit(id) {
    this.router.navigate(['/editCategory', id ]);
  }

  remove(categoryId) {
    this.categoriesService.removeCategory(categoryId).subscribe(
    (res) => {
        this.categoriesService.getCategories().subscribe(
            (res) => {
                this.categories = res;
            }
        );
    });
  }

}
