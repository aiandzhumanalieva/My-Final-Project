import React from 'react'
import MyButton from '../MyButton/MyButton'
import styles from './Info.module.scss'
const Info = () => {
	return (
		<div className={styles.info}>
			<div className={styles.line}></div>
			<div className={styles.info__subtitle}>
				<div className={styles.info__left}>
					<h3>beginnings</h3>
					<p>
						Credibly innovate granular internal or organic sources whereas high
						standards in web-readiness. Energistically scale future-proof core
						competencies vis-a-vis impactful experiences.
					</p>
					<p>
						Dramatically synthesize integrated schemas. with optimal networks.
					</p>
				</div>
				<div className={styles.info__right}>
					<img src='https://i.ibb.co/M5gTDDz/info1.png ' />
				</div>
			</div>
			<div className={styles.line}></div>
			<div className={styles.info__subtitle}>
				<div className={styles.info__right}>
					<img src='https://i.ibb.co/k6WFTNJ/info2.png ' />
				</div>
				<div className={styles.info__left}>
					<h3>carrer</h3>
					<p>
						Collaboratively administrate turnkey channels whereas virtual
						e-tailers.
					</p>
					<p>
						Objectively seize scalable metrics whereas proactive e-services
						seamlessly empower fully researched growth strategies.
					</p>
					<p>And interoperable internal or “organic” sources.</p>
					<MyButton />
				</div>
			</div>
			<div className={styles.line}></div>
			<div className={styles.info__subtitle}>
				<div className={styles.info__left}>
					<h3>products</h3>
					<p>
						Seamlessly empower fully researched growth strategies and
						interoperable internal or “organic” sources.
					</p>
					<p>
						Credibly innovate granular internal or “organic” sources whereas
						high standards in web-readiness.
					</p>
					<p>Energistically scale future-proof core competence</p>
				</div>
				<div className={styles.info__right}>
					<img src='https://i.ibb.co/1v0rt3N/info3.png ' />
				</div>
			</div>
			<div className={styles.line}></div>
		</div>
	)
}

export default Info
