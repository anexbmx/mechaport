import Section from '../../../components/Section/Section.component';
import styles from './Intro.module.css';

export default function Intro() {
	return (
		<Section title='Erleben Sie Ihre Räume neu' className={styles.intro}>
			<p className='text-secondary body-large'>
				Bei 3D-Touren in Düsseldorf bieten wir Ihnen modernste
				3D-Touren, die Ihre Räumlichkeiten auf eindrucksvolle Weise
				präsentieren. Egal, ob Sie ein Restaurantbesitzer,
				Immobilienmakler oder Ferienwohnungsbesitzer sind, unsere
				3D-Touren bieten Ihren Kunden ein immersives und interaktives
				Erlebnis.
			</p>
		</Section>
	);
}
