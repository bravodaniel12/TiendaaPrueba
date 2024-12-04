import { FaEye, FaWhatsapp } from 'react-icons/fa'; // Importar íconos de ojo y WhatsApp

export const shops = [
	{
		id: 1,
		genero: "Hombres",
		nombre: "Camiseta leñador",
		precio: 50000,
		img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		imgHover: "https://images.pexels.com/photos/1304647/pexels-photo-1304647.jpeg?auto=compress&cs=tinysrgb&w=400", // Imagen que aparece al pasar el cursor
		tipo: "Camisetas",
		subtipo: "Manga Larga",
		descripcion: "Camisa básica color gris con corte en V",
		material: "Algodon",
		subImages: [
			"https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
		material: "Algodon",
		subImages: [
			"https://images.pexels.com/photos/3287160/pexels-photo-3287160.jpeg?auto=compress&cs=tinysrgb&w=600",
			"https://images.pexels.com/photos/1503009/pexels-photo-1503009.jpeg?auto=compress&cs=tinysrgb&w=600",
		],
	},
	{
		id: 3,
		genero: "Hombres",
		nombre: "Saco hippie",
		precio: 20000,
		img: "https://images.pexels.com/photos/3739943/pexels-photo-3739943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		imgHover: "https://images.pexels.com/photos/3206122/pexels-photo-3206122.jpeg?auto=compress&cs=tinysrgb&w=400",// Imagen que aparece al pasar el cursor
		tipo: "Buzo",
		subtipo: "Con capucha",
		descripcion: "Buzo en tela organica,algodon 100% talla XL ",
		material: "Algodon",
		subImages: [
			"https://images.pexels.com/photos/3206122/pexels-photo-3206122.jpeg?auto=compress&cs=tinysrgb&w=400",
			"https://images.pexels.com/photos/3206081/pexels-photo-3206081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		],
	},
	// {
	// 	id: 4,
	// 	genero: "Hombres",
	// 	nombre: "Saco elegante",
	// 	precio: 20000,
	// 	img: "https://images.pexels.com/photos/15551777/pexels-photo-15551777/free-photo-of-blanco-y-negro-moda-hombre-modelo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	// 	imgHover: "https://images.pexels.com/photos/9199100/pexels-photo-9199100.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", // Imagen que aparece al pasar el cursor
	// 	tipo: "Buzo",
	// 	subtipo: "Sin capucha",
	// 	descripcion: "Buzo en tela organica material algodon 100% talla XL ",
	// 	material: "Algodon",
	// 	subImages: [
	// 		"https://images.pexels.com/photos/9199100/pexels-photo-9199100.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
	// 	],
	// },
	// {
	// 	id: 5,
	// 	genero: "Hombres",
	// 	nombre: "Buzo clasico V",
	// 	precio: 20000,
	// 	img: "https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/468354932_545217371634848_1994635626940983737_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHz3YtPF1lLRiqYXnUMjSPCSK9nY5bgZRVIr2djluBlFUD0ZV03700ScbZdzg-f1KeMlOea04RGHzp_bH4KOUnb&_nc_ohc=A5T8pkf9Y1AQ7kNvgFKh4UD&_nc_zt=23&_nc_ht=scontent-mia3-2.xx&_nc_gid=AvPnApfkcRmBkPjhqbs_mHN&oh=00_AYCqNpJuBx6kTYqV--w6ECS09FHVqXN0F9xrhsPYOkfDww&oe=674A65B4",
	// 	imgHover: "https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/468327052_545217414968177_1361166116193211603_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeF7eIaMeA9_08KZl5ou6EVWhMT1-vyhSX-ExPX6_KFJf7PjnWtr5R8dKRK_fV9pkH0iKOqSso4kH-TnkbBKUEA-&_nc_ohc=X3YGRl4h3xsQ7kNvgGkc_ih&_nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=AV9-WYsFzXoY_7Md2jEbf0s&oh=00_AYAzfzgGj6AIFV5QRCGMn7N8tNuEWMZhHfbOeCCFFJaXaw&oe=674A7A14",// Imagen que aparece al pasar el cursor
	// 	tipo: "Buzo",
	// 	subtipo: "Sin capucha",
	// 	descripcion: "Buzo en tela organica corte en V,algodon 100% talla XL ",
	// 	material: "Algodon",
	// 	subImages: [
	// 		"https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/468327052_545217414968177_1361166116193211603_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeF7eIaMeA9_08KZl5ou6EVWhMT1-vyhSX-ExPX6_KFJf7PjnWtr5R8dKRK_fV9pkH0iKOqSso4kH-TnkbBKUEA-&_nc_ohc=X3YGRl4h3xsQ7kNvgGkc_ih&_nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=AV9-WYsFzXoY_7Md2jEbf0s&oh=00_AYAzfzgGj6AIFV5QRCGMn7N8tNuEWMZhHfbOeCCFFJaXaw&oe=674A7A14",
	// 		"https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/468354932_545217371634848_1994635626940983737_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHz3YtPF1lLRiqYXnUMjSPCSK9nY5bgZRVIr2djluBlFUD0ZV03700ScbZdzg-f1KeMlOea04RGHzp_bH4KOUnb&_nc_ohc=A5T8pkf9Y1AQ7kNvgFKh4UD&_nc_zt=23&_nc_ht=scontent-mia3-2.xx&_nc_gid=AvPnApfkcRmBkPjhqbs_mHN&oh=00_AYCqNpJuBx6kTYqV--w6ECS09FHVqXN0F9xrhsPYOkfDww&oe=674A65B4",
	// 	],
	// },
	// {
	// 	id: 6,
	// 	genero: "Hombres",
	// 	nombre: "Buzo Clasico",
	// 	precio: 20000,
	// 	img: "https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/468182885_545217328301519_5928029744470332467_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeF0iqdnJ3oWhiKQNaRexp8N3fq9P6iQuOrd-r0_qJC46mQ0QjKAQLbl3XaHqTuiAIQf3cm4B2ofhCKuC6PL3cYb&_nc_ohc=T3Zw0BHR5k0Q7kNvgEbSKfZ&_nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=AsN1otuK17Uc3ne6RfMfoWN&oh=00_AYA6TTT9x5bzFJ5jukewWRrbBeYG04u0JRXFxdgQofOa1Q&oe=674A73E2",
	// 	imgHover: "https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/468182885_545217328301519_5928029744470332467_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeF0iqdnJ3oWhiKQNaRexp8N3fq9P6iQuOrd-r0_qJC46mQ0QjKAQLbl3XaHqTuiAIQf3cm4B2ofhCKuC6PL3cYb&_nc_ohc=T3Zw0BHR5k0Q7kNvgEbSKfZ&_nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=AsN1otuK17Uc3ne6RfMfoWN&oh=00_AYA6TTT9x5bzFJ5jukewWRrbBeYG04u0JRXFxdgQofOa1Q&oe=674A73E2", // Imagen que aparece al pasar el cursor
	// 	tipo: "Buzo",
	// 	subtipo: "Con capucha",
	// 	descripcion: "Buzo en tela organica con capucha y cuello en v material algodon 100% talla XL ",
	// 	material: "Algodon",
	// 	subImages: [
	// 		"https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/468182885_545217328301519_5928029744470332467_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeF0iqdnJ3oWhiKQNaRexp8N3fq9P6iQuOrd-r0_qJC46mQ0QjKAQLbl3XaHqTuiAIQf3cm4B2ofhCKuC6PL3cYb&_nc_ohc=T3Zw0BHR5k0Q7kNvgEbSKfZ&_nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=AsN1otuK17Uc3ne6RfMfoWN&oh=00_AYA6TTT9x5bzFJ5jukewWRrbBeYG04u0JRXFxdgQofOa1Q&oe=674A73E2",
	// 	],
	// },
	// {
	// 	id: 7,
	// 	genero: "Hombres",
	// 	nombre: "Pantalonetas Playeras",
	// 	precio: 20000,
	// 	img: "https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/467309245_1013647847191601_8185738670755049484_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGNxPoKl5nSKE02rxg9akEZwiAbRrLvW4XCIBtGsu9bhfgE2QBawpZ2qC9I2A7zzu14LuY9hWCQvfL8TU9LkvZh&_nc_ohc=rgFyQXq3uJYQ7kNvgH3hyme&_nc_zt=23&_nc_ht=scontent-mia3-2.xx&_nc_gid=A3myHCugfmDVMs8L-_rMLfy&oh=00_AYDTQtcFhGLPvx6sl2BpceBnu_cFkoX6lvRRHnazJsUMLQ&oe=674A4C6C",
	// 	imgHover: "https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/467331416_1013648057191580_2838564840137525114_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeEgXX43w0pGZN8K0pIywaMox5jKS91LylrHmMpL3UvKWqq4OVtwZr14XbDSx9AJyAWXCmGa2s3kIMSGnsTUciTB&_nc_ohc=mFveVMhXgU8Q7kNvgH9za42&_nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=A7VOtfrhH0bCGrkyAELpH6Y&oh=00_AYAdi0yAYsWDNfM-4qngzvFlOJ7qGpvtOOPszbSv6gjPGw&oe=674A4971", // Imagen que aparece al pasar el cursor
	// 	tipo: "Pantalones",
	// 	subtipo: "Deportivo",
	// 	descripcion: "Pantaloneta en diferentes stilos en algodon con corte moderno disponibles desde la talla 12 hasta la 32",
	// 	material: "Algodon",
	// 	subImages: [
	// 		"https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/467309245_1013647847191601_8185738670755049484_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGNxPoKl5nSKE02rxg9akEZwiAbRrLvW4XCIBtGsu9bhfgE2QBawpZ2qC9I2A7zzu14LuY9hWCQvfL8TU9LkvZh&_nc_ohc=rgFyQXq3uJYQ7kNvgH3hyme&_nc_zt=23&_nc_ht=scontent-mia3-2.xx&_nc_gid=A3myHCugfmDVMs8L-_rMLfy&oh=00_AYDTQtcFhGLPvx6sl2BpceBnu_cFkoX6lvRRHnazJsUMLQ&oe=674A4C6C",
	// 		"https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/467331416_1013648057191580_2838564840137525114_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeEgXX43w0pGZN8K0pIywaMox5jKS91LylrHmMpL3UvKWqq4OVtwZr14XbDSx9AJyAWXCmGa2s3kIMSGnsTUciTB&_nc_ohc=mFveVMhXgU8Q7kNvgH9za42&_nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=A7VOtfrhH0bCGrkyAELpH6Y&oh=00_AYAdi0yAYsWDNfM-4qngzvFlOJ7qGpvtOOPszbSv6gjPGw&oe=674A4971",
	// 		"https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/467399958_1013648387191547_9164187918628493974_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeEfl6VhV36NF1ztXi4CpY-5Iz7L-0LyANYjPsv7QvIA1uVWTzK5-TYwxDo2OTWul47zXThSsI6Qeh8eOF8JLpQE&_nc_ohc=T65x4r4bw1gQ7kNvgHxQeBQ&_nc_zt=23&_nc_ht=scontent-mia3-2.xx&_nc_gid=AjmDYGfU3HdP4SYpFnshVYD&oh=00_AYCCXTgipd12AiblXzyGXbO9go0tJ9s9-dB-X2qCGLI4kw&oe=674A6273",
	// 		"https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/467510549_1013648723858180_3434594798573120874_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFZ5RbKqqbUqMsj9sGS9PPH5lnTjA8lO63mWdOMDyU7rQorU4bYA18W4wXRPWfZ7c1iBWFFtvJEUJ9z_NnFPBZp&_nc_ohc=pHDaf2tZQ3IQ7kNvgHkF1sm&_nc_zt=23&_nc_ht=scontent-mia3-2.xx&_nc_gid=Awv6lEosZ9x2D6Yf_VRfPZP&oh=00_AYCAu145tgwYxgX_QKEg_PDOc0PPgeKmulIa5uxoiwftuQ&oe=674A74BC",
	// 		"https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/467311828_1013649287191457_8909195385567660095_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGL4LomDXxQtfKvrz1CLjoGNm8_PGZsKOE2bz88Zmwo4VV23tJhjW_rmL0Ack3FZ-IquuhtzgDyVFqNFZwQXXX9&_nc_ohc=mS1S7o4zH1oQ7kNvgFSMs9y&_nc_zt=23&_nc_ht=scontent-mia3-2.xx&_nc_gid=Ao4RzOCyqtMCDMB1P9TJjhn&oh=00_AYB4OjVBuL0LabEl-bFonBmfBBZ9Wpf2L2r2iZmVyAKtLw&oe=674A7A8F",
	// 		"https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/467359020_1013649523858100_6902680399256177492_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHuagSsdQCjG5K11IyHkAsmvQOG33l-RFK9A4bfeX5EUpWINCC69A0ffdw-iAPJQaMu6F7JrctX5VcrpWY9kdJv&_nc_ohc=aHUJzW99nwIQ7kNvgFLNIzl&_nc_zt=23&_nc_ht=scontent-mia3-2.xx&_nc_gid=AAE9fyugp22I0j1N75Om-hX&oh=00_AYBer9t_4tRhCqhR5kMQRzVyCgpWRXrcjiOsCKemWqCoDQ&oe=674A4D5B"
	// 	],
	// },
	// {
	// 	id: 8,
	// 	genero: "Hombres",
	// 	nombre: "Accesorios Hombre",
	// 	precio: 20000,
	// 	img: "https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/468097772_545217458301506_9051670682490513407_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeECoEEfo5eEcKlkj3xUJiBqyeDc1YTXL1_J4NzVhNcvX7NOCAM_mtMvLqGNOn2P8N_bkiGfP9YBAoTiGIeLDR99&_nc_ohc=h_aQ0vfd3G4Q7kNvgEeTCC5&_nc_zt=23&_nc_ht=scontent-mia3-2.xx&_nc_gid=AeqgQh3_ReZ9fCG8DK0HQRW&oh=00_AYCqYcnei1Ld6CpDZj-V_EcUifNECugS0S3lmFCajYU9Zw&oe=674A6584",
	// 	imgHover: "https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/468309882_545217534968165_5811104299424491946_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHyCXRvTo9mNI9hbGogOuQJ3L-vxldZ4Urcv6_GV1nhShaHcuxp6hHaypq9NTp38Bhwi1rHBeM3DCtozT6NHHcf&_nc_ohc=8mOB8BEQ5ggQ7kNvgGHgOGA&_nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=Amt2zxdfUiZycbPn7FCeMGS&oh=00_AYB6sv92uq82oALUOhXcPWKV2eOG06RAWJ4A2m_DjjD6hQ&oe=674A713A", // Imagen que aparece al pasar el cursor
	// 	tipo: "Pantalones",
	// 	subtipo: "Deportivo",
	// 	descripcion: "Pantaloneta en diferentes stilos en algodon con corte moderno disponibles desde la talla 12 hasta la 32",
	// 	material: "Algodon",
	// 	subImages: [
	// 		"https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/468097772_545217458301506_9051670682490513407_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeECoEEfo5eEcKlkj3xUJiBqyeDc1YTXL1_J4NzVhNcvX7NOCAM_mtMvLqGNOn2P8N_bkiGfP9YBAoTiGIeLDR99&_nc_ohc=h_aQ0vfd3G4Q7kNvgEeTCC5&_nc_zt=23&_nc_ht=scontent-mia3-2.xx&_nc_gid=AeqgQh3_ReZ9fCG8DK0HQRW&oh=00_AYCqYcnei1Ld6CpDZj-V_EcUifNECugS0S3lmFCajYU9Zw&oe=674A6584",
	// 		"https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/468309882_545217534968165_5811104299424491946_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHyCXRvTo9mNI9hbGogOuQJ3L-vxldZ4Urcv6_GV1nhShaHcuxp6hHaypq9NTp38Bhwi1rHBeM3DCtozT6NHHcf&_nc_ohc=8mOB8BEQ5ggQ7kNvgGHgOGA&_nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=Amt2zxdfUiZycbPn7FCeMGS&oh=00_AYB6sv92uq82oALUOhXcPWKV2eOG06RAWJ4A2m_DjjD6hQ&oe=674A713A",
	// 	],
	// },
	// {
	// 	id: 9,
	// 	genero: "Hombres",
	// 	nombre: "Camiseta Cuadros",
	// 	precio: 50000,
	// 	img: "https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/468070661_545217578301494_5111722619604607147_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHRR7MiI9mNsFWK2LyKphflJCd2IYuYMsokJ3Yhi5gyypMZQegCyl-0YRoZzgRHPMuKpwOXr6SBICEAMO4OH7My&_nc_ohc=8XxvpjM16LYQ7kNvgEvX4ta&_nc_zt=23&_nc_ht=scontent-mia3-2.xx&_nc_gid=A7YzecrZFrT_ryIcg6LAcIJ&oh=00_AYAPYnCl5iuI0LstuKfGVfpLI02K0mRE0E4O_gP8FkQEqg&oe=674A5E4B",
	// 	imgHover: "https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/468226981_545217604968158_7641084253519557347_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGNK7kAnyAaHnX01UPIqTuakesQjk_8QfiR6xCOT_xB-JTzIDN0f-ZVlVGF9Xj2rG9UNG7T6fxFOV3JLMbiwIL4&_nc_ohc=5PfPmMIN7wUQ7kNvgHKNrV5&_nc_zt=23&_nc_ht=scontent-mia3-2.xx&_nc_gid=AfnyQZYZ38nOC-j7jE139Sl&oh=00_AYD9yAWE3yQbiChAo2blVSIy0GCMTAgWWSoWL2ELpM1nMA&oe=674A840C", // Imagen que aparece al pasar el cursor
	// 	tipo: "Camisetas",
	// 	subtipo: "Manga Corta",
	// 	descripcion: "Camisa básica color gris con corte en V",
	// 	material: "Algodon",
	// 	subImages: [
	// 		"https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/468070661_545217578301494_5111722619604607147_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHRR7MiI9mNsFWK2LyKphflJCd2IYuYMsokJ3Yhi5gyypMZQegCyl-0YRoZzgRHPMuKpwOXr6SBICEAMO4OH7My&_nc_ohc=8XxvpjM16LYQ7kNvgEvX4ta&_nc_zt=23&_nc_ht=scontent-mia3-2.xx&_nc_gid=A7YzecrZFrT_ryIcg6LAcIJ&oh=00_AYAPYnCl5iuI0LstuKfGVfpLI02K0mRE0E4O_gP8FkQEqg&oe=674A5E4B",
	// 		"https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/468226981_545217604968158_7641084253519557347_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGNK7kAnyAaHnX01UPIqTuakesQjk_8QfiR6xCOT_xB-JTzIDN0f-ZVlVGF9Xj2rG9UNG7T6fxFOV3JLMbiwIL4&_nc_ohc=5PfPmMIN7wUQ7kNvgHKNrV5&_nc_zt=23&_nc_ht=scontent-mia3-2.xx&_nc_gid=AfnyQZYZ38nOC-j7jE139Sl&oh=00_AYD9yAWE3yQbiChAo2blVSIy0GCMTAgWWSoWL2ELpM1nMA&oe=674A840C",
	// 		"https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/468357965_545217638301488_3069533357702504901_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHs-sj_zYQNac3XDgkImhTnOGGUTde0tZg4YZRN17S1mDwk2DeXLjeXLQ2nQi9d8pO4dqmcGxLrNVBMIJC-SNpc&_nc_ohc=wKf0ofnFYhAQ7kNvgG7GtJ9&_nc_zt=23&_nc_ht=scontent-mia3-2.xx&_nc_gid=AMcpdS1vrHewNdr1zdUKm-t&oh=00_AYAUh4Uxbefhk_NyE212NT7udv4tbSrSqys59h-t4ijFTQ&oe=674A6033", // Imagen que aparece al pasar el cursor
	// 	],
	// },
	// {
	// 	id: 10,
	// 	genero: "Hombres",
	// 	nombre: "Chaqueta Cuero",
	// 	precio: 20000,
	// 	img: "https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/468070959_545217164968202_8424339431207013160_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFbKCKPCp6mby5enR-1_iR4zVqvbVHzuKLNWq9tUfO4og5SqEv5Lx65Ms-5h-6t_8lVFqktZoE_HC7jdUft7JKE&_nc_ohc=nQdRd0ZgekIQ7kNvgFirju1&_nc_zt=23&_nc_ht=scontent-mia3-2.xx&_nc_gid=ALhFoomhrmwDZq3LdDNRpZa&oh=00_AYC5FQ6TiQXkQ6kM0zM6NnaFpjUAxxkUXuwjotC4CTXEJg&oe=674A81AC",
	// 	imgHover: "https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/468328560_545217034968215_8347368291593384208_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHEdZ9ES1AlRCwQK7dpm34micnfBUFr0uyJyd8FQWvS7BNoTLLn9pymohPkvI11qEYLLFV3DNqoUMW6EBT-f29W&_nc_ohc=hBgaPK6dMi8Q7kNvgH5oONH&_nc_zt=23&_nc_ht=scontent-mia3-2.xx&_nc_gid=AOVcVBibkItXO4am1zjzY3t&oh=00_AYCFjYePML81_TZpoaYsYTcq-Rl1j4nDIf57KfyzJHNZbw&oe=674A61FA", // Imagen que aparece al pasar el cursor
	// 	tipo: "Chaquetas",
	// 	subtipo: "Sin Capota",
	// 	descripcion: "Chaqueta de cuero para que luzcan mas varonil Talla unica",
	// 	material: "Algodon",
	// 	subImages: [
	// 		"https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/468070959_545217164968202_8424339431207013160_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFbKCKPCp6mby5enR-1_iR4zVqvbVHzuKLNWq9tUfO4og5SqEv5Lx65Ms-5h-6t_8lVFqktZoE_HC7jdUft7JKE&_nc_ohc=nQdRd0ZgekIQ7kNvgFirju1&_nc_zt=23&_nc_ht=scontent-mia3-2.xx&_nc_gid=ALhFoomhrmwDZq3LdDNRpZa&oh=00_AYC5FQ6TiQXkQ6kM0zM6NnaFpjUAxxkUXuwjotC4CTXEJg&oe=674A81AC",
	// 		"https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/468328560_545217034968215_8347368291593384208_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHEdZ9ES1AlRCwQK7dpm34micnfBUFr0uyJyd8FQWvS7BNoTLLn9pymohPkvI11qEYLLFV3DNqoUMW6EBT-f29W&_nc_ohc=hBgaPK6dMi8Q7kNvgH5oONH&_nc_zt=23&_nc_ht=scontent-mia3-2.xx&_nc_gid=AOVcVBibkItXO4am1zjzY3t&oh=00_AYCFjYePML81_TZpoaYsYTcq-Rl1j4nDIf57KfyzJHNZbw&oe=674A61FA",
	// 	],
	// },


	// PRODUCTOS MUJERES
	{
		id: 50,
		genero: "Mujeres",
		nombre: "Gaban clasico",
		precio: 20000,
		img: "https://images.pexels.com/photos/29595564/pexels-photo-29595564/free-photo-of-otono.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		imgHover: "https://images.pexels.com/photos/28455223/pexels-photo-28455223.jpeg?auto=compress&cs=tinysrgb&w=400", // Imagen que aparece al pasar el cursor
		tipo: "Chaquetas",
		subtipo: "Gabanes",
		descripcion: "Gaban color oscuro clasico en algodon",
		material: "Algodon",
		subImages: [
			"https://images.pexels.com/photos/28455223/pexels-photo-28455223.jpeg?auto=compress&cs=tinysrgb&w=400",
		],
	},
	{
		id: 51,
		genero: "Mujeres",
		nombre: "Blusa Mujer",
		precio: 20000,
		img: "https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		imgHover: "https://images.pexels.com/photos/2220315/pexels-photo-2220315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Imagen que aparece al pasar el cursor
		tipo: "Vaqueros",
		subtipo: "Mom Fit",
		descripcion: "Blusa corte moderno tallas 7,8,9",
		material: "Algodon",
		subImages: [
			"https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			"https://images.pexels.com/photos/5746087/pexels-photo-5746087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			"https://images.pexels.com/photos/6786614/pexels-photo-6786614.jpeg?auto=compress&cs=tinysrgb&w=400",
		],
	},
	{
		id: 52,
		genero: "Mujeres",
		nombre: "Sombrero Mujer",
		precio: 20000,
		img: "https://images.pexels.com/photos/29627101/pexels-photo-29627101/free-photo-of-mujer-de-moda-en-pose-sentada-con-traje-bohemio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		imgHover: "https://images.pexels.com/photos/29627093/pexels-photo-29627093/free-photo-of-www-thesungwoo-com.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Imagen que aparece al pasar el cursor
		tipo: "Vaqueros",
		subtipo: "Mom Fit",
		descripcion: "sombrero corte moderno tallas 7,8,9",
		material: "cuero",
		subImages: [
			"https://images.pexels.com/photos/29627101/pexels-photo-29627101/free-photo-of-mujer-de-moda-en-pose-sentada-con-traje-bohemio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			"https://images.pexels.com/photos/5698407/pexels-photo-5698407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			"https://images.pexels.com/photos/8581381/pexels-photo-8581381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		],
	},
];