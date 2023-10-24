const Post = require('../models/postModel');


// Function to handle create post
async function createPost(content, userId) {
  try {
    
    // Check for missing inputs
    if (!content || !userId) {
      throw new Error('All input needed');
    }


    // Create a new post 
    const post = await Post.create({
      content,
      userId
    });

    return post;
  } catch (error) {
    throw error;
  }
}

module.exports = { createPost };
