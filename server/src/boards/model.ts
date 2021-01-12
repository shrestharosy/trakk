import mongoose from "mongoose";

const boardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    creator: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
    tasks: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Task",
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

const BoardModel = mongoose.model("Board", boardSchema);

export default BoardModel;
