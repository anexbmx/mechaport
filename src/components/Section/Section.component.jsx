import styles from './Section.module.css';

export default function Section({
	title = "Section's Title",
	children,
	className,
}) {
	return (
		<section className={className}>
			<div className='container'>
				<h2 className='display-medium'>{title}</h2>
				{children}
			</div>
            {/* <svg
				width='1920'
				height='370'
				viewBox='0 0 1920 370'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				id='svg683986751_282'
			>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M1920 370V0C1862.65 221.671 1437.94 254.59 637.645 316.62C446.549 331.431 234.037 347.903 0 369V370H1920Z'
					fill='#F5F5F7'
				/>
			</svg> */}
		</section>
	);
}
