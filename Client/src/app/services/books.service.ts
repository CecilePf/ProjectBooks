import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpClient: HttpClient, private apiService: ApiService) { }

  addBook(newBook: any) : Observable<any> {
    this.apiService.fixHeaders();
    return this.httpClient.post<Book>('/api/books/add', newBook, this.apiService.httpOptions);
  }

  getBooks(): Observable<any> {
    this.apiService.fixHeaders();
    return this.httpClient.get(
        '/api/books', this.apiService.httpOptions
    );
  }

  getbook(id: string) : Observable<any> {
    this.apiService.fixHeaders();
    return this.httpClient.get<Book>('/api/books/' + id, this.apiService.httpOptions);
  }

  editBook(bookId, newBook) {
    this.apiService.fixHeaders();
    return this.httpClient.post<Book>('/api/books/edit/' + bookId, {'book':newBook, 'bookId':bookId}, this.apiService.httpOptions);
  }

  removeBook(bookId) {
    return this.httpClient.get<Book>('/api/books/delete/' + bookId);
  }

  shareBook(book) {
    return this.httpClient.post<Book>('/api/books/share', book);
  }
}
