import React 	from 'react';
import './NavMenu.scss';

const NavMenu = (props: any): JSX.Element => {
	const scrollTo = (ref: any) => {
		window.scrollTo({
			top: ref.current.offsetTop,
			behavior: 'smooth',
		});
	};

	return (
		<div className='nav__container'>
			<ul className='nav__menu-list'>
				<li className='nav__menu-item' onClick={() => scrollTo(props.Inicio)}>Inicio</li>
				<li className='nav__menu-item' onClick={() => scrollTo(props.Sobre)}>Sobre</li>
				<li className='nav__menu-item' onClick={() => scrollTo(props.Projetos)}>Projetos</li>
			</ul>
		</div>
	);
};

export default NavMenu;
