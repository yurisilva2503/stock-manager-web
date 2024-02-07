import express from "express";
import productRoutes from "./routes/produtos.js";
import userRoutes from "./routes/usuarios.js";
import exitRoutes from "./routes/saidas.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", productRoutes); 
app.use("/", userRoutes); 
app.use("/", exitRoutes); 

app.listen(8800);
console.log("Servidor iniciado 8800!");
