const mongoose = require("mongoose");
const express = require("express");
const app = express();

// const DB = 'mongodb+srv://harshyadav:wakraswag@cluster0.a6yxqh3.mongodb.net/subscriber';

// mongoose.connect(DB, {
//   userNewUrlParser: true,
//   userCreateIndex: true,
//   useUnifiedTopology: true,
//   useFindAndModify:false
// }).then(() => {
//     console.log('connection successful');
// }).catch((err) => console.log('no connection'));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// import route here
const subscriberRoute = require("./routes/subscriberRoute");

// Home Route

app.get("/", (req, res) => {
  res.status(200).json({
    greeting: "Hello, this a backend API to get Youtube Subscriber",
    routes: [
      {
        route: "/subscribers",
        response: "Response with an array of subscribers(an Object)",
      },
      {
        route: "/subscribers/names",
        response:
          "Response with an array of subscribers(an Object with only two fields name and subscribedChannel)",
      },
      {
        route: "/subscribers/:id",
        response:
          "Response with a subscriber*(an object)* with given id Response with status code 400 and Error message({message: error.message}) if id does not match",
      },
    ],
  });
});

//  router middleware
app.use("/", subscriberRoute);

module.exports = app;
