import React 								from 'react';
import { BrowserRouter, Route, Routes } 	from 'react-router-dom';
import Home 								from '../../pages/Home/Home';
import Project2 							from '../../pages/Projects/Finance/Finance';
import Project3 							from '../../pages/Projects/Quotes/Quotes';
import Redirect 							from '../RedirectComponent/Redirect';


const routes = [
	{
		path: '/',
		Component: Home,
	},
	{
		path: '/home',
		Component: Home,
	},
	{
		path: '/projects/minejs',
		Component: Redirect,
	},
	{
		path: '/projects/finance',
		Component: Project2,
	},
	{
		path: '/projects/quotes',
		Component: Project3,
	},
	{
		path: '*',
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
