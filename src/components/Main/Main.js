import React from 'react'
import styles from './Main.module.scss'
const Main = () => {
	return (
		<div className={styles.main}>
			<img src='https://i.ibb.co/M2nzP1n/shoop.png' alt='' />
			<div className={styles.submain}>
				<div className={styles.submain_text}>
					<p>New</p>
					<h3>Spring Cushion Collection 2022</h3>
					<button>Buy Now</button>
				</div>
			</div>
		</div>
	)
}

export default Main
