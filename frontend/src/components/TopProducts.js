import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listTopProducts } from '../actions/productActions';

const TopProducts = () => {
	const dispatch = useDispatch();

	const productTopRated = useSelector((state) => state.productTopRated);
	const { loading, error, products } = productTopRated;

	useEffect(() => {
		dispatch(listTopProducts());
	}, [dispatch]);

	return (
		<div className="top-products">
			<Carousel
				pause="hover"
				className="slider"
				style={{
					backgroundImage: 'url(/images/bg.png)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: '100% 100%',
				}}
			>
				{products.map((product) => (
					<Carousel.Item key={product._id}>
						<Link to={`/product/${product._id}`}>
							<Image src={product.image} alt={product.name} fluid />
							<Carousel.Caption className="carousel-caption">
								<h2>Top Rated Products</h2>
							</Carousel.Caption>
						</Link>
					</Carousel.Item>
				))}
			</Carousel>
		</div>
	);
};

export default TopProducts;
