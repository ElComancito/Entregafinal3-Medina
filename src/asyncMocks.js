const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: 25,
        description: 'Descripcion de Iphone 12'
    },
    {id: '2', name: 'Samsung S21', price:800, category: 'celular', img: 'https://tienda.antel.com.uy/razuna/assets/1/55CA3C98045A4AFDBF4687B40F72C1F6/img/8BFB910F855E43C7A566CC7D58A29488/samsung-galaxy-s21-fe-5g-6_8BFB910F855E43C7A566CC7D58A29488.jpg'},
    {id: '3', name: 'Ipad 8va generacion', price: 1200, category: 'tablet', img: 'https://netpc.uy/wp-content/uploads/2022/08/2-121.jpg'},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}