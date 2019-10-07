import React from 'react';
import { CartContext } from '../context/CartContext'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
