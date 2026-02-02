import { Schema, model, Document } from "mongoose";

export interface IProduct extends Document {
  name:string;
  price:number;
  category?:string;
}

const productSchema = new Schema<IProduct>({
  name:{ type: String, required: true },
  price:{ type: Number, required: true },
  category:String
});

export const Product = model<IProduct>("Product",productSchema);
