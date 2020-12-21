import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/tasks.js";

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/tasks", postRoutes);

const { MONGO_ATLAS_USERNAME, MONGO_ATLAS_PASSWORD, PORT } = process.env;

const CONNECTION_URI = `mongodb+srv://${MONGO_ATLAS_USERNAME}:${MONGO_ATLAS_PASSWORD}@cluster0.csmek.mongodb.net/<dbname>?retryWrites=true"`;
const port = PORT || 5000;

// useNewUrlParser :  parse mongodb connection string by using new parser
mongoose
  .connect(CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => {
    console.log(error.message);
  });

mongoose.set("useFindAndModify", false);
