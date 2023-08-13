const productEl = document.querySelector('#product');
const productId = window.location.hash.substring(1)
const baseUrl = 'http://localhost:4000/products'

let productInfo
const renderProducts = () => {
    productEl.innerHTML = `
        <img src="${productInfo.imgUrl}">
        <p>${productInfo.name}</p>
        <p>${productInfo.price}</p>
    `
}
const getProduct = () =>{
    axios.get(`${baseUrl}/item?id=${productId}`)
        .then((res) => {
            productInfo = res.data
            renderProducts()
        })
}

getProduct()
