import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content"


function Login({show, showLogin, showRegister}) {
  
  const Swalrt = withReactContent(Swal)

  const navigate = useNavigate();
  
  const handleClose = () => showLogin(false)
  const changeModal = () => {
    handleClose()
    showRegister(true)
  }
  
  //login
  const [userLogin, setUserLogin] = useState({
    name: "",
    email: "",
    password: "",
  })
  
  const dataUser = []
  const getUser = () => {
    if (typeof Storage === "undefined") {
      alert("cant store user");
    }

    const localData = localStorage.getItem("DATA_USER");
    let data = JSON.parse(localData);

    if (data !== null) {
      for (let i = 0; i < data.length; i++) {
        dataUser.push(data[i]);
      }
    }
  };

  function handleOnChange(event) {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    });
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    getUser();
    let loggedIn = dataUser.filter(
      (element) => element.email === userLogin.email
    );
    if (loggedIn.length === 0) {
      return alert("email not registered");
    }

    if (loggedIn[0].password !== userLogin.password) {
      return alert("wrong password");
    }

    let parsed = JSON.stringify(loggedIn);
    localStorage.setItem("LOGIN_STATUS", parsed);
    // alert("successfully login..")
    Swalrt.fire({
      position: 'center',
      icon: 'success',
      title: 'Successfully Login..!',
      showConfirmButton: true,
      timer: 2500
    })
   
    navigate("/")
    handleClose();
  }

  return (
    <Modal 
      show={show}
      onHide={handleClose}
      size="md p-5"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold text-danger fs-5">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="my-3" onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
            type="text"
            onChange={handleOnChange}
            name="email"
            placeholder="Riki Wahyudi"
            style={{borderColor: "red"}}
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Control
            type="password"
            onChange={handleOnChange}
            name="password"
            placeholder="Password"
            style={{borderColor: "red"}}
              />
              </Form.Group>
            <div className="d-grid mt-4">
            <button className="fw-bold btn btn-md btn-danger">Login</button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
        <div className="d-grid m-auto">
        <p className="text-decoration-none">Dont have an account? Click <Link to onClick={changeModal} className="fw-bold text-dark" style={{textDecoration: "none"}} >Here</Link></p>
        </div>
      </Modal.Footer>   
      </Modal>
  );
}


export default Login