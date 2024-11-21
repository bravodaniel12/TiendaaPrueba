import { BrowserRouter, Route, Routes } from "react-router-dom";

import Start from "./components/pages/Start";
import ShowGarment from "./components/pages/ShowGarment";



function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Start />} />
					<Route path="/prenda/:id" element={<ShowGarment />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
export default App;