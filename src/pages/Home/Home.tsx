/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './Home.scss';
import Typewriter from 'typewriter-effect';
import ParticlesComponent from '../../components/Particles/Particles';
import TabView from '../../components/TabView/TabView';


const Home = () => {


	return (
		<>
			<div className="intro__container">
				<ParticlesComponent />
				<h1 className="primary_name">Davi Rodrigues</h1>
				<div className="primary__desc">
					<Typewriter
						options={{
							strings: [
								'Desenvolvedor Web',
								'Entusiasta da tecnologia',
								'Estudante de Sistemas de Informação',
								'E esse é o meu portfólio!',
								'Fique a vontade para explorar',
								'Hello World!',
							],
							autoStart: true,
							loop: true,
							delay: 50,
						}}
					/>
				</div>
			</div>
			<div className="about__container">
				<div className="about__container-photo">
					<img className='about__container-img' src="https://avatars.githubusercontent.com/daviue" alt="Davi Rodrigues" />
				</div>
				<div className="about__container-text">
					<h1 className="about__container-title">Sobre mim</h1>
					<p className='about__text'>Eu sou Davi Rodrigues, ou "daviuee". Tenho 19 anos e atualmente estou cursando Sistemas de Informação.</p>
					<p className='about__text'>Venho trabalhado com desenvolvimento e manutenção de aplicações web, utilizando de tecnologias como Typescript, Node, React e Angular.</p>
				</div>
			</div>
		</>
	);
};

export default Home;
