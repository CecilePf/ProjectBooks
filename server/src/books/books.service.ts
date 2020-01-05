import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './book.model'
import { Request, Res } from '@nestjs/common';
// import { MailerService } from '@nest-modules/mailer';
var jwt = require('jwt-simple');
var nodemailer = require('nodemailer');

@Injectable()
export class BooksService{
  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>){}
  
  async add(@Request() req,@Res() res){
    const createBook = new this.bookModel(req.body);
    await createBook.save(function(err, result ) {
      if (err) {
        console.log(err);
        res.status(403).send({ErrorCode : err.code});
      }
      if (result) {
        res.send({insert : true})
      }      
    });
  }
  
  async getBooks(@Request() req) {
    let authorization = req.headers.authorization;
    let decoded = jwt.decode(authorization, "test1234");
    return await this.bookModel.find({ userId : decoded });
  }
  
  async getOne(@Request() req) {
    return await this.bookModel.findOne({ _id : req.params.id });
  }
  
  async update(book){
    let bookId = book.bookId;
    await this.bookModel.updateOne({_id : bookId}, book.book);
  }
  
  async delete(id) {
    await this.bookModel.deleteOne({_id :id});
  }
  
  async share(book) {    
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'martineestla@gmail.com',
        pass: 'Test1234!'
      }
    });
    
    const mailOptions = {
      from: 'sender@email.com',
      to: book.email, 
      subject: 'Subject of your email',
      html: '<h1>' + book.book.title + '</h1><p> Résumé : ' + book.book.resume + '</p><p>Note : ' + book.book.note + '</p><p>Catégories : ' + book.book.categories + '</p>'
    };
    
    transporter.sendMail(mailOptions, function (err, info) {
      if(err)
      console.log(err)
      else
      console.log(info);
    });
  }
}