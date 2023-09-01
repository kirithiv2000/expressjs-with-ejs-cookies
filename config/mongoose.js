const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/codial_dev")
.then(() => {
  console.log('Database connection successful');
})
.catch((err) => {
  console.error('Database connection error');
});

// const db = mongoose.connection;
// exports