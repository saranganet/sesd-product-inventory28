import productRepo from "../repositories/product.repository";
import {ApiError} from "../utils/ApiError";

class ProductService {
  async create(data:any) {
    if (data.price<=0) {
      throw new ApiError(400,"Price must be positive");
    }
    return productRepo.create(data);
  }

  async list(queryParams:any) {
    const { search,page = 1,limit = 10}=queryParams;

    const query: any= {};
    if (search) query.name ={$regex: search, $options: "i"};

    return productRepo.find(query, {
      skip: (page - 1) * limit,
      limit: Number(limit)
    });
  }
}

export default new ProductService();
