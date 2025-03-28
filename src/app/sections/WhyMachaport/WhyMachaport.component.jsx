import classNames from 'classnames';
import Section from '../../../components/Section/Section.component';
import styles from './WhyMachaport.module.css';
import { MdCheck } from 'react-icons/md';
import Image from 'next/image';

export default function WhyMachaport(props) {
	const data = [
		'Maximale Aufmerksamkeit',
		'Detailgetreue und realitätsnahe Darstellung',
		'Erhöhtes Interesse und Engagement potenzieller Gäste und Käufer',
		'Einzigartige Präsentation',
		'Erkundung Ihrer Räumlichkeiten zu jeder Zeit und von überall',
		'Wettbewerbsvorteil in der digitalen Welt',
		'Interaktive Elemente',
		'Visuell ansprechend und interaktiv',
		'Integration von Informationen, Videos und Buchungsoptionen direkt in die Tour',
	];
	return (
		<Section id='whyMachaport' title='Warum eine 3D-Tour mit Machaport?'>
			<div className={styles.checklist}>
				<div className={styles.checklist__imgWrapper}>
                    <div className={styles.checklist__img}>
                    <video
						loop
						muted
						autoPlay
						src='matterport2.mp4'
						preload='metadata'

						aria-label='3D-Tour Demo Video'
					></video>
                    </div>
                </div>
				<div className={styles.checklist__details}>
					<h3
						className={classNames(
							'text-secondary',
							styles.checklist__title
						)}
					>
						Eine 3D-Tour mit Machaport bietet zahlreiche Vorteile,
						die Ihre Präsentation auf das nächste Level heben
					</h3>
					<ul className={styles.checklist__items}>
						{data.map((item) => (
							<li
								key={item}
								className={styles.checklist__item}
							>
								<MdCheck
									className={styles.checklist__icon}
									size={18}
								/>
								<span className={styles.checklist__text}>
									{item}
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</Section>
	);
}
