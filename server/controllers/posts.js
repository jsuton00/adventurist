const Post = require('../models/posts');

const getPosts = async (req, res) => {
	try {
		const posts = await Post.find();
		res.status(200).json(posts);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

const createPosts = async (req, res) => {
	const post = req.body;
	const newPost = new Post(post);
	try {
		await newPost.save();
		res.status(201).json(newPost);
	} catch (err) {
		res.status(409).json({ message: err.message });
	}
};

exports.getPosts = getPosts;
