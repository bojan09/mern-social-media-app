const router = require("express").Router();
const bcrypt = require("bcrypt");

const User = require("../models/user");

// Register
router.post("/register", async (req, res) => {
  try {
    // Generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // Save user
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    // Check email
    const user = await User.findOne({
      email: req.body.email,
    });
    !user && res.status(404).send("User not found");

    // Check password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).send("Password is incorrect");

    // Email & Password are Valid
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
