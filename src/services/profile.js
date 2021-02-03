//Import data
const userModel = require("../models/users");

module.exports={
  upload: async (userId, upload) => {
      //Create new review
      return await userModel.findByIdAndUpdate(
        userId,
        { photo: upload },
        { new: true }
      );
    },
}