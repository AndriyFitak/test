// const product = {
//     name : "Nike",
//     description : "Nike super low",
//     quantity : 20,
//     price : 0.99
// }
// axios.post('http://localhost:4000/products/create', product)
//  .then((res) => {
//     console.log(res.data)
//  })

// function createProduct() {
//     const product = {
//       name: document.getElementById('name').value,
//       description: document.getElementById('description').value,
//       quantity: parseInt(document.getElementById('quantity').value),
//       price: parseFloat(document.getElementById('price').value)
//     };

//     axios.post('http://localhost:4000/products/create', product)
//       .then((res) => {
//         console.log(res.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }



const formCreate = { 
  name: document.querySelector('#form_name'),
  quantity: document.querySelector('#form_quantity'),
  price: document.querySelector('#form_price'),
  description: document.querySelector('#form_description'),
  btn: document.querySelector('#form_btnCreate')
}
const productsEl = document.querySelector('#products')

let products = []

const getProducts = () => {
  axios.get("http://localhost:4000/products/get-all")
      .then((res) => {
          products = [
              ...res.data
          ]
          renderProducts()
      })
}


const renderProducts = () => { 
  productsEl.innerHTML = ""
  products.forEach(productItem => { 
      productsEl.innerHTML += `
      <div product-id="${productItem.id}" class="products_item">
          <p>Імя: ${productItem.name}</p>
          <p>Айді: ${productItem.id}</p>
          <p>Кількість: ${productItem.quantity}</p>
          <p>Ціна: ${productItem.price}</p>
          <p>Опис: ${productItem.description}</p>
          <button product-id="${productItem.id}" class="btnDelete">Delete</button>
      </div>
      `
  })
  const btnsDelete = document.querySelectorAll(".btnDelete")
  btnsDelete.forEach(btnItem => { 
      btnItem.addEventListener("click", () => { 
          const productId = btnItem.getAttribute("product-id")
          console.log(productId)
          axios.delete(`http://localhost:4000/products/delete?id=${productId}`)
              .then((res) => {
                  console.log(res)
                  getProducts()
              })
              
      })
  })
}


// const idProduct = "RD1pT9tZ"
// axios.get(`http://localhost:4000/products/get-item?id=${idProduct}`)
// .then((res) => {
//     console.log(res)
// })


// axios.get(`http://localhost:4000/products/get?page=1&limit=10`)
// .then((res) => {
//     console.log(res)
// })


const btnCount = document.querySelector('.btnCount');
btnCount.addEventListener('click', () => {
    axios.get('http://localhost:4000/products/count')
        .then((res) => {
            const resultParagraph = document.getElementById('result');
            resultParagraph.innerText = `Кількість продуктів: ${res.data.count}`;
        })
        .catch((error) => {
            console.error('Помилка отримання даних:', error);
        });
});









getProducts()

formCreate.btn.addEventListener('click', () => { 
  const formData = { 
      name: formCreate.name.value,
      quantity: formCreate.quantity.value,
      price: formCreate.price.value,
      description: formCreate.description.value
  }
  axios.post('http://localhost:4000/products/create', {...formData})
      .then(res => { 
          console.log(res.data)
          getProducts()
      })
})

  



const formChange = {
    name: document.querySelector('#form_name_change'),
    id: document.querySelector('#form_id')
}

const changeBtn = document.querySelector('#form_btnChange');
changeBtn.addEventListener('click', () => {
    const changeData = {
        name: formChange.name.value,
        id: formChange.id.value
    }
    axios.put(`http://localhost:4000/products/change-name?id=${changeData.id}&name=${changeData.name}`)
    .then((res) => {
        console.log(res.data)
    })
})















