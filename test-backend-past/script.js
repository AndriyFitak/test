const listEl = document.querySelector('.list')
const baseUrl = 'http://localhost:4000/products'
let products = []

const renderProducts = () => {
    listEl.innerHTML = ""
    products.forEach((product) => {
        listEl.innerHTML += `
            <div class="products">
                <img src="${product.imgUrl}">
                <p>${product.name}</p>
                <p>${product.price}</p>
                <button product-id="${product.id}"></button>
            </div>
        `
    })
}

const getProducts = () => {
    axios.get(`${baseUrl}/list`)
        .then((res) => {
            products = res.data
            renderProducts()
        })
}
getProducts()