import { Button, Container, Form } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import ShopCard from './ShopCard';
import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content"


function Cart() {

  const Swalrt = withReactContent(Swal)

  return (
    <>
    <Container className="px-5 mb-5">
        <div className="d-flex px-5">
        <Stack gap={3} className="mt-5 col-md-5 me-5" >
          <div className="fs-4 fw-bold text-danger">My Cart</div>
            <div className="pb-2 text-danger" style={{borderBottom: "2px solid red"}}>Review your order</div>
              <ShopCard />
              <ShopCard />
              <div style={{borderBottom: "2px solid red"}} />

              <div className="row mt-3">
            <div className="col-sm-6 col-md-8 text-danger">
                <div style={{borderTop: "2px solid red"}} />
                <div className="d-flex justify-content-between">
                    <div className="mt-3">
                        <p>Subtotal</p>
                        <p>Qty</p>
                    </div>
                    <div align="right" className="mt-3">
                        <p>69.000</p>
                        <p>2</p>
                    </div>
                </div>
                <div style={{borderBottom: "2px solid red"}} className="mb-3"/>
                <div className="d-flex justify-content-between">
                  <p className="fw-bold text-danger" >Total</p>
                  <p className="fw-bold text-danger">Rp.69.000</p>
                </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="py-3 rounded" style={{background: "pink", border: "2px solid red"}}>
                <div className="mb-3" align="center">
                  <img src="/assets/img/attach.svg" alt="attect" width={30} height={30} />
                </div>
                <div align="center">
                <text className="text-danger" style={{fontSize: "14px"}}>Attache Of Transactions</text>
                </div>
              </div>
            </div>
        </div>
      </Stack>
      

      <Stack gap={3} className="mt-5">
        <div  className="pb-3 mb-5" />
        <Form.Control style={{borderColor: "red"}} className="me-auto" placeholder="Name" />
        <Form.Control style={{borderColor: "red"}} className="me-auto" placeholder="Email" />
        <Form.Control style={{borderColor: "red"}} className="me-auto" placeholder="Phone" />
        <Form.Control style={{borderColor: "red"}} className="me-auto" placeholder="Post Code" />
        <Form.Control
          as="textarea"
          placeholder="Address"
          style={{ height: '100px', resize: 'none', borderColor: "red"}}
        />
        <Button onClick={() => { 
           Swalrt.fire({
            position: 'center',
            icon: 'success',
            title: `Thank you for ordering in us,. \n Please wait to verify your order..`,
            showConfirmButton: true,
            timer: 5000
          })
          
          }} className="mt-3" variant="danger">Pay</Button>
      </Stack>

    </div>
    </Container>

    </>
  )
}

export default Cart