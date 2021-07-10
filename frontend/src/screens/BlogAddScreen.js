import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { listBlogDetails, updateBlog } from '../actions/blogActions';
import { BLOG_UPDATE_RESET } from '../constants/blogConstants';

const BlogAddScreen = ({ match, history }) => {
	const blogId = match.params.id;

	const [name, setName] = useState('');
	const [content, setContent] = useState('');

	const dispatch = useDispatch();

	const blogDetails = useSelector((state) => state.blogDetails);
	const { loading, error, blog } = blogDetails;

	const blogUpdate = useSelector((state) => state.blogUpdate);
	const {
		loading: loadingUpdate,
		error: errorUpdate,
		success: successUpdate,
	} = blogUpdate;

	useEffect(() => {
		if (successUpdate) {
			dispatch({ type: BLOG_UPDATE_RESET });
			history.push('/admin/bloglist');
		} else {
			if (!blog.name || blog._id !== blogId) {
				dispatch(listBlogDetails(blogId));
			} else {
				setName(blog.name);
				setContent(blog.content);
			}
		}
	}, [dispatch, blog, blogId, history, successUpdate]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(
			updateBlog({
				_id: blogId,
				name,
				content,
			})
		);
	};

	return (
		<>
			<Link to="/admin/bloglist" className="btn btn-light my-3">
				{' '}
				Back{' '}
			</Link>
			<FormContainer>
				{loadingUpdate && <Loader />}
				{errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant="danger"> {error}</Message>
				) : (
					<Form onSubmit={submitHandler}>
						<Form.Group controlId="name">
							<Form.Label> Name </Form.Label>
							<Form.Control
								type="name"
								placeholder="Enter blog name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId="content">
							<Form.Label> Content </Form.Label>
							<textarea
								class="form-control"
								rows="3"
								type="text"
								placeholder="Enter content"
								value={content}
								onChange={(e) => setContent(e.target.value)}
								style={{ height: '280px' }}
							></textarea>
						</Form.Group>

						<Button type="submit" variant="primary">
							{' '}
							Submit{' '}
						</Button>
					</Form>
				)}
			</FormContainer>
		</>
	);
};

export default BlogAddScreen;
