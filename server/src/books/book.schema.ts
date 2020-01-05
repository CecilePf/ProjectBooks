import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  title : { type : String , unique : true},
  resume : String,
  categories : [String],
  note : {type: Number, set: setNote },
  userId : String
});

function setNote(num) {
  if (num > 0 && num < 10) {
    return Math.round(num*2)/2;
  } else if (num < 0) {
    return 0;
  } else if (num > 10) {
    return 10;
  }
}
