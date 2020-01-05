import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksController } from './books/books.controller';
import { UsersModule } from './users/users.module';
import { BookSchema } from './books/book.schema';
import { CategorySchema } from './categories/category.schema';
import { BooksService } from './books/books.service';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesService } from './categories/categories.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'public'),
    }),
    MongooseModule.forFeature([{
      name :'Book',
      schema : BookSchema,
      collection : 'Books'
    }]),
    MongooseModule.forFeature([{
      name :'Category',
      schema : CategorySchema,
      collection : 'Categories'
    }]),
    MongooseModule.forRoot('mongodb+srv://app-angular:Wonderland7654@cluster0-mzods.mongodb.net/test?retryWrites=true&w=majority'),
    // MongooseModule.forRoot('mongodb://localhost/db_nest'),
    UsersModule
  ],
  controllers: [
    AppController,
    BooksController,
    CategoriesController, 
  ],
  providers: [
    AppService,
    BooksService,
    CategoriesService    
  ],
})
export class AppModule {}
