import classNames from 'classnames';
import styles from './Section.module.css';

export default function Section({
    id,
	title = "Section's Title",
	children,
	className,
    shape = false
}) {
	return (
		<>
			{shape && <div className={styles.shape} />}
			<section id={id}
				className={className}
			>
				<div className='container'>
					<h2 className='display-medium'>{title}</h2>
					{children}
				</div>
			</section>
			{shape && <div className={styles.shape} />}
		</>
	);
}
