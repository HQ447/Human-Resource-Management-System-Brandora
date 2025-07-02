import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connect_DB from "./config/connect_db.js";
dotenv.config();

const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json);

connect_DB();

app.listen(port || 8080, () => {
  console.log(`Server is Running at Port ${port}`);
});
