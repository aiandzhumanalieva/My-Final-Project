import React from 'react'
import MyButton from '../MyButton/MyButton'
import styles from './About__me.module.scss'
const About__me = () => {
	return (
		<div>
			<div className={styles.title}>
				<h3>I'm a cushion designer</h3>
				<p>
					Based in San Francisco, California I design trendy and fashion
					Cushions, since I have memory I always had a tendency to design and
					illustration.
				</p>
				<MyButton />
			</div>
			<div className={styles.blocks}>
				<div className={styles.block}>
					<img src='https://i.ibb.co/S0D01Sb/aboutme1.png ' alt='' />
					<h3>About me</h3>
					<p>Learn more</p>
				</div>
				<div className={styles.block}>
					<img src='https://i.ibb.co/mN5F8q0/aboutme2.png  ' alt='' />
					<h3>About me</h3>
					<p>Learn more</p>
				</div>
				<div className={styles.block}>
					<img src='https://i.ibb.co/jvgn69H/aboutme3.png ' alt='' />
					<h3>About me</h3>
					<p>Learn more</p>
				</div>
			</div>
		</div>
	)
}

export default About__me
