import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connect_DB from "./config/connect_db.js";
import router from "./routes/routes.js";
dotenv.config();

const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());

connect_DB();

app.use("/hrm", router);

app.get("/test", async (req, res) => {
  res.json({ message: "Hello world" });
});

app.listen(port, () => {
  console.log(`Server is Running at Port ${port}`);
});
