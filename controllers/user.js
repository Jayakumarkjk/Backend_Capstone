import userModel from "../models/user.js";


class userController {
  static createUser = async (req, res) => {
    const { folderName, version } = req.body;
    const { filename } = req.file;

    try {
      if (folderName && version && filename) {
        const newUser = new userModel({
          folderName,
          version,
          profile: filename,
        });

        const new_user = await newUser.save();
        if (new_user) {
          return res.status(200).json(newUser);
        } else {
          return res.status(400).json({ messsage: "something wrong" });
        }
      } else {
        return res.status(400).json({ messsage: "all fields are required" });
      }
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  static getAllUser = async (req, res) => {
    try {
      const allUsers = await userModel.find({});
      if (allUsers) {
        return res.status(200).json(allUsers);
      }
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  static getSingleUser = async (req, res) => {
    const { id } = req.params;
    try {
      if (id) {
        const getSingleData = await userModel.findById(id);
        return res.status(200).json(getSingleData);
      } else {
        return res.status(400).json({ message: "Id not found" });
      }
    } catch (error) {
      return res.status(400).json(error);
    }
  };
  static download = async (req, res) => {
    const { id } = req.params;
    try {
      if (id) {
        const getData = await userModel.findById(id);
        return res.status(200).json(getData);
      } else {
        return res.status(400).json({ message: "Id not found" });
      }
    } catch (error) {
      return res.status(400).json(error);
    }
  };


  static updateUser = async (req, res) => {
    const { id } = req.params;
    try {
      if (id) {
        const getUpdatedData = await userModel.findByIdAndUpdate(id, req.body);
        return res.status(200).json(getUpdatedData);
      } else {
        return res.status(400).json({ message: "Id not found" });
      }
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  static deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
      if (id) {
        const getDeletedData = await userModel.findByIdAndDelete(id);
        return res.status(200).json(getDeletedData);
      } else {
        return res.status(400).json({ message: "Id not found" });
      }
    } catch (error) {
      return res.status(400).json(error);
    }
  };

}



export default userController;
