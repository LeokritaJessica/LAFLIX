//Import data
const profileService = require("../services/profile.js");

//Modules exports
module.exports = {
  upload: async (req, res) => {
    const {file, user } = req;

    //get data from body
    const uploadFile = file.location;
    try {
      const upload = await profileService.upload(user._id, uploadFile);

      res.status(200).send({ message: "Upload photo success", data: upload });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  }
}