import Image from 'next/image';
import styles from './page.module.css';
import Header from './sections/Header/Header.component';
import Hero from './sections/Hero/Hero.component';
import Intro from './sections/Intro/Intro.component';
import HowItWorks from './sections/HowItWorks/HowItWorks.component';
import IconNumber from '../components/IconNumber/IconNumber.component';

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<Intro />
            <HowItWorks />

		</>
	);
}
