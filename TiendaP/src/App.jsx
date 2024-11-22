import { BrowserRouter, Route, Routes } from "react-router-dom";

import Start from "./components/pages/Start";
import ShowGarment from "./components/pages/ShowGarment";
import CartPage from "./components/pages/CartPage";
import { CartProvider } from "./components/context/CartContext";




function App() {
	return (
		<>
		<CartProvider>

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Start />} />
					<Route path="/prenda/:id" element={<ShowGarment />} />
					<Route path="/carrito" element={<CartPage />} />
				</Routes>
			</BrowserRouter>
		</CartProvider>
		</>
	);
}
export default App;