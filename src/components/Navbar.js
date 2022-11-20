import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import  Navbar from 'react-bootstrap/Navbar';
import { Button , Dropdown } from 'react-bootstrap';
import Login from './form/Login.js';
import Register from './form/Register';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content"


function Navbars() {  

  const [show, setShow] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate()
  const Swalrt = withReactContent(Swal)

  const localData = localStorage.getItem("LOGIN_STATUS");
  const data = JSON.parse(localData);
  let getLogin = [...data];

  const Logout = () => {
    getLogin.pop();

    Swalrt.fire({
      position: 'center',
      icon: 'success',
      title: 'Successfully Logout..!',
      showConfirmButton: false,
      timer: 2500
    })

    const parsed = JSON.stringify(getLogin);
    localStorage.setItem("LOGIN_STATUS", parsed);
  };

  return (
    <>
    <Navbar bg="light">
      <Container>
      <Navbar.Brand>
            <img
              onClick={() => { navigate("/") }}
              src="/logo.svg"
              style={{ cursor: "pointer" }}
              className="d-inline-block align-top"
              alt="Waysbuck"
            />
          </Navbar.Brand>
        <Navbar.Toggle />
       
        {getLogin.length <= 0 ? (
          
         <Navbar.Collapse className="justify-content-end gap-2">
          <Button onClick={() => setShow(true)} className="fw-bold" variant="outline-danger" style={{width: "100px"}}>Login</Button>
          <Button onClick={() => setShowRegister(true)} className="fw-bold" variant="danger" style={{width: "100px"}}>Register</Button>
        </Navbar.Collapse>
         ) : ( 
          
          <Navbar.Collapse className="justify-content-end gap-5">
          <img src="/assets/img/cart.svg" onClick={() => { navigate("/cart") }} alt="cart" style={{cursor: "pointer"}} />
        <Dropdown>
        <Dropdown.Toggle id="dropdown-basic" style={{background: "transparent", border: "none"}}>
          <img src="/assets/img/users.svg" alt="users" />
        </Dropdown.Toggle>
        <>
          {getLogin[0].role === "admin" ? (
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => { navigate("/profile") }} className="fw-bold"><img src="/assets/img/user.svg" alt="" className="me-2 mb-2" />Profile</Dropdown.Item>
            <Dropdown.Item onClick={() => { navigate("/add-products") }} className="fw-bold"> <img src="/assets/img/addproduct.svg" alt="" className="me-2 mb-2" />Add Products</Dropdown.Item>
            <Dropdown.Item onClick={() => { navigate("/add-topping") }} className="fw-bold"> <img src="/assets/img/addtoping.svg" alt="" className="me-2 mb-2" />Add Toping</Dropdown.Item>
            <Dropdown.Item onClick={() => { navigate("/transactions") }} className="fw-bold"> <img src="/assets/img/user.svg" alt="" className="me-2 mb-2" />Transactions</Dropdown.Item>
            <div className="my-1" style={{borderBottom: "2px solid grey"}} />
            <Dropdown.Item onClick={() => { Logout(); navigate("/")}} className="fw-bold"> <img src="/assets/img/logout.svg" alt="" className="me-2 mb-1 ms-1"/>Logout</Dropdown.Item>
          </Dropdown.Menu>
          ) : (
            <Dropdown.Menu>
            <Dropdown.Item onClick={() => { navigate("/profile") }} className="fw-bold"><img src="/assets/img/user.svg" alt="" className="me-2 mb-2" />Profile</Dropdown.Item>
            <div className="my-1" style={{borderBottom: "2px solid grey"}} />
            <Dropdown.Item onClick={() => { Logout(); navigate("/")}} className="fw-bold"><img src="/assets/img/logout.svg" alt="" className="me-2 mb-1 ms-1"/> Logout</Dropdown.Item>
          </Dropdown.Menu>
            )}
          </>
        </Dropdown>
          </Navbar.Collapse>
          )}
      </Container>
    </Navbar>
    {/* isLogin={() => isLogin(true)} */}
    {/* onRegist={() => setShow(false) & setShowRegister(true)} */}
    {/* onLogin={() => setShowRegister(false) & setShow(true)} */}

    <Login show={show} showLogin={setShow} showRegister={setShowRegister} />
    <Register show={showRegister} showLogin={setShow} showRegister={setShowRegister} />
    </>
  );
}

export default Navbars;