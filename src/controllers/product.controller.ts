import { Request, Response, NextFunction } from "express";
import productService from "../services/product.service";

class ProductController {
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await productService.create(req.body);
      res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  };

  list = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await productService.list(req.query);
      res.json(data);
    } catch (err) {
      next(err);
    }
  };
}

export default new ProductController();
