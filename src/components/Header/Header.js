/* eslint-disable jsx-a11y/alt-text */
// { Lib }
import {
	MenuIcon,
	SearchIcon,
	ShoppingCartIcon,
} from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = ({ value, setValue, allItems }) => {
	return (
		<header className={styles.header}>
			<div className={styles.header_nav}>
				<Link to='/'>
					<div className={styles.header_left}>
						<img
							src='https://i.ibb.co/4Jr6CHX/IMAGE.png'
							alt='IMAGE'
							className={styles.fill}
						/>
					</div>
				</Link>

				<div className={styles.header_center}>
					<input
						type='text'
						value={value}
						onChange={e => setValue(e.target.value)}
					/>
					<SearchIcon />
				</div>
				<div className={styles.header_right}>
					<p>Home</p>
					<p>About me</p>
					<p>Products</p>
					<p>Contact me</p>
					<Link to={'basket'}>
						<div className={styles.right_right}>
							<span>{allItems}</span>
							<img
								src='https://i.ibb.co/JF7bGDs/sopping-card.png'
								alt='sopping-card'
								width={22}
								height={20}
							/>
						</div>
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
