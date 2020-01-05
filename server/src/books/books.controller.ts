import { Controller, Get, Post, Body, Param, Request, Res, Delete } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  
  constructor(private booksService: BooksService) {}
  
  @Get()
  async findAll(@Request() req) {
    return await this.booksService.getBooks(req);
  }

  @Get(':id')
  async findOne(@Request() req) {
    return await this.booksService.getOne(req);
  }
  
  @Post('add')
  async Add(@Request() req, @Res() res){
    await this.booksService.add(req, res);
  }

  @Post('edit/:id')
  async Update(@Body() book: any) {
    await this.booksService.update(book);
  }

  @Post('share')
  async Share(@Request() req) {
    await this.booksService.share(req.body);
  }
  
  @Get('delete/:id')
  async Delete(@Param('id') id){
    await this.booksService.delete(id);
  }
  
}
