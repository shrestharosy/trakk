import BoardModel from "./model";

export const getBoards = async (req, res) => {
  try {
    const boards = await BoardModel.find();
    res.status(200).json(boards);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createBoard = async (req, res) => {
  const boardDetails = req.body;
  const newBoard = new BoardModel(boardDetails);
  try {
    await newBoard.save();
    res.status(201).json(newBoard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteBoard = async (req, res) => {
  try {
    await BoardModel.findByIdAndDelete(req.params.id);
    res.status(200).json(`Board ${req.params.id} deleted`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
