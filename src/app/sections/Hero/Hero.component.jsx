import classNames from 'classnames';
import styles from './Hero.module.css';

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={classNames('container', styles.container)}>
				<div className={styles.hero__intro}>
					<small className='body-small chip'>
						Ihre Experten für 3D-Touren mit Machaport
					</small>
					<h1 className='display-large'>
						Willkommen bei 3D-Touren in Düsseldorf
					</h1>
					<p className='text-secondary body-large'>
						Wir bieten modernste 3D-Touren, die Ihre Räumlichkeiten
						beeindruckend präsentieren.
					</p>
					<button
						className='btn btn--rounded shadow'
						aria-label='Get Started with 3D-Touren'
					>
						Get Started
					</button>
				</div>
				<div className={styles.hero__demo}>
					<video
						loop
						muted
						autoPlay
						src='matterport.mp4'
						preload='metadata'

						aria-label='3D-Tour Demo Video'
					></video>
				</div>
			</div>
		</section>
	);
}
