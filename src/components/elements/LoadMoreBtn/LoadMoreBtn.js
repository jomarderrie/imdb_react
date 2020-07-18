import React from 'react';

import './LoadMoreBtn.css';

function LoadMoreBtn(props) {
	return (
		<div className="rmdb-loadmorebtn" onClick={props.onClick}>
			<p>{props.text}</p>
		</div>
	);
}

LoadMoreBtn.propTypes = {};

export default LoadMoreBtn;
