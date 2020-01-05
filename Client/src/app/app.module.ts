import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

import { SignInComponent } from './sign-in/sign-in.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { ListComponent } from './books/list/list.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthService } from './services/auth.service';
import { BooksService } from './services/books.service';
import { ApiService } from './services/api.service';
import { AddCategorieComponent } from './categories/add-categorie/add-categorie.component';
import { ListCategoriesComponent } from './categories/list-categories/list-categories.component';
import { CategoriesService } from './services/categories.service';

const routes: Routes = [
    {path :'signIn', component : SignInComponent},
    {path :'signUp', component : SignUpComponent},
    {path :'addBook', canActivate : [AuthGuard], component : AddBookComponent},
    {path :'books', canActivate : [AuthGuard], component : ListComponent},
    {path :'editBook/:id', canActivate : [AuthGuard], component : EditBookComponent},
    {path :'categories', canActivate : [AuthGuard], component : ListCategoriesComponent},
    {path :'addCategory', canActivate : [AuthGuard], component : AddCategorieComponent},  
    {path : '' , component : SignInComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    AddBookComponent,
    ListComponent,
    EditBookComponent,
    SignUpComponent,
    AddCategorieComponent,
    ListCategoriesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [AuthGuard, AuthService, BooksService, ApiService, CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
