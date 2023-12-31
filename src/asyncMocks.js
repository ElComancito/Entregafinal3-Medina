import "./App.css"

const product = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'Celular',
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: 25,
        description: 'Iphone 12'
    },
    {id: '2', name: 'Samsung S21', price:800, category: 'Celular', img: 'https://tienda.antel.com.uy/razuna/assets/1/55CA3C98045A4AFDBF4687B40F72C1F6/img/8BFB910F855E43C7A566CC7D58A29488/samsung-galaxy-s21-fe-5g-6_8BFB910F855E43C7A566CC7D58A29488.jpg', stock: 50, description: 'Samsung S21'},
    {id: '3', name: 'Ipad 8va generacion', price: 1200, category: 'Tablet', img: 'https://netpc.uy/wp-content/uploads/2022/08/2-121.jpg', stock: 8, description: 'Color white / 2017'},
    {id: '4', name: 'Ryzen 9', price: 50000, category: 'Notebook', img: 'https://thotcomputacion.com.uy/wp-content/uploads/2023/10/GX650RX2525252525252520160158_db22da3af33244dfac1cd48ebd76c59e.webp', stock: 5, description: 'LO156W Ryzen 9 6900HX 32GB 2TB SSD RTX 3080Ti'},
]

export const getProduct = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(product)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(product.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(product.filter(prod => prod.category === categoryId))
        }, 500)
    })
}