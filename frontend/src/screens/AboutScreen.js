import React from 'react';

const AboutScreen = ({ history }) => {
	return (
		<div className="container">
			<div className="about-section">
				<div className="shop-info">
					<img
						src="/images/aboutUs.jpg"
						style={{ width: 'auto', height: '733px' }}
					/>
				</div>

				<div className="shop-details">
					<h1> Welcome to Poshak! </h1>
					<p style={{ marginLeft: '40px', marginRight: '40px' }}>
						{' '}
						We believe in a world where you have total freedom to be you,
						without judgement. To experiment. To express yourself. To be brave
						and grab life as the extraordinary adventure it is. So we make sure
						everyone has an equal chance to discover all the amazing things
						they’re capable of – no matter who they are, where they’re from or
						what looks they like to boss. We exist to give you the confidence to
						be whoever you want to be.
					</p>
					<p style={{ marginLeft: '40px', marginRight: '40px' }}>
						Poshak is an e-commerce web application which aims to be your go-to
						shopping destination. We design seasonless essentials for everyday
						life. Perfect premium pieces to make you feel comfortable and
						confident, season after season.
					</p>
					<p style={{ marginLeft: '40px', marginRight: '40px' }}>
						{' '}
						Our premium customers are offered with the advantage to view blogs
						and look book. We assure to be of help in every possible way. Our
						vision is to build a community for fashion enthusiasts which is
						relatable and quirky at the same time.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutScreen;
