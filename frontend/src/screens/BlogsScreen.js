import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Blog from '../components/Blog';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { Row, Col } from 'react-bootstrap';
import { listBlogs } from '../actions/blogActions';

const BlogScreen = ({ history, match }) => {
	const keyword = match.params.keyword;
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const blogList = useSelector((state) => state.blogList);
	const { loading, error, blogs } = blogList;

	useEffect(() => {
		dispatch(listBlogs(''));
	}, [dispatch, keyword]);

	return (
		<>
			<h1> Blogs </h1>

			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger"> {error}</Message>
			) : (
				<>
					<Row>
						{blogs.map((blog) => (
							<div
								className="productCard"
								style={{
									height: '180px',
									width: '1200px',
									display: 'flex',
									marginTop: '30px',
									marginLeft: '100px',
								}}
							>
								<Col key={blog._id}>
									<Blog blog={blog} />
								</Col>
							</div>
						))}
					</Row>
				</>
			)}
		</>
	);
};

export default BlogScreen;
