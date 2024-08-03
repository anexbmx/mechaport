'use client';

import { MdClose, MdMenu } from 'react-icons/md';
import styles from './Header.module.css';
import { useState } from 'react';
import classNames from 'classnames';

export default function Header() {
	const [menu, setMenu] = useState(false);

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<a
					className='logo'
					href='#'
				>
					MECHAPORT
				</a>
				<ul
					onClick={() => setMenu(false)}
					className={classNames(styles.ul, {
						[styles.show]: menu,
					})}
				>
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
				<button
					className={classNames('btn btn-icon', styles.btnNav)}
					onClick={() => setMenu(!menu)}
                    aria-label={menu ? 'Close menu' : 'Open menu'}
				>
					{!menu ? <MdMenu size={22} /> : <MdClose size={22} />}
				</button>
			</nav>
		</header>
	);
}
