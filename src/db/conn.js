const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://user1:1234@clubzone.12dvv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log(`connection is succesful`);
  })
  .catch((e) => {
    console.log(`no connection`, e);
  });
