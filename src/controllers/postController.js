const postService = require("../services/postService");

exports.createPost = async (req, res) => {
  const { content } = req.body; // Get content from the request body

  if (!content) {
    return res.status(400).json({ message: "Content is required" });
  }

  try {
    const userId = req.user.id
    console.log('User information in post controller', req.user.id)
    const post = await postService.createPost(content, userId);
    console.log("Post Creation ",post);
    res
      .status(201)
      .json({ message: "Post Created Successfully", result: post });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
