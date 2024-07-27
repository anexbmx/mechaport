import classNames from 'classnames';
import styles from './Footer.module.css';

export default function Footer(props) {
	return (
		<>
			<div className={styles.shape}></div>
			<footer className={styles.footer}>
				<div className={classNames(styles.container, 'container')}>
					<a
						className='logo'
						href='#'
					>
						MECHAPORT
					</a>
					<div>
						<h2 className='headline-small'>Direktlinks</h2>
						<ul className='text-secondary body-medium'>
							<li>
								<a href='#services'>Dienstleistungen</a>
							</li>
							<li>
								<a href='#howItWorks'>So funktioniert es</a>
							</li>
							<li>
								<a href='#contact'>Kontaktieren</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className='headline-small'>Standort</h2>
						<a
							href='https://www.google.com/maps/search/?api=1&query=3D-Touren+in+D%C3%BCsseldorf,+Musterstra%C3%9Fe+1,+12345+D%C3%BCsseldorf'
							target='_blank'
							className='text-secondary body-medium'
						>
							3D-Touren in Düsseldorf
							<br />
							Musterstraße 1<br />
							12345 Düsseldorf
						</a>
					</div>
					<div>
						<h2 className='headline-small'>Nachricht schicken</h2>
						<p className='text-secondary body-medium mb-12'>
							Nutzen Sie unser erweitertes Formular, um mit uns
							Kontakt aufzunehmen, wenn Sie Hilfe benötigen oder
							Fragen zu meinen Leistungen haben.
						</p>
						<a
							href='#contactForm'
							className='btn btn--primary btn--rounded'
						>
							Contact
						</a>
					</div>
				</div>
			</footer>
		</>
	);
}
