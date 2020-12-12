import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/tasks.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/tasks", postRoutes);

const { MONGO_ATLAS_USERNAME, MONGO_ATLAS_PASSWORD, PORT } = process.env;

const CONNECTION_URI = `mongodb+srv://${MONGO_ATLAS_USERNAME}:${MONGO_ATLAS_PASSWORD}@cluster0.csmek.mongodb.net/<dbname>?retryWrites=true&w=majority"`;
const port = PORT || 5000;

mongoose
  .connect(CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => console.log(`Server runining on port ${port}`));
  })
  .catch((error) => {
    console.log(error.message);
  });

mongoose.set("useFindAndModify", false);
