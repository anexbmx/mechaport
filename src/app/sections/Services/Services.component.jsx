import Image from 'next/image';
import Section from '../../../components/Section/Section.component';
import styles from './Services.module.css';
import classNames from 'classnames';

const Service = ({ item: { img, title, description } }) => {
	return (
		<article className={classNames('card', styles.service)}>
			<div className={styles.service__imgWrapper}>
				<Image className={styles.service__img} alt={title} src={img}  fill={true}      />
			</div>
			<div className={styles.service__details}>
                <h3 className='headline-small'>{title}</h3>
                <p className='text-secondary'>{description}</p>
            </div>
		</article>
	);
};
export default function Services(props) {
	const srv = [
		{
			img: '/restaurant.png',
			title: '3D-Touren für Restaurants',
			description:
				'Präsentieren Sie Ihr Restaurant auf einzigartige Weise mit virtuellen Rundgängen, die es Ihren Gästen ermöglichen, das Ambiente und die Atmosphäre Ihres Lokals vorab zu erleben.',
		},
		{
			img: '/immobilien.webp',
			title: '3D-Touren für Immobilien',
			description:
				'Bieten Sie potenziellen Käufern die Möglichkeit, sich vorab ein umfassendes Bild von der Immobilie zu machen, was Zeit spart und den Verkaufsprozess vereinfacht.',
		},
		{
			img: '/ferienwohnungen.jpg',
			title: '3D-Touren für Ferienwohnungen',
			description:
				'Ermöglichen Sie zukünftigen Gästen, ihre Urlaubsdestination zu erkunden, indem sie die Unterkunft virtuell vor der Buchung besichtigen.',
		},
	];
	return (
		<Section id='services' title='Unsere Dienstleistungen'>
			<div className={styles.container}>
				{srv.map((item) => (
					<Service
						key={item.img}
						item={item}
					/>
				))}
			</div>
		</Section>
	);
}
