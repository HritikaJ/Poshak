import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './blogstyle.css';
import { listBlogDetails } from '../actions/blogActions';

const BlogScreen = ({ history, match }) => {
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const blogDetails = useSelector((state) => state.blogDetails);
	const { loading, error, blog } = blogDetails;

	useEffect(() => {
		if (!blog._id || blog._id !== match.params.id) {
			dispatch(listBlogDetails(match.params.id));
		}
	}, [blog._id, dispatch, match]);

	return (
		<div className="blogs">
			<div className="row" style={{ marginLeft: '300px', marginTop: '-20px' }}>
				<div
					className="card"
					style={{
						marginLeft: '-180px',
						marginRight: '80px',
						marginTop: '80px',
					}}
				>
					<h2>{blog.name}</h2>
					<h6>Author: Poshak</h6>
					<img src="/images/blogs.jpg" style={{ marginTop: '20px' }} />
					<p style={{ marginTop: '30px' }}>{blog.content}</p>
				</div>
			</div>
		</div>
	);
};

export default BlogScreen;
