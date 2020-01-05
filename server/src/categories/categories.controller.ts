import { Controller, Get, Post, Body, Param, Request, Res, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {

  constructor(private categoriesService: CategoriesService) {}

  @Get()
  async findAll(@Request() req) {
    return await this.categoriesService.getCategories(req);
  }

  @Post('add')
  async Add(@Request() req, @Res() res){
    await this.categoriesService.add(req, res);
  }

  @Get('delete/:id')
  async Delete(@Param('id') id){
    await this.categoriesService.delete(id);
  }

}
