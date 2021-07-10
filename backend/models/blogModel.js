import mongoose from 'mongoose';

const blogSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},

		name: {
			type: String,
			required: true,
		},

		content: {
			type: String,
			required: true,
		},

		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
