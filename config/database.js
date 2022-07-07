const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Connect to Mongo Database with Mongoose
    const mongooseConnect = await mongoose.connect(process.env.DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,

      // Not Supported
      // useFindAndModify: false,
    });

    // Will run log if Successful
    console.log(`MongoDB Connected: ${mongooseConnect.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
