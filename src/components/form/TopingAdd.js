import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'

function TopingAdd() {
  return (
    <Container className="px-5">
    <div className="row mt-5">
            <div className="col-sm-6 col-md-7 mt-5">
            <div className='mb-4'>
                    <p className="fs-4 fw-bold text-danger">Toping</p>
                </div>
                <Form.Control style={{borderColor: "red"}} className="me-auto mb-3" placeholder="Name Toping" />
                <Form.Control style={{borderColor: "red"}} className="me-auto mb-3" placeholder="Price" />
                <div className="input-group mb-3 rounded" style={{border: "1px solid red"}}>
                <input type="file" className="form-control" id="inputGroupFile02"/>
                {/* <label className="input-group-text text-danger" for="inputGroupFile02">Upload</label> */}
                </div>
                <div className="d-grid gap-2">
                    <Button variant="danger" size="md" className="mx-5 mt-2">Add Product</Button>
                </div> 
            </div>

            <div className="col" align="right">
                <img src="/assets/topping/toping.png" alt="toping" width={300}/>
            </div>
        </div>
    </Container>
  )
}

export default TopingAdd