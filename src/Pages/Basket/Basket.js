import React, { useContext } from 'react'
import Header from '../../components/Header'
import BasketCart from './BasketCart/BasketCart'
import styles from './Basket.module.scss'
import { MainContext } from '../../context'
const Basket = () => {
	const { cartItems, allPrice, allItems, removeItem } = useContext(MainContext)
	return (
		<div>
			<Header allItems={allItems} />
			<div className={styles.all}>
				<div className={styles.main}>
					<h3>Shopping Cart</h3>
					{cartItems.map(cartItem => (
						<BasketCart
							removeItem={() => removeItem(cartItem.id)}
							title={cartItem.title}
							price={cartItem.price}
							imgUrl={cartItem.image}
							key={cartItem.id}
						/>
					))}
				</div>
				<div className={styles.subtotal}>
					<h3>
						Subtotal ({allItems} items): <span>$ {allPrice}</span>
					</h3>
					<div className={styles.checkbox}>
						<input type='checkbox' />
						<p>This order contains a gift</p>
					</div>
					<button>Proceed to check out</button>
				</div>
			</div>
		</div>
	)
}

export default Basket
