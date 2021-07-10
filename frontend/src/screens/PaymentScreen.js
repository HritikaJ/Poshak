import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import Checkout from '../components/Checkout';
import { savePaymentMethod } from '../actions/cartActions';

const PaymentScreen = ({ history }) => {
	const cart = useSelector((state) => state.cart);
	const { shippingAddress } = cart;

	if (!shippingAddress) {
		history.push('/shipping');
	}

	const [paymentMethod, setPaymentMethod] = useState('Khalti');

	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(savePaymentMethod(paymentMethod));
		history.push('/placeOrder');
	};

	return (
		<FormContainer>
			<Checkout step1 step2 step3 />

			<Form onSubmit={submitHandler}>
				<Form.Group>
					<h1 style={{ marginBottom: '30px' }}> Payment Method </h1>
					<Col style={{ display: 'flex', marginLeft: '185px' }}>
						<Form.Check
							style={{ marginRight: '80px' }}
							type="radio"
							label="Khalti"
							id="Khalti"
							name="paymentMethod"
							value="Khalti"
							checked
							onChange={(e) => setPaymentMethod(e.target.value)}
						/>
						<Form.Check
							type="radio"
							label=" On Delivery"
							id="onDelivery"
							name="paymentMethod"
							value="On Delivery"
							onChange={(e) => setPaymentMethod(e.target.value)}
						/>
					</Col>
				</Form.Group>

				<Button
					type="submit"
					variant="primary"
					style={{ marginLeft: '250px', marginTop: '50px' }}
				>
					Continue
				</Button>
			</Form>
		</FormContainer>
	);
};

export default PaymentScreen;
