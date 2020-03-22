const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


const users = require("./routes/api/users"); 

const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;

mongoose.connect('mongodb://localhost:27017/flashchat', {useNewUrlParser: true});

// Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   db,
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false
// })
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));

// Routes
app.use("/api/users", users);

const port = process.env.PORT || 8080; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));