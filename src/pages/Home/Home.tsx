/* eslint-disable react/no-unescaped-entities */
import React, { useRef } 		from 'react';
import Typewriter 				from 'typewriter-effect';
import ParticlesComponent 		from '../../components/Particles/Particles';
import NavMenu 					from '../../components/NavMenu/NavMenu';
import CarouselComponent 		from '../../components/Carousel/Carousel';
import './Home.scss';


const Home = (): JSX.Element => {
	const Inicio = useRef(null);
	const Sobre = useRef(null);
	const Projetos = useRef(null);


	return (
		<div className='home'>
			<div className="intro__container" ref={Inicio}>
				<NavMenu Inicio={Inicio} Sobre={Sobre} Projetos={Projetos}/>
				<ParticlesComponent />
				<span className="primary__skills">React / Angular / Next / NodeJS / Python / C#</span>
				<h1 className="primary_name">Davi Rodrigues</h1>
				<div className="primary__desc">
					<Typewriter
						options={{
							strings: [
								'Hello World!',
								'Desenvolvedor Fullstack',
								'Entusiasta da tecnologia',
								'Estudante de Sistemas de Informação',
								'E esse é o meu portfólio!',
								'Fique a vontade para explorar',
								'Veja também meu GitHub!',
							],
							autoStart: true,
							loop: true,
							delay: 50,
						}}
					/>
				</div>
			</div>
			<div className="bottom__gradient"></div>
			<div className="about__container" ref={Sobre}>
				<div className="about__container-photo">
					<img className='about__container-img' src="https://avatars.githubusercontent.com/daviue" alt="Davi Rodrigues" />
				</div>
				<div className="about__container-text">
					<h1 className="about__container-title">Sobre mim</h1>
					<p className='about__text'>Tenho 20 anos e atualmente estou cursando Sistemas de Informação, tendo contato com programação desde os 14 anos sendo Python a primeira linguagem que tive contato.</p>
					<p className='about__text'>Venho trabalhando com desenvolvimento e manutenção de aplicações web, utilizando de tecnologias como Typescript, Node, React e Angular. Além de projetos de automação no qual utilizo Python ou C#.</p>
					<div className="social__networks">
						<a href='https://www.linkedin.com/in/rodriguesdavi/' target='_blank' rel='noreferrer' className="social__networks-link">LinkedIn</a>
						<a href='https://github.com/daviue' target='_blank' rel='noreferrer' className="social__networks-link">GitHub</a>
					</div>
				</div>
			</div>
			<div className='projects' ref={Projetos}>
				<CarouselComponent />
			</div>
			<div className="footer">
				<span className="footer__text">Davi Rodrigues 2023 &copy;</span>
			</div>
		</div>
	);
};

export default Home;
