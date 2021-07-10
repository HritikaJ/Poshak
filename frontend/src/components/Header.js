import React from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ProductSearch from './ProductSearch';
import { logout } from '../actions/userActions';

const Header = () => {
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const logoutHandler = () => {
		dispatch(logout());
	};

	return (
		<header>
			<div className="top-nav" expand="lg">
				<Container>
					<div className="nav-left">
						<a href="tel:01-4231832">01-4231832</a>
						<a href="mailto: shreejanituladhar@gmail.com">
							shreejanituladhar@gmail.com
						</a>
					</div>
					<div className="nav-right">
						<ul className="social-list">
							<li>
								<a
									href="https://www.facebook.com/Shreejanifashion.st/"
									target="_blank"
								>
									<i className="fab fa-facebook-f"></i>
								</a>
							</li>
							<li>
								<a href="https://instagram.com" target="_blank">
									<i className="fab fa-instagram"></i>
								</a>
							</li>
						</ul>
					</div>
				</Container>
			</div>
			<Navbar className="nav" expand="lg" collapseOnSelect>
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand>
							<img src="/images/logo.svg" />
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Route
							render={({ history }) => <ProductSearch history={history} />}
						/>
						<Nav className="ml-auto">
							{userInfo && userInfo.userType === 'premium' && (
								<>
									<LinkContainer to="/blogs">
										<Nav.Link> Blogs</Nav.Link>
									</LinkContainer>

									<LinkContainer to="/lookbook">
										<Nav.Link> Look Book</Nav.Link>
									</LinkContainer>
								</>
							)}

							<LinkContainer to="/cart">
								<Nav.Link>
									<i className="fas fa-shopping-cart"></i> Cart
								</Nav.Link>
							</LinkContainer>
							{userInfo ? (
								<NavDropdown title={userInfo.name} id="username">
									<LinkContainer to="/profile">
										<NavDropdown.Item> Profile </NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Item onClick={logoutHandler}>
										{' '}
										Logout{' '}
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<LinkContainer to="/login">
									<Nav.Link>
										<i className="fas fa-user"></i>Sign In{' '}
									</Nav.Link>
								</LinkContainer>
							)}
							{userInfo && userInfo.isAdmin && (
								<NavDropdown title="Admin" id="adminmenu">
									<LinkContainer to="/admin/userList">
										<NavDropdown.Item> Users </NavDropdown.Item>
									</LinkContainer>

									<LinkContainer to="/admin/productList">
										<NavDropdown.Item> Products </NavDropdown.Item>
									</LinkContainer>

									<LinkContainer to="/admin/orderList">
										<NavDropdown.Item> Orders </NavDropdown.Item>
									</LinkContainer>

									<LinkContainer to="/admin/blogList">
										<NavDropdown.Item> Blogs </NavDropdown.Item>
									</LinkContainer>
								</NavDropdown>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;

//bg='dark' variant='dark'
