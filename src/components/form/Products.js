import React, { useState } from 'react'
import { Container, Form} from 'react-bootstrap'


function Products() {
  const [product, addProduct] = useState({
    productName: '',
    price: '',
    imageUrl: '',
  })

  const tampung = []
  const localDatas = localStorage.getItem("DB_PRODUCTS");

  function handleSubmit() {
    let dataProduct = JSON.parse(localDatas)

    if (dataProduct == null) {
      tampung.push(product)
      localStorage.setItem('DB_PRODUCTS', JSON.stringify(tampung))
      alert("Successfully..!")
 
    } 
    else {
      tampung.push(dataProduct)
      dataProduct.forEach(element => {
        if (element.productName === product.productName) {
          alert("Data sudah ada!")
        } 
        else {
          tampung.push(product)
          localStorage.setItem('DB_PRODUCTS', JSON.stringify(tampung))
          alert("Successfully..!")
        }
      });
    }
  }
 
  return (
    <>
   <Container className="px-5">
    <div className="row mt-5">
            <div className="col-sm-6 col-md-7 mt-5">
            <div className='mb-4'>
                    <p className="fs-4 fw-bold text-danger">Products</p>
                </div>
                <form onSubmit={handleSubmit} >
                {/* <Form.Group className="mb-3"> */}
                <Form.Control style={{borderColor: "red"}} 
                onChange={e => addProduct({ ...product, productName: e.target.value })}
                value={product.productName}
                type="text"
                className="me-auto mb-3" placeholder="Name Product" />

                <Form.Control style={{borderColor: "red"}} 
                onChange={e => addProduct({ ...product, price: e.target.value })}
                value={product.price}
                type="number"
                className="me-auto mb-3" placeholder="Price" />

                <div className="input-group mb-3 rounded" style={{border: "1px solid red"}}>
                <input type="file" 
                onChange={e => addProduct({ ...product, imageUrl: e.target.value })}
                value={product.imageUrl}
                className="form-control" id="inputGroupFile02"/>
                {/* <label className="input-group-text text-danger" for="inputGroupFile02">Upload</label> */}
                </div>
                <div className="d-grid gap-2">
                    <button size="md" className="btn btn-danger mx-5 mt-2">Add Product</button>
                    {/* <Button onClick={handleSubmit} size="md" className="btn btn-danger mx-5 mt-2">Add Product</Button> */}
                </div> 
                {/* </Form.Group> */}
                </form>
            </div>

            <div className="col ms-5 mt-5" align="center">
                <img src="/assets/img/coffee1.png" alt="products" />
            </div>
        </div>
    </Container>
    </>
  )
}

export default Products