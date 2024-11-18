import { BrowserRouter, Route, Routes } from "react-router-dom";

import Start from "./components/pages/Start";



function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Start />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
export default App;