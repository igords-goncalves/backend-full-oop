import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.ts";

const app = express();

app.use(express.json());
app.use("", usuarioRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "tudo ok!",
  });
});
app.listen(3000, () => console.log("Server running"));
