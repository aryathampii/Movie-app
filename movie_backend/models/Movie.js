const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://amruthap8:d5TuXrvZdSv69fEj@cluster0.thrg5ui.mongodb.net/Movie?retryWrites=true&w=majority")
.then(()=>{
  console.log("db connected")
})
.catch(err=>console.log(err))
// Define the movie schema
const movieSchema = new mongoose.Schema({
  mname: {
    type: String,
    required: true
  },
  mactor: {
    type: String,
    required: true
  },
  mactress: {
    type: String,
    required: true
  },
  mdirector: {
    type: String,
    required: true
  },
  myear: {
    type: Number,
    required: true
  },
  mcam: {
    type: String,
    required: true
  },
  mproducer: {
    type: String,
    required: true
  },
  mlanguage: {
    type: String,
    required: true
  }
});

// Create the movie model
const Movie = mongoose.model('Movie', movieSchema);

// Export the movie model
module.exports = Movie;
