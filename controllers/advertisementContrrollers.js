const Blog = require('../models/advertisement');


// sort blog from newest to oldest
module.exports.jobs = (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then(result => {
      res.json("success"); 
    })
    .catch(err => {
      console.log(err);
    });
}
// create single job and redirect to dashboard
module.exports.create_jobs = (req, res) => {
  const blog = new Blog(req.body);
  blog.save()
    .then(result => {
      res.json("success"); 
    })
    .catch(err => {
      console.log(err);
    });
}


//find single blog by id
module.exports.job_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then(result => {
      res.json("success"); 
    })
    .catch(err => {
      console.log(err);
    });
}



// delete blog by id
module.exports.job_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({ });
    })
    .catch(err => {
      console.log(err);
    });
}

// update single blog based on id
module.exports.job_update = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndUpdate(id, {
    $set: req.body,
  },)
    .then(result => {
      res.json("success");
    })
    .catch(err => {
      console.log(err);
    });
}
