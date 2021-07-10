import React, { useEffect } from 'react';
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Checkout from '../components/Checkout';
import { createOrder } from '../actions/orderActions';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';
import { USER_DETAILS_RESET } from '../constants/userConstants';
import KhaltiCheckout from 'khalti-checkout-web';

const PlaceOrderScreen = ({ history }) => {
	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);

	if (!cart.shippingAddress.address) {
		history.push('/shipping');
	} else if (!cart.paymentMethod) {
		history.push('/payment');
	}

	//Price calculation
	const addDecimals = (num) => {
		return (Math.round(num * 100) / 100).toFixed(2);
	};

	cart.itemsPrice = addDecimals(
		cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
	);
	//if item price is greater than 1000 then 100 or 150
	cart.shippingPrice = addDecimals(cart.itemsPrice > 1000 ? 100 : 150);
	//5% tax
	cart.taxPrice = addDecimals(Number((0.05 * cart.itemsPrice).toFixed(2)));

	cart.totalPrice = (
		Number(cart.itemsPrice) +
		Number(cart.shippingPrice) +
		Number(cart.taxPrice)
	).toFixed(2);

	const orderCreate = useSelector((state) => state.orderCreate);
	const { order, success, error } = orderCreate;

	useEffect(() => {
		if (success) {
			history.push(`/order/${order._id}`);
			dispatch({ type: USER_DETAILS_RESET });
			dispatch({ type: ORDER_CREATE_RESET });
		}
	}, [history, success]);

	//Khalti payment integration
	let config = {
		publicKey: 'test_public_key_3fdfd9a5bc0344ff9a4087c020d9cafe',
		productIdentity: '1234567890',
		productName: 'Poshak',
		productUrl: 'http://localhost:3000/',
		eventHandler: {
			onSuccess(payload) {
				console.log(payload);
			},

			onError(error) {
				console.log(error);
			},
			onClose() {
				console.log('widget is closing');
			},
		},
		paymentPreference: [
			'KHALTI',
			'EBANKING',
			'MOBILE_BANKING',
			'CONNECT_IPS',
			'SCT',
		],
	};

	let checkout = new KhaltiCheckout(config);

	const Khalti = async () => {
		checkout.show({ amount: cart.totalPrice * 100 });
	};

	const placeOrderHandler = () => {
		dispatch(
			createOrder({
				orderItems: cart.cartItems,
				shippingAddress: cart.shippingAddress,
				paymentMethod: cart.paymentMethod,
				itemsPrice: cart.itemsPrice,
				shippingPrice: cart.shippingPrice,
				taxPrice: cart.taxPrice,
				totalPrice: cart.totalPrice,
			})
		);
	};
	return (
		<>
			<Checkout step1 step2 step3 step4 />
			<Row>
				<Col md={8}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h2> Shipping </h2>
							<p>
								<strong> Address: </strong>
								{cart.shippingAddress.address}, {cart.shippingAddress.city},{' '}
								{cart.shippingAddress.postalCode},{' '}
								{cart.shippingAddress.country}
							</p>
						</ListGroup.Item>

						<ListGroup.Item>
							<h2>Payment Method</h2>
							<strong> Method: </strong>
							{cart.paymentMethod}
						</ListGroup.Item>

						<ListGroup.Item>
							<h2>Order Items</h2>
							{cart.cartItems.length === 0 ? (
								<Message> Your cart is empty </Message>
							) : (
								<ListGroup variant="flush">
									{cart.cartItems.map((item, index) => (
										<ListGroup.Item key={index}>
											<Row>
												<Col md={1}>
													<Image
														src={item.image}
														alt={item.name}
														fluid
														rounded
													/>
												</Col>
												<Col>
													<Link to={`/product/${item.product}`}>
														{item.name}
													</Link>
												</Col>
												<Col md={4}>
													{item.qty} x Rs. {item.price} = Rs.
													{item.qty * item.price}
												</Col>
											</Row>
										</ListGroup.Item>
									))}
								</ListGroup>
							)}
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={4}>
					<Card>
						<ListGroup variant="flush">
							<ListGroup.Item>
								<h2> Order Summary</h2>
							</ListGroup.Item>

							<ListGroup.Item>
								<Row>
									<Col> Items </Col>
									<Col> Rs.{cart.itemsPrice}</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item>
								<Row>
									<Col> Shipping </Col>
									<Col> Rs.{cart.shippingPrice}</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item>
								<Row>
									<Col> Tax </Col>
									<Col> Rs.{cart.taxPrice}</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item>
								<Row>
									<Col> Total </Col>
									<Col> Rs.{cart.totalPrice}</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item>
								{error && <Message variant="danger">{error}</Message>}
							</ListGroup.Item>

							<ListGroup.Item>
								<Button
									type="button"
									className="btn-block"
									disabled={cart.cartItems === 0}
									onClick={placeOrderHandler}
								>
									Confirm Order
								</Button>
								<Button type="button" className="btn-block" onClick={Khalti}>
									pay with khalti
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default PlaceOrderScreen;
