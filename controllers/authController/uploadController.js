const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");
const auth = require("../../models/auth");
const avatarURLpath = process.env.AVATAR_URL;
const uploadDir = path.join(__dirname, "../../", "public");

const uploadController = async (req, res) => {
  const { originalname, path: tmpDir } = req.file;
  const { _id } = req.user;

  try {
    const [extension] = originalname.split(".").reverse();
    const newImgName = `userAvatar_${_id}.${extension}`;
    const originalImg = await Jimp.read(tmpDir);
    const resizedImg = await originalImg.cover(250, 250);
    await resizedImg.write(`${uploadDir}/avatars/${newImgName}`);
    fs.unlink(tmpDir);
    const avatar = path.join(avatarURLpath, newImgName);
    const result = await auth.updateAvatar(avatar, _id);
    const { avatarURL } = result;
    res.status(200).json({ avatarURL });
  } catch (error) {
    fs.unlink(tmpDir);
    res.json({ error });
  }
};

module.exports = uploadController;
