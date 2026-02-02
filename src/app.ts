import express from "express";
import productRoutes from "./routes/product.routes";
import errorMiddleware from "./middlewares/error.middleware";

const app=express();

app.use(express.json());
app.use("/api/products", productRoutes);
app.use(errorMiddleware);

export default app;
