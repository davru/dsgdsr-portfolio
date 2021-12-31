const SftpUpload = require("sftp-upload");
console.log(process.env.DEPLOY_HOST);

console.log(process.env.DEPLOY_USER);
console.log(process.env.DEPLOY_PASS);
const options = {
    host: process.env.DEPLOY_HOST,
    username: process.env.DEPLOY_USER,
    password: process.env.DEPLOY_PASS,
    path: "./dist/portfolio",
    remoteDir: "./",
    dryRun: false,
  },
  sftp = new SftpUpload(options);

sftp
  .on("error", function (err) {
    throw err;
  })
  .on("uploading", function (progress) {
    console.log("Uploading", progress.file);
    console.log(progress.percent + "% completed");
  })
  .on("completed", function () {
    console.log("Upload Completed");
  })
  .upload();
