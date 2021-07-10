import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Row>
					<Col>
						<ul className="footer-links">
							<li>
								<a href="/aboutUs">About Us</a>
								<a href="/policies">Policy</a>
								<a href="/sizeChart">Size Chart</a>
							</li>
						</ul>
					</Col>
					<Col>
						<ul className="social-footer">
							<li>
								<a
									href="https://www.facebook.com/Shreejanifashion.st/"
									target="_blank"
								>
									<i className="fab fa-facebook-square"></i>
								</a>
							</li>
							<li>
								<a href="https://instagram.com" target="_blank">
									<i className="fab fa-instagram"></i>
								</a>
							</li>
						</ul>
					</Col>
				</Row>
				<Row>
					<Col className="text-center py-3"> Copyright &copy; Poshak </Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
