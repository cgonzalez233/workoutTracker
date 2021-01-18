const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: Date,
  exercises: [{
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
  }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;


// {
//   day: new Date().setDate(new Date().getDate()-10),
//   exercises: [
//     {
//       type: "resistance",
//       name: "Bicep Curl",
//       duration: 20,
//       weight: 100,
//       reps: 10,
//       sets: 4
//     }
//   ]
// }