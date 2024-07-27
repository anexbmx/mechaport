
import Header from './sections/Header/Header.component';
import Hero from './sections/Hero/Hero.component';
import Intro from './sections/Intro/Intro.component';
import HowItWorks from './sections/HowItWorks/HowItWorks.component';
import Services from './sections/Services/Services.component';
import WhyMachaport from './sections/WhyMachaport/WhyMachaport.component';
import Contact from './sections/Contact/Contact.component';
import Footer from './sections/Footer/Footer.component';

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<Intro />
            <HowItWorks />
            <Services/>
            <WhyMachaport />
            <Contact />
            <Footer />

		</>
	);
}
