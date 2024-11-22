import { FaEye, FaWhatsapp } from 'react-icons/fa'; // Importar íconos de ojo y WhatsApp

export const shops = [
	{
		id: 1,
		genero: "Hombres",
		nombre: "Camisa Básica",
		precio: 50000,
		img: "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=600",
		imgHover: "https://images.pexels.com/photos/3287160/pexels-photo-3287160.jpeg?auto=compress&cs=tinysrgb&w=600", // Imagen que aparece al pasar el cursor
		tipo: "Camisas",
		subtipo: "Manga Corta",
		descripcion: "Camisa básica color gris con corte en V",
		subImages: [
			"https://images.pexels.com/photos/3287160/pexels-photo-3287160.jpeg?auto=compress&cs=tinysrgb&w=600",
			"https://images.pexels.com/photos/1503009/pexels-photo-1503009.jpeg?auto=compress&cs=tinysrgb&w=600",
			"https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=600", // Imagen que aparece al pasar el cursor
		],
	},
	{
		id: 2,
		genero: "Hombres",
		nombre: "Tenis Deportivos",
		precio: 10000,
		img: "https://images.pexels.com/photos/3287160/pexels-photo-3287160.jpeg?auto=compress&cs=tinysrgb&w=600",
		imgHover: "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=600", // Imagen que aparece al pasar el cursor
		tipo: "Camisetas",
		subtipo: "Manga Larga",
		descripcion: "Tenis deportivos cómodos y elegantes",
		subImages: [
			"https://images.pexels.com/photos/3287160/pexels-photo-3287160.jpeg?auto=compress&cs=tinysrgb&w=600",
			"https://images.pexels.com/photos/1503009/pexels-photo-1503009.jpeg?auto=compress&cs=tinysrgb&w=600",
			"https://scontent.fbog14-1.fna.fbcdn.net/v/t39.30808-6/465966923_1109314134535393_4317040354605745720_n.jpg?stp=dst-jpg_s720x720&_nc_cat=1&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGwHVWmy5ljnhlTrqFsxXpVj9vFy_X3ecGP28XL9fd5welPI3Z1PRfTxMfdIRBAduZkPgwqgPTKACwBIaq9cnic&_nc_ohc=tduJr8kCM2QQ7kNvgGn8uOd&_nc_zt=23&_nc_ht=scontent.fbog14-1.fna&_nc_gid=ArtZs7MUYsqiTeeslfEkvxY&oh=00_AYC__pYrJz9IXwuGiAn6BtoRAObwfGEUwIz4V1185_pJCA&oe=67456193"
		],
	},
	{
		id: 3,
		genero: "Hombres",
		nombre: "Jeans Azules",
		precio: 20000,
		img: "https://images.pexels.com/photos/1503009/pexels-photo-1503009.jpeg?auto=compress&cs=tinysrgb&w=600",
		imgHover: "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=600", // Imagen que aparece al pasar el cursor
		tipo: "Pantalones",
		subtipo: "Drill",
		descripcion: "Jeans azules de corte moderno",
		subImages: [
			"https://images.pexels.com/photos/3287160/pexels-photo-3287160.jpeg?auto=compress&cs=tinysrgb&w=600",
			"https://images.pexels.com/photos/1503009/pexels-photo-1503009.jpeg?auto=compress&cs=tinysrgb&w=600",
			"https://scontent.fbog14-1.fna.fbcdn.net/v/t39.30808-6/465966923_1109314134535393_4317040354605745720_n.jpg?stp=dst-jpg_s720x720&_nc_cat=1&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGwHVWmy5ljnhlTrqFsxXpVj9vFy_X3ecGP28XL9fd5welPI3Z1PRfTxMfdIRBAduZkPgwqgPTKACwBIaq9cnic&_nc_ohc=tduJr8kCM2QQ7kNvgGn8uOd&_nc_zt=23&_nc_ht=scontent.fbog14-1.fna&_nc_gid=ArtZs7MUYsqiTeeslfEkvxY&oh=00_AYC__pYrJz9IXwuGiAn6BtoRAObwfGEUwIz4V1185_pJCA&oe=67456193"
		],
	},
	{
		id: 4,
		genero: "Hombres",
		nombre: "Jeans Azules",
		precio: 20000,
		img: "https://images.pexels.com/photos/1503009/pexels-photo-1503009.jpeg?auto=compress&cs=tinysrgb&w=600",
		imgHover: "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=600", // Imagen que aparece al pasar el cursor
		tipo: "Pantalones",
		subtipo: "Pantaloneta",
		descripcion: "Jeans azules de corte moderno",
		subImages: [
			"https://images.pexels.com/photos/3287160/pexels-photo-3287160.jpeg?auto=compress&cs=tinysrgb&w=600",
			"https://images.pexels.com/photos/1503009/pexels-photo-1503009.jpeg?auto=compress&cs=tinysrgb&w=600",
			"https://scontent.fbog14-1.fna.fbcdn.net/v/t39.30808-6/465966923_1109314134535393_4317040354605745720_n.jpg?stp=dst-jpg_s720x720&_nc_cat=1&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGwHVWmy5ljnhlTrqFsxXpVj9vFy_X3ecGP28XL9fd5welPI3Z1PRfTxMfdIRBAduZkPgwqgPTKACwBIaq9cnic&_nc_ohc=tduJr8kCM2QQ7kNvgGn8uOd&_nc_zt=23&_nc_ht=scontent.fbog14-1.fna&_nc_gid=ArtZs7MUYsqiTeeslfEkvxY&oh=00_AYC__pYrJz9IXwuGiAn6BtoRAObwfGEUwIz4V1185_pJCA&oe=67456193"
		],
	},
	// Agregar más productos si es necesario
];