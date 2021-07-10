import asyncHandler from 'express-async-handler';
import Blog from '../models/blogModel.js';

//@desc Fetch single blog
//@route GET /api/blogs/:id
//@access Public

const getBlogs = asyncHandler(async (req, res) => {
	const keyword = req.query.keyword
		? {
				name: {
					$regex: req.query.keyword,
					$options: 'i',
				},
		  }
		: {};
	const blogs = await Blog.find({ ...keyword });
	res.json({ blogs });
});

//@desc Fetch single blog
//@route GET /api/blog/:id
//@access Public

const getBlogById = asyncHandler(async (req, res) => {
	const blog = await Blog.findById(req.params.id);

	if (blog) {
		res.json(blog);
	} else {
		res.status(404);
		throw new Error('Blog not found');
	}
});

//@desc Delete a blog
//@route DELETE /api/blogs/:id
//@access Private/Admin

const deleteBlog = asyncHandler(async (req, res) => {
	const blog = await Blog.findById(req.params.id);

	if (blog) {
		await blog.remove();
		res.json({ message: 'Blog removed!' });
	} else {
		res.status(404);
		throw new Error('Blog not found');
	}
});

//@desc Create a blog
//@route POST /api/blogs
//@access Private/Admin

const createBlog = asyncHandler(async (req, res) => {
	const blog = new Blog({
		name: 'Blog Name',
		user: req.user._id,
		content: 'Content',
	});

	const createdBlog = await blog.save();
	res.status(201).json(createdBlog);
});

//@desc Update a blog
//@route PUT /api/blogs/:id
//@access Private/Admin

const updateBlog = asyncHandler(async (req, res) => {
	const { name, content } = req.body;

	const blog = await Blog.findById(req.params.id);
	if (blog) {
		blog.name = name;
		blog.content = content;

		const updatedBlog = await blog.save();
		res.json(updatedBlog);
	} else {
		res.status(404);
		throw new Error('Blog not Found!');
	}
});

export { getBlogs, getBlogById, deleteBlog, createBlog, updateBlog };
