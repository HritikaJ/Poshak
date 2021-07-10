import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const LookBookScreen = () => {
	return (
		<>
			<div className="lookbook">
				<h1> Look Book</h1>
				<p style={{ textAlign: 'center' }}>
					{' '}
					Seeking inspiration? Discover Poshak's MEN and WOMEN lookbook: a
					collection of stylings for you to create the perfect outfit.
				</p>
			</div>

			<div className="photo-grid">
				<div
					className="card_content card_content-tall card_content-wide"
					style={{
						backgroundImage: `url("https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80")`,
					}}
				></div>
				<div
					className="card_content"
					style={{
						backgroundImage: `url("https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=354&q=80")`,
					}}
				>
					{' '}
				</div>
				<div
					className="card_content"
					style={{
						backgroundImage: `url("https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80")`,
					}}
				></div>

				<div
					className="card_content card_content-tall "
					style={{
						backgroundImage: `url("https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80")`,
					}}
				></div>
				<div
					className="card_content card_content-wide"
					style={{
						backgroundImage: `url("https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")`,
					}}
				></div>

				<div
					className="card_content card_content-wide"
					style={{
						backgroundImage: `url("https://images.unsplash.com/photo-1548082644-d30472ade6be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80")`,
					}}
				></div>
				<div
					className="card_content card_content-wide card_content-tall"
					style={{
						backgroundImage: `url("https://images.unsplash.com/photo-1516763296043-f676c1105999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80")`,
					}}
				></div>
				<div
					className="card_content card_content-tall "
					style={{
						backgroundImage: `url("https://images.unsplash.com/photo-1520591799316-6b30425429aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80")`,
					}}
				></div>
				<div
					className="card_content card_content-tall card_content-wide"
					style={{
						backgroundImage: `url("https://images.unsplash.com/photo-1594750823491-e493d067ce3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80")`,
					}}
				></div>
				<div
					className="card_content card_content-wide"
					style={{
						backgroundImage: `url("https://images.unsplash.com/photo-1513373319109-eb154073eb0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80")`,
					}}
				></div>
				<div
					className="card_content"
					style={{
						backgroundImage: `url("https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80")`,
					}}
				></div>
			</div>
		</>
	);
};
export default LookBookScreen;
