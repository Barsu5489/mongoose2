const mongoose = require("mongoose");
const validator = require("validator");
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const user = mongoose.model("user", {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new error('password cannot contain "password');
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    }
  }
});
const me = new user({
  name: "Mike",
  email: "MIKE@MIKE.IO",
  password: "datadata",
  age: 24
});
me.save()
  .then(() => {
    console.log(me);
  })
  .catch(error => {
    console.log("Error!", error);
  });
//'Task', description: string and completed: boolean
//learn how to mongoose, true/false
//save;
/*const Task = mongoose.model("Task", {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
});
/*const task = new Task({
  description: "learn how to mongoose",
  completed: false
});
task
  .save()
  .then(() => {
    console.log(task);
  })
  .catch(error => {
    console.log(error);
  });*/
