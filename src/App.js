import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages/home';
import Type from './pages/types';
import Symptoms from './pages/symptoms';
import Prevention from './pages/prevention';

function App() {
return (
	<Router>
	<Routes>
		<Route path='/' element={<Home />} />
		<Route path='/home' element={<Home/>} />
		<Route path='/types' element={<Type/>} />
		<Route path='/symptoms' element={<Symptoms/>} />
		<Route path='/prevention' element={<Prevention/>} />
	</Routes>
	</Router>
);
}

export default App;