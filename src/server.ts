import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.ts";

const app = express();

app.use(express.json());
app.use("", usuarioRoutes);

app.listen(3000, () => console.log("Server running"));
