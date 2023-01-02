const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");
const auth = require("../../models/auth");

const uploadDir = path.join(__dirname, "../../", "public");

const uploadController = async (req, res) => {
  const { originalname, path: tmpDir } = req.file;
  const { _id } = req.user;

  try {
    const [extension] = originalname.split(".").reverse();
    const newImageName = `user_${_id}_avatar.${extension}`;
    const originalImage = await Jimp.read(tmpDir);
    const resizedImage = await originalImage.cover(250, 250);
    await resizedImage.write(`${uploadDir}/avatars/${newImageName}`);

    fs.unlink(tmpDir);

    const avatar = path.join(newImageName);

    const result = await auth.updateAvatar(avatar, _id);
    const { avatarURL } = result;
    res.status(200).json({ avatarURL });
  } catch (error) {
    fs.unlink(tmpDir);
    res.json({ error });
    console.log(error);
  }
};

module.exports = uploadController;
