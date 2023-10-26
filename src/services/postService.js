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

async function getPosts() {
  try {
    const posts = await Post.findAll(); // Retrieve all posts from the database
    return posts;
  } catch (error) {
    throw error;
  }
}

async function incrementLikes(postId) {
  try {
    const post = await Post.findByPk(postId);

    if (!post) {
      throw new Error('Post not found');
    }

    // Increment the 'likes' field by 1
    post.likes += 1;

    // Save the updated post to the database
    await post.save();

    return post;
  } catch (error) {
    throw error;
  }
}

async function decrementLikes(postId) {
  try {
    const post = await Post.findByPk(postId);

    if (!post) {
      throw new Error('Post not found');
    }

    // Decrement the 'likes' field by 1
    if (post.likes > 0) {
      post.likes -= 1;
    }

    // Save the updated post to the database
    await post.save();

    return post;
  } catch (error) {
    throw error;
  }
}

module.exports = { createPost, getPosts, incrementLikes, decrementLikes };
