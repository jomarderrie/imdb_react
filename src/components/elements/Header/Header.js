import React from 'react';
import './Header.css';
import logo from './reactMovie_logo.png';
import logo2 from './tmdb_logo.png';

const Header = () => {
	return (
		<div className="rmdb-header">
			<div className="rmdb-header-content">
				<img className="rmdb-logo" src={logo} alt="deez nuts.jpg" />
				<img className="rmdb-tmdb-logo" src={logo2} alt="ok nuts" />
			</div>
		</div>
	);
};

export default Header;
