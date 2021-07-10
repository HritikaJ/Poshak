import React from 'react';

const PolicyScreen = ({ history }) => {
	return (
		<div>
			<h1> Return Policy</h1>
			<p>
				{' '}
				<ul>
					<li>You can return the purchased clothes within 48 hours.</li>
					<li>
						You can call us or leave a message on messenger or e-mail if you
						wish to return a clothing item.
					</li>
					<li>
						It is important that the tags of the clothing items have been not
						been removed.
					</li>
					<li>
						The clothes should be in the same condition as they were bought{' '}
					</li>
					<li>We do not accept worn or washed clothes.</li>
				</ul>{' '}
			</p>

			<div className="facilities">
				<div className="facility-1">
					<img src="/images/credit-card.svg" width="50" height="50" />
					<h1> Secure Payment </h1>
					<p> Khalti payment integration </p>
				</div>
				<div className="facility-2">
					<img src="/images/free-delivery.svg" width="50" height="50" />
					<h1> Free Delivery</h1>
					<p> Free shipping in Kathmandu </p>
				</div>
				<div className="facility-3">
					<img src="/images/package.svg" width="50" height="50" />
					<h1> Genuine Products</h1>
					<p> Best fabric and quality </p>
				</div>
			</div>

			<h1> Refund Policy</h1>
			<p>
				<ul>
					<li>
						If the clothes are returned in a proper state after 48 hours and
						within 72 hours, you will be refunded with 50% of the money.
					</li>
					<li>
						The money is refunded from the same source through which it had been
						received.
					</li>
					<li>
						We take full responsiblity on damaged clothes. You will receive 100%
						refund if you get delivered a damaged clothing item.
					</li>
				</ul>
			</p>
		</div>
	);
};

export default PolicyScreen;
