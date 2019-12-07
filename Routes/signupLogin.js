const express = require("express")
const router = express.Router()
const User = require("../Schema/userSchema")

router.get("/users", (req, res) => {
  User.find({}, (err, user) => {
    if (user) {
      return res.status(200).json(user)
    } else return res.status(400).json(err)
  })
})

router.post("/users", (req, res) => {
  const user = new User({
    email: req.body.email,
    userPassword: req.body.userPassword,
    name: req.body.name,
    firstName: req.body.firstName,
    position: req.body.position,
    birthDate: req.body.birthdate
  })
  user
    .save()
    .then(user => res.json(user))
    .catch(err => console.log("/api/auth/users", err))
})

module.exports = router
