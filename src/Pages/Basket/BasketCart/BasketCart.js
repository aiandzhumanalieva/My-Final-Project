import React from 'react'
import styles from '../Basket.module.scss'
const BasketCart = ({ title, price, imgUrl, removeItem }) => {
	return (
		<div className={styles.shopping__card}>
			<div className={styles.subtitle}>
				<div className={styles.image}>
					<img src={imgUrl} alt='' />
				</div>
				<div className={styles.card__info}>
					<h3>{title}</h3>
					<div className={styles.price}>
						<p>
							Price <span>${price}</span>
						</p>
					</div>
					<div className={styles.cart__quality}>
						<p>
							Size: <span>Medium</span>
						</p>
					</div>
					<div className={styles.button}>
						<button className={styles.quantity}>Qty: 1</button>
						<button className={styles.edit} onClick={removeItem}>
							Delete
						</button>
						<button className={styles.edit}>Save</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BasketCart
