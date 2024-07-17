import styles from './Header.module.css';

export default function Header() {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<a className='logo' href='#'>MECHAPORT</a>
				<ul className={styles.ul}>
					<li>
						<a href='#'>Dienstleistungen</a>
					</li>
					<li>
						<a href='#'>So funktioniert es</a>
					</li>
					<li>
						<a href='#'>Kontaktieren</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
