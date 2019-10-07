import React, { useState } from 'react';
import { ProductContext } from '../src/context/ProductContext'
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		<div className="App">
			<Navigation cart={cart} />

			<ProductContext.Provider value={{ products, addItem }}>
			{/* Routes */}
			<Route
				exact
				path="/"
				component={Products}
				// render={() => (
				// 	<Products
				// 		products={products}
				// 		addItem={addItem}
					/>
				)}
			/>

			<Route
				path="/cart"
				component={ShoppingCart}
				// render={() => <ShoppingCart cart={cart} />}
			/>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
