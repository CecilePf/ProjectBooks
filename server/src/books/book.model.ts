export interface Book {
  title : { type : String , unique : true },
  resume : String,
  categories : [String],
  note : Number,
  userId : String
} 