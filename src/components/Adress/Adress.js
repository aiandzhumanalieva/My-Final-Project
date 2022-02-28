import React from 'react'
import styles from './Adress.module.scss'
const Adress = () => {
	return (
		<div className={styles.adress}>
			<div className={styles.adress__left}>
				<h3>Email</h3>
				<p>support@website.com</p>
				<h3>phone</h3>
				<p>800-123-456</p>
				<h3>address</h3>
				<p>23 Evergreen Street,San Francisco, California USA</p>
			</div>
			<div className={styles.adress__right}>
				<h3>address</h3>
				<p>
					Drop us your message and I'll get back to you as soon as possible.
				</p>

				<button>your name</button>
				<button>your company</button>
				<div>
					<button>your phone</button>
					<button>your emeal</button>
				</div>
				<button className={styles.button__address}>your message</button>
				<button className={styles.button__addres_small}>Let's talk</button>
			</div>
		</div>
	)
}

export default Adress
