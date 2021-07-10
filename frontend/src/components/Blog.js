import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Blog = ({ blog }) => {
	return (
		<Card className="blog-border">
			<Card.Body>
				<Link to={`/blogs/${blog._id}`}>
					<Card.Title as="div">
						<h2> {blog.name}</h2>
					</Card.Title>
				</Link>
			</Card.Body>
		</Card>
	);
};

export default Blog;
