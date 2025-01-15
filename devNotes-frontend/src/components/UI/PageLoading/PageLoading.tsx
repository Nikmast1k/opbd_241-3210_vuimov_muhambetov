import React, { FC } from 'react'
import styles from './PageLoading.module.scss'
import Spinner from '../Spinner/Spinner'

interface PageLoadingProps {
	full?: boolean
}

const PageLoading: FC<PageLoadingProps> = ({ full }) => {
	return (
		<div className={`${styles.pageLoading} ${full && styles.full}`}>
			<div className={styles.spinner}>
				<Spinner />
			</div>
		</div>
	)
}

export default PageLoading
