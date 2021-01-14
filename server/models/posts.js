const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
	name: String,
	postDate: Date,
	categories: Array,
	title: String,
	excerpt: String,
	tags: Array,
	bodyContent: {
		headings: Array,
		paragraphs: Array,
	},
	coverImage: {
		srcUrl: String,
		altText: String,
	},
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
