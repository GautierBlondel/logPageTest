const express = require("express");;
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const cors = require("cors");
const port =  3001 || process.env.port; 
const db = require("./Config/config").mongoURI;

const signuplogin = require("./Routes/signupLogin");

// Connexion DB
mongoose.connect(db, {useNewUrlParser :true})
.then(console.log("Db Connected Sir listens"))
.catch(err => console.log("DB Error",err))

const app = express();
// Middlewares 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Routes 
app.use("/api/auth", signuplogin);


app.listen(port, function() {
  console.log(`Server listens on port ${port}`)
});