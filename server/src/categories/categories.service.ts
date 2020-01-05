import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './category.model'
import { Request, Res } from '@nestjs/common';
var jwt = require('jwt-simple');

@Injectable()
export class CategoriesService{
  constructor(@InjectModel('Category') private readonly categoryModel: Model<Category>){}

  async add(@Request() req,@Res() res){
    const createCategory = new this.categoryModel(req.body);
    await createCategory.save(function(err, result ) {
      if (err) {
        console.log(err);
        res.status(403).send({ErrorCode : err.code});
      }
      if (result) {
        res.send({insert : true})
      }      
    });
  }

  async getCategories(@Request() req) {
    return await this.categoryModel.find();
  }

  async delete(id){
    await this.categoryModel.deleteOne({_id :id});
  }
}