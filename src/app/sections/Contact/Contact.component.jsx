import classNames from 'classnames';
import Section from '../../../components/Section/Section.component';
import styles from './Contact.module.css';
import { MdCall, MdEmail, MdLocationPin } from 'react-icons/md';

const ContactCard = () => {
	return (
		<div className={styles.contact__card}>
			<div>
				<h3 className='headline-small'>Kontaktinformationen</h3>
				<p className='text-secondary-reversed'>
                Füllen Sie das Formular aus und ich werde mich innerhalb von 24 Stunden bei Ihnen melden.
				</p>
			</div>
			<address className={styles.address}>
				<ul className={styles.address__details}>
					<li  className={styles.address__item}>
						<MdCall  className='icon--inline' size={14} />
						<a href='tel:+49 123 456 7890'>+49 123 456 7890</a>
					</li>
					<li className={styles.address__item}>
						<MdEmail  className='icon--inline' size={14} />
						<a href='mailto:info@3d-touren-duesseldorf.com'>
							info@3d-touren-duesseldorf.com
						</a>
					</li>
					<li className={styles.address__item}>
						<MdLocationPin  className='icon--inline' size={14} />
						<a
							href='https://www.google.com/maps/search/?api=1&query=3D-Touren+in+D%C3%BCsseldorf,+Musterstra%C3%9Fe+1,+12345+D%C3%BCsseldorf'
							target='_blank'
						>
							3D-Touren in Düsseldorf
							<br />
							Musterstraße 1<br />
							12345 Düsseldorf
						</a>
					</li>
				</ul>
			</address>
		</div>
	);
};

const ContactForm = () => {
	return (
		<form id='contactForm' className={styles.form}>
			<input
				type='text'
				name='name'
				placeholder='Name'

                style={{gridArea: 'name'}}

			/>
			<input
				type='email'
				name='email'
				placeholder='email'
                style={{gridArea: 'email'}}
			/>
			<textarea
            rows={6}
				name='message'
				placeholder='Nachricht'
                style={{gridArea: 'message'}}
				id=''
			></textarea>
			<button className='btn btn--primary' style={{gridArea: 'submit'}}>Senden</button>
		</form>
	);
};
export default function Contact(props) {
	return (
		<Section id='contact' title='Kontaktieren Sie Uns'>
			<p
				className={classNames(
					'text-secondary',
					'body-large',
					styles.intro
				)}
			>
				Interessiert? Lassen Sie uns gemeinsam Ihre Räume in einer neuen
				Dimension präsentieren. Kontaktieren Sie uns noch heute für ein
				unverbindliches Angebot und erfahren Sie mehr über unsere
				maßgeschneiderten Lösungen.
			</p>
			<div className={styles.contact}>
				<ContactCard />
				<ContactForm />
			</div>
		</Section>
	);
}
