import React 								from 'react';
import { BrowserRouter, Route, Routes } 	from 'react-router-dom';
import Home from '../../pages/Home/Home';


const routes = [
	{
		path: '/',
		Component: Home,
	},
	{
		path: '/home',
		Component: Home,
	},
];

const DefaultRoutes = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(({ path, Component }) => (
					<Route
						path={path}
						key={path}
						element={<Component />}
					/>
				))}
			</Routes>
		</BrowserRouter>
	);
};


export default DefaultRoutes;
