import classNames from 'classnames';
import IconNumber from '../../../components/IconNumber/IconNumber.component';
import Section from '../../../components/Section/Section.component';
import styles from './HowItWorks.module.css';

const Process = ({ item: { id, title, description } }) => {
	return (
		<article className={classNames('card', styles.process)}>
			<IconNumber number={id} />
			<h3 className='headline-small'>{title}</h3>
			<p className='text-secondary'>{description}</p>
		</article>
	);
};
export default function HowItWorks() {
	const steps = [
		{
			id: 'one',
			title: 'Kontaktaufnahme',
			description:
				'Treten Sie mit uns in Verbindung und teilen Sie uns Ihre Anforderungen mit.',
		},
		{
			id: 'two',
			title: 'Planung und Vorbereitung',
			description:
				'Wir besprechen die Details und planen die 3D-Tour Ihrer Räumlichkeiten.',
		},
		{
			id: 'three',
			title: 'Erstellung der 3D-Tour',
			description:
				'Unsere Experten nutzen die Machaport-Software, um eine beeindruckende 3D-Tour Ihrer Räumlichkeiten zu erstellen.',
		},
		{
			id: 'four',
			title: 'Integration und Veröffentlichung',
			description:
				'Die fertige 3D-Tour wird auf Ihrer Webseite oder Plattform integriert und veröffentlicht.',
		},
	];
	return (
		<Section
        id='howItWorks'
			className={styles.howitworks}
			title='So Funktioniert Es ?'
            shape
		>
			<div className={styles.processes}>
				{steps.map((item) => (
					<Process
						key={item.id}
						item={item}
					/>
				))}
			</div>
		</Section>
	);
}
