import React, { useContext } from 'react'
import Header from '../components/Header'
import Main from '../components/Main/Main'
import Cart from '../components/Cart/Cart'
import { MainContext } from '../context'
import Pagination from '../components/Pagination/Pagination'
import About__me from '../components/About__me/About__me'
import Info from '../components/Info/Info'
import Adress from '../components/Adress'
import Footer from '../components/Footer/Footer'
const Home = () => {
	const { items, value, setValue, addToCart, allItems, isLoading } =
		useContext(MainContext)
	return (
		<div className='container'>
			<Header value={value} setValue={setValue} allItems={allItems} />
			<Main />
			{/* <Pagination /> */}
			<About__me />
			<Info />
			<div className='cart'>
				{items
					.filter(title =>
						title.title.toLowerCase().includes(value.toLowerCase())
					)
					.map(item => (
						<Cart
							title={item.title}
							price={item.price}
							imgUrl={item.image}
							key={item.id}
							onPlus={() => addToCart(item)}
						/>
					))}
			</div>
			<Adress />
			<Footer />
		</div>
	)
}

export default Home
