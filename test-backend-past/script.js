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
                <p>${product.size}</p>
                <p>${product.moreInfo}</p>
                <button class="btn" product-id="${product.id}"></button>
            </div>
        `
    })
    const btns = document.querySelectorAll('.btn')
    btns.forEach((btnEl) =>  {
        btnEl.addEventListener('click', () => {
            const productId = btnEl.getAttribute('product-id')
            window.location.href = `http://127.0.0.1:5500/test-backend-past/product.html#${productId}`
        })
    })
}

const getProducts = () => {
    axios.get(`${baseUrl}/list`)
        .then((res) => {
            products = res.data
            renderProducts()
        })
}


const addProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const productData = {
        imgUrl: form.imgUrl.value,
        name: form.name.value,
        price: parseFloat(form.price.value),
        size: form.size.value,
        moreInfo: form.moreInfo.value,
    };

  
    axios.post(`${baseUrl}/create`, productData)
        .then((res) => {
            products.push(res.data);
            renderProducts();
            console.log("Продукт створенно")
        })
        .catch((error) => {
            console.error("Error creating product:", error);
        });
};




getProducts()