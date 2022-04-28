import React from "react"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/Shop/ItemList/ItemListContainer"
import ItemDetailContainer from "./components/Shop/ItemDetail/ItemDetailContainer"

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route path="/category/:categoryId" element={<ItemListContainer />} />
					<Route path="/item/:id" element={<ItemDetailContainer />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
