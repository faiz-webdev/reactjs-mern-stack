const mongoose = require("mongoose");

const url = "mongodb://localhost:2717/collectionName";

const connectToMongo = () => {
  mongoose.set("strictQuery", false);
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // make the process fail
    process.exit(1);
  }
};

module.exports = connectToMongo;
