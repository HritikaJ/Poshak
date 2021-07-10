import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import TopProducts from '../components/TopProducts';
import { listProducts } from '../actions/productActions';

const HomeScreen = ({ match }) => {
	const keyword = match.params.keyword;

	const pageNumber = match.params.pageNumber || 1;

	const dispatch = useDispatch();

	const productList = useSelector((state) => state.productList);
	const { loading, error, products, pages, page } = productList;

	useEffect(() => {
		dispatch(listProducts(keyword, pageNumber)); //listProduct: action that calls product from backend
	}, [dispatch, keyword, pageNumber]);

	return (
		<>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger"> {error}</Message>
			) : (
				<>
					{!keyword ? (
						<TopProducts />
					) : (
						<Link to="/" className="btn btn-light">
							Go Back
						</Link>
					)}

					<Row>
						{products.map((product) => (
							<div className="productCard ">
								<Col key={product._id}>
									<Product product={product} />
								</Col>
							</div>
						))}
					</Row>
					<Paginate
						pages={pages}
						page={page}
						keyword={keyword ? keyword : ''}
					/>
				</>
			)}
		</>
	);
};

export default HomeScreen;

// sm={12} md={6} lg={4} xl={3}
