import React 					from 'react';
import { Carousel } 			from 'react-responsive-carousel';
import { useNavigate } 		    from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.scss';

// assets
import project1 				from '../../assets/project1.jpg';
import project2 				from '../../assets/project2.jpg';
import project3 				from '../../assets/project3.jpg';

interface Project {
	id: number;
	title: string;
	desc: string;
	image: string;
	stacks: string[];
	path: string;
};

const Projects: Project[] = [
	{
		id: 1,
		title: 'Mine.js',
		desc: 'Minecraft clone feito usando Three.js e React.',
		image: project1,
		stacks: ['React', 'Three.js', 'Javascript'],
		path: '/projects/minejs',
	},
	{
		id: 2,
		title: 'Controle Financeiro',
		desc: 'Site com sistema simples para controle de finanças.',
		image: project2,
		stacks: ['React', 'Typescript', 'Styled Components', 'React Icons', 'Local Storage'],
		path: '/projects/finance',
	},
	{
		id: 3,
		title: 'Site de Frases',
		desc: 'Site com frases aleatórias de artistas e bandas do rock.',
		image: project3,
		stacks: ['React', 'Typescript', 'Styled Components', 'Axios', 'React Icons'],
		path: '/projects/quotes',
	},
];

const CarouselComponent = (): JSX.Element => {
	const history = useNavigate();

	return (
		<Carousel
			className='projects__container'
			showThumbs={false}
			autoPlay={true}
			interval={5000}
			transitionTime={500}
			infiniteLoop={true}
			showStatus={false}
			showIndicators={true}
			emulateTouch={true}
		>
			{Projects.map((project: any) => (
				<div className='content__container' key={project.id} onClick={()=> history(project.path) }>
					<p className='content__title'>{project.title}</p>
					<p className='content__desc'>{project.desc}</p>
					<img className='content__image' src={project.image} alt='Projeto 1' />
					<div className='content__stacks'>
						{project.stacks.map((stack: string, index: number) => (
							<p className='content__stacks-item' key={index}>{stack}</p>
						))}
					</div>
				</div>
			))}
		</Carousel>
	);
};

export default CarouselComponent;
