const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  userPassword: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  firstName: {
    type: String
  },
  position: {
    type: String,
    required: true
  },
  birthDate: {
    type: String
  }
})

module.exports = User = mongoose.model("User", userSchema)
