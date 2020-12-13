const express = require('express')
const router = express.Router()

const blogSchema = require('../../models/blog.js')

router.get('/blogs', async function (req, res) {
  blogSchema.find().then((blogSchema) => {
    res.json(blogSchema)
  })
});

router.post('/blogs', async function (req, res) {
  var newBlog = new blogSchema({
    title: req.body.title,
    body: req.body.body
  });
  await newBlog.save();
  console.log('data saved');
});

router.get("/blogs/:id", async (req, res) => {
  try {
    let blog = await blogSchema.findOne({
      _id: req.params.id
    });
    res.json({
      success: true,
      blog: blog
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });

  }
});

module.exports = router;