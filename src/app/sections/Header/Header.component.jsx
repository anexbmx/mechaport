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
				<a className='logo' href='#'>MECHAPORT</a>
				<ul className={styles.ul}>
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
            <button className={classNames('btn btn-icon', styles.btnNav)} onClick={() => setMenu(!menu) }>
                {!menu ? <MdMenu size={18} /> : <MdClose size={18} />}
            </button>
			</nav>
		</header>
	);
}
