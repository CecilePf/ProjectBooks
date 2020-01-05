import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
  label : { type : String , unique:true },
});
