import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
// import { useNavigate } from 'react-router-dom'
import ListToping from './ListToping'
// import Topping from './Topping'


function Details(props) {
    const [cart, setCart] = useState(0)
    // const navigate = useNavigate()


  return (
    <Container className="d-flex px-5 justify-content-center mt-5">
        <div className="row">
            <div className="col mt-5 pt-5">
                <img src={props.imageUrl} alt="product" width={380} height={430}/>
            </div>

            <div className="col mb-5" style={{color: "#BD0707"}}>
                <div>
                    <p className="fw-bold fs-3">{props.title}</p>
                </div>
                <div>
                    <p className="fw-bold mt-5 fs-5">Toping</p>
                    <div className="row row-cols-4">
                        <ListToping />
                    </div>
                </div>
                <div className='mt-5 d-flex justify-content-between'>
                        <p className='fw-bold fs-5'>Total</p>
                        <p>jumlah keranjang {cart}</p>
                        <p className='fw-bold fs-5'>{props.harga}</p>
                    </div>
                    <div className='d-grid gap-2'>
                        <Button onClick={() => setCart(cart + 1)} variant='danger'>Add to Cart</Button>
                    </div>
            </div>

        </div>
       
    </Container>
  )
}

export default Details