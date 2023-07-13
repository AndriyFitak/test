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

function createProduct() {
    const product = {
      name: document.getElementById('name').value,
      description: document.getElementById('description').value,
      quantity: parseInt(document.getElementById('quantity').value),
      price: parseFloat(document.getElementById('price').value)
    };

    axios.post('http://localhost:4000/products/create', product)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }