import { Product,IProduct } from "../models/product.model";

class ProductRepository {
  create(data: Partial<IProduct>) {
    return Product.create(data);
  }

  findById(id:string) {
    return Product.findById(id);
  }

  find(query: any,options: any) {
    return Product.find(query)
      .sort(options.sort)
      .skip(options.skip)
      .limit(options.limit);
  }

  update(id: string, data:Partial<IProduct>) {
    return Product.findByIdAndUpdate(id,data,{new:true });
  }

  delete(id:string){
    return Product.findByIdAndDelete(id);
  }
}

export default new ProductRepository();
