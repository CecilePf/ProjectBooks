import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient: HttpClient,
    private apiService: ApiService) { }

  getCategories(): Observable<any> {
    this.apiService.fixHeaders();
    return this.httpClient.get(
        '/api/categories', this.apiService.httpOptions
    );
  }

  getCategory(id: string) : Observable<any> {
    this.apiService.fixHeaders();
    return this.httpClient.get<Category>('/api/categories/' + id, this.apiService.httpOptions);
  }

  addCategory(newCategory: any) : Observable<any> {
    this.apiService.fixHeaders();
    return this.httpClient.post<Category>('/api/categories/add', newCategory, this.apiService.httpOptions);
  }

  removeCategory(categoryId) {
    return this.httpClient.get<Category>('/api/categories/delete/' + categoryId);
  }

}
