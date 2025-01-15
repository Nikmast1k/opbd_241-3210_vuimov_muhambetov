import React, { FC } from 'react'
import styles from './Spinner.module.scss'

interface SpinnerProps {
	className?: string
	circleColor?: string
}

const Spinner: FC<SpinnerProps> = ({ className , circleColor}) => {
	return (
		<div>
			<svg className={`${styles.spinner} ${className}`} viewBox='0 0 50 50'>
				<circle className={styles.path} style={{ stroke: circleColor && circleColor }} cx='25' cy='25' r='20' fill='none' strokeWidth='5' />
			</svg>
		</div>
	)
}

export default Spinner
