const products = [
	{
		id: 1,
		title: "Ryzen 5 3600",
		brand: "AMD",
		price: 35000,
		category: "procesador",
		stock: 20,
		picUrl:
			"https://s3-sa-east-1.amazonaws.com/saasargentina/kanaXeWTnCPgAR6bhe6N/imagen",
	},
	{
		id: 2,
		title: "I7 10700",
		brand: "Intel",
		price: 35000,
		category: "procesador",
		stock: 20,
		picUrl:
			"https://informaticarobledo.com.ar/wp-content/uploads/2020/06/38094.jpg",
	},
	{
		id: 3,
		title: "Kolink Void ARGB ATX Vidrio Templado",
		brand: "Kolink",
		price: 6850,
		category: "gabinete",
		stock: 20,
		picUrl:
			"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20250_Gabinete_Kolink_Void_ARGB_ATX_Vidrio_Templado_f962dc11-grn.jpg",
	},
	{
		id: 4,
		title: "XBOX Series S 512GB Digital",
		brand: "Microsoft",
		price: 89500,
		category: "consola",
		stock: 20,
		picUrl:
			"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25495_Consola_Microsoft_XBOX_Series_S_512GB_Digital_f5fc94c4-grn.jpg",
	},
]

const task = new Promise((resp) => {
	resp(products)
}, 2000)

export const getItem = () => {
	return task
}
