import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  books : Observable<any[]>
  shareClick: boolean = false;
  book_shared: any;
  email_shared: string;

  constructor(private booksService: BooksService,
    private router: Router) { }

  ngOnInit() {
    this.booksService.getBooks().subscribe(
      (books) => {
        this.books = books;
      }
    )
  }

  edit(bookId) {
    this.router.navigate(['/editBook', bookId ]);
  }

  remove(bookId) {
    this.booksService.removeBook(bookId).subscribe(
    (res) => {
        this.booksService.getBooks().subscribe(
            (res) => {
                this.books = res;
            }
        );
    });
  }

  share(book) {
      this.shareClick = true;
      this.book_shared = book;
  }
  onSubmitShare(f) {
      this.email_shared = (f.form.value['email']);
      this.shareClick = false;      

      let data_shared = {
          book: this.book_shared,
          email: this.email_shared
      }
      
    this.booksService.shareBook(data_shared).subscribe(
        (res) => {
            console.log(res);
            console.log('Envoyé à ' + data_shared.email);
        }
    );
  }

}
