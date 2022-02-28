import React from 'react'
import styles from './Cart.module.scss'
const Cart = ({ title, price, imgUrl, onPlus }) => {
	return (
		<div className={styles.cart__wrapper}>
			<div className={styles.cart__top}>
				<img src={imgUrl} alt='Cushion1' />
			</div>
			<div className={styles.cart__bottom}>
				<h3 className={styles.cart__title}>{title}</h3>
				<p className={styles.cart__price}>${price}</p>
				<button onClick={onPlus} className={styles.cart__add}>
					Add to Cart{' '}
				</button>
			</div>
		</div>
	)
}

export default Cart
