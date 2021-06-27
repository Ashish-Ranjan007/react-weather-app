import React from 'react';
import Main from './main/Main';
import Sidebar from './sidebar/Sidebar';
import './App.css';

const App = () => {
	return (
		<div className="app">
			<div className="app__sidebar">
				<Sidebar />
			</div>
			<div className="app__main">
				<Main />
			</div>
		</div>
	);
};

export default App;
