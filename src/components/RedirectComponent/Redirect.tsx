import React, { useEffect } from 'react';

const Redirect = () => {
	useEffect(() => {
		window.location.href = 'https://uecraft.github.io';
	}, []);
	return null;
};

export default Redirect;
