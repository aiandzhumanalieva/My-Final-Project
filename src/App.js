import React from 'react'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Basket from './Pages/Basket/Basket'
import axios from 'axios'
import { MainContext } from './context'
const App = () => {
	const [items, setItems] = useState([])
	const [cartItems, setCartItems] = useState([])
	const [value, setValue] = useState('')
	const [currentPage, setCurrentPage] = useState(1)
	const [itemsPerPage] = useState(2)

	const allPrice = cartItems.reduce(
		(currentValue, nextValue) => (currentValue += nextValue.price),
		0
	)
	const allItems = cartItems.length
	useEffect(() => {
		axios
			.get('https://61fa1c7131f9c2001759664d.mockapi.io/cart')
			.then(resp => setItems(resp.data))

		axios
			.get('https://61fa1c7131f9c2001759664d.mockapi.io/newCart')
			.then(res => setCartItems(res.data))
	}, [])
	const addToCart = obj => {
		axios.post('https://61fa1c7131f9c2001759664d.mockapi.io/newCart', obj)
		setCartItems(prev => [...prev, obj])
	}
	const removeItem = id => {
		axios.delete(`https://61fa1c7131f9c2001759664d.mockapi.io/newCart/${id}`)
		setCartItems(prev => prev.filter(item => item.id != id))
	}
	const totalItems = items.length

	const lastItemsIndex = currentPage * itemsPerPage
	const firstItemsIndex = lastItemsIndex - itemsPerPage
	const myCurrentPage = items.slice(firstItemsIndex, lastItemsIndex)

	const paginate = pageNumber => setCurrentPage(pageNumber)

	return (
		<>
			<MainContext.Provider
				value={{
					cartItems,
					allPrice,
					allItems,
					removeItem,
					addToCart,
					items,
					value,
					setValue,
					itemsPerPage,
					totalItems,
					myCurrentPage,
					paginate,
				}}
			>
				<Routes>
					<Route path='basket' element={<Basket />} />
					<Route path='/' element={<Home />} />
				</Routes>
			</MainContext.Provider>
		</>
	)
}

export default App
