import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listBlogs, deleteBlog, createBlog } from '../actions/blogActions';
import { BLOG_CREATE_RESET } from '../constants/blogConstants';

const BlogListScreen = ({ history, match }) => {
	const dispatch = useDispatch();

	const blogList = useSelector((state) => state.blogList);
	const { loading, error, blogs } = blogList;

	const blogDelete = useSelector((state) => state.blogDelete);
	const {
		loading: loadingDelete,
		error: errorDelete,
		success: successDelete,
	} = blogDelete;

	const blogCreate = useSelector((state) => state.blogCreate);
	const {
		loading: loadingCreate,
		error: errorCreate,
		success: successCreate,
		blog: createdBlog,
	} = blogCreate;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	useEffect(() => {
		dispatch({ type: BLOG_CREATE_RESET });

		if (!userInfo.isAdmin) {
			history.push('/login');
		}

		if (successCreate) {
			history.push(`/admin/blog/${createdBlog._id}/edit`);
		} else {
			dispatch(listBlogs(''));
		}
	}, [dispatch, history, userInfo, successDelete, successCreate, createdBlog]);

	const deleteHandler = (id) => {
		if (window.confirm('Do you want to delete the blog?')) {
			dispatch(deleteBlog(id));
		}
	};

	const createBlogHandler = () => {
		dispatch(createBlog());
	};

	return (
		<>
			<Row className="align-items-center">
				<Col>
					<h1 style={{ textAlign: 'left' }}> Blogs</h1>
				</Col>
				<Col className="text-right">
					<Button className="my-3" onClick={createBlogHandler}>
						<i className="fas fa-plus"></i> Add Blog
					</Button>
				</Col>
			</Row>
			{loadingDelete && <Loader />}
			{errorDelete && <Message variant="danger">{errorDelete}</Message>}
			{loadingCreate && <Loader />}
			{errorCreate && <Message variant="danger">{errorCreate}</Message>}

			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<>
					<Table striped bordered hover responsive className="table-sm">
						<thead>
							<tr>
								<th> ID </th>
								<th> Blog Name </th>
								<th> Content </th>
								<th> </th>
							</tr>
						</thead>
						<tbody>
							{blogs.map((blog) => (
								<tr key={blog._id}>
									<td>{blog._id}</td>
									<td>{blog.name}</td>
									<td>{blog.content}</td>
									<td>
										<LinkContainer to={`/admin/blog/${blog._id}/edit`}>
											<Button variant="light" className="btn-sm">
												<i className="fas fa-edit"></i>
											</Button>
										</LinkContainer>
										<Button
											variant="danger"
											className="btn-sm"
											onClick={() => deleteHandler(blog._id)}
										>
											<i className="fas fa-trash"></i>
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				</>
			)}
		</>
	);
};

export default BlogListScreen;
