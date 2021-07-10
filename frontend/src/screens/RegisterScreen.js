import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { register } from '../actions/userActions';

const RegisterScreen = ({ location, history }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [userType, setUserType] = useState('basic');
	const [message, setMessage] = useState(null);

	const dispatch = useDispatch();

	const userRegister = useSelector((state) => state.userRegister);
	const { loading, error, userInfo } = userRegister;

	const redirect = location.search ? location.search.split('=')[1] : '/';

	useEffect(() => {
		if (userInfo) {
			history.push(redirect);
		}
	}, [history, userInfo, redirect]);

	const submitHandler = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setMessage('Passwords do not match. Re-enter!');
		} else {
			dispatch(register(name, email, password, userType));
		}
	};

	return (
		<FormContainer>
			{message && <Message variant="danger">{message}</Message>}
			{error && <Message variant="danger">{error}</Message>}
			{loading && <Loader />}
			<Form onSubmit={submitHandler}>
				<h1>Sign Up</h1>
				<Form.Group controlId="name">
					<Form.Label> Name </Form.Label>
					<Form.Control
						type="name"
						placeholder="Enter your name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</Form.Group>
				<Form.Group controlId="email">
					<Form.Label> Email Address </Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Form.Text className="text-muted">
						{' '}
						We'll never share your email with anyone else.{' '}
					</Form.Text>
				</Form.Group>
				<Form.Group controlId="password">
					<Form.Label> Password </Form.Label>
					<Form.Control
						type="password"
						placeholder="Enter password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Form.Text className="text-muted">
						{' '}
						Enter a strong password.{' '}
					</Form.Text>
				</Form.Group>
				<Form.Group controlId="confirmPassword">
					<Form.Label> Confirm Password </Form.Label>
					<Form.Control
						type="password"
						placeholder="Re-enter your password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label
						as="legend"
						style={{
							borderTop: '1px solid grey',
							fontSize: '14px',
							textAlign: 'center',
						}}
					>
						{' '}
						Select to sign up as a premium member{' '}
					</Form.Label>
					<Form.Check
						type="radio"
						label="Premium User"
						id="premium"
						name="userType"
						value="premium"
						onChange={(e) => setUserType(e.target.value)}
					/>
				</Form.Group>
				<Button type="submit" variant="primary">
					{' '}
					Register{' '}
				</Button>
			</Form>

			<Row className="py-3">
				<Col>
					{' '}
					Already have an account?{' '}
					<Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
						{' '}
						Login Here!{' '}
					</Link>
				</Col>
			</Row>
		</FormContainer>
	);
};

export default RegisterScreen;
