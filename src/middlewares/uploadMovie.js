//Import dependencies
require("dotenv").config();
const multer = require("multer");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");

//Import env
const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } = process.env;

//Connect S3Bucket
const s3 = new AWS.S3({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region: "ap-southeast-1",
});

//Storage
const uploadS3 = multer({
  storage: multerS3({
    s3: s3,
    acl: "public-read",
    bucket: "laflix/poster-movie",
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(null, Date.now().toString());
    },
  }),
});

//Module exports
module.exports = uploadS3;
