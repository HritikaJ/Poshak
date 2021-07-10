import React from 'react';
import { Container } from 'react-bootstrap';

const UserTypeScreen = ({ history }) => {
	return (
		<Container>
			<div className="row" style={{ marginTop: '50px' }}>
				<div
					className="col-sm-6"
					style={{ backgroundColor: 'rgb(255, 246, 247)' }}
				>
					<h1 style={{ textAlign: 'center' }}>Basic</h1>

					<ul style={{ listStyleType: 'none' }}>
						<li>
							<i className="fas fa-check"> </i>Add to Cart
						</li>
						<li>
							<i className="fas fa-check"> </i>Buy Products Online
						</li>
						<li>
							<i className="fas fa-check"></i>Rate Products
						</li>
						<li>
							<i className="fas fa-check"> </i>Review Products
						</li>
						<li>
							{' '}
							<i className="fas fa-times"> </i>View Fashion Blogs{' '}
						</li>
						<li>
							{' '}
							<i className="fas fa-times"> </i>View Product Look Book{' '}
						</li>
					</ul>
				</div>
				<div
					className="col-sm-6"
					style={{ backgroundColor: 'rgb(255, 226, 253)' }}
				>
					<h1 style={{ textAlign: 'center' }}> Premium </h1>

					<ul style={{ listStyleType: 'none' }}>
						<li>
							<i className="fas fa-check"> </i>
							Add to Cart
						</li>
						<li>
							{' '}
							<i className="fas fa-check"> </i>Buy Products Online{' '}
						</li>
						<li>
							{' '}
							<i className="fas fa-check"> </i>Rate Products{' '}
						</li>
						<li>
							{' '}
							<i className="fas fa-check"> </i>Review Products{' '}
						</li>
						<li>
							{' '}
							<i className="fas fa-check"> </i>View Fashion Blogs{' '}
						</li>
						<li>
							{' '}
							<i className="fas fa-check"> </i>View Product Look Book{' '}
						</li>
					</ul>
				</div>
			</div>
			<div
				className="user-type-register"
				style={{ textAlign: 'right', marginTop: '40px' }}
			>
				<a href="/register">
					{' '}
					<i className="fas fa-angle-double-right"></i> Register Now!
				</a>
			</div>
		</Container>
	);
};

export default UserTypeScreen;
