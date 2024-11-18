import Header from "../Header";
import { shops } from "../mocks/MockIndex";
function Start() {
	return (
		<>
			<div className="bg-zinc-100">
				<div className=" w-full h-screen md:px-40 xs:px-6 py-8">
          <Header />
					<h1 className="md:text-5xl text-4xl font-bold text-stone-900 py-5">
						Tienda ropa 🐼
					</h1>
					<div className="grid sm:grid-cols-3 xs:grid-cols-1 gap-8 place-content-between">
						{shops.map((shop, index) => {
							const { nombre, precio, img } = shop;
							return (
								<div key={index} className="flex justify-center">
									<div className="overflow-hidden rounded-lg shadow-lg border bg-zinc-200 p-6">
										<h3 className="text-stone-900 text-3xl font-bold">
											{nombre}
										</h3>
										<p className="font-serif text-stone-900 font-semibold text-lg py-2">
											${precio}
										</p>
										<div className="opacity-100 hover:opacity-75">
											<img className="w-80 h-72 rounded-lg" src={img} alt={nombre} />
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default Start;
