import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Nav from './components/Nav';

function App() {
	return (
		<Router>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;
