import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function Register({show, showLogin, showRegister}) {
  const dataUser = [];

  const handleClose = () => showRegister(false)
  const changeModal = () => {
    handleClose()
    showLogin(true)
  }

  const [userRegister, setUserRegister] = useState({
    id: 0,
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  function handleOnChange(event) {
    setUserRegister({
      ...userRegister,
      [event.target.name]: event.target.value,
    });
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    getUser();

    let loggedIn = dataUser.filter(
      (element) => element.email === userRegister.email
    );
    if (loggedIn.length !== 0) {
      return alert("email is registered");
    } else {
      createUser();
      changeModal();
    }
  }

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

  const createUser = () => {
    userRegister.id = dataUser.length;
    dataUser.push(userRegister);
    const parsed = JSON.stringify(dataUser);
    localStorage.setItem("DATA_USER", parsed);
  };

  return (
    <Modal 
      show={show}
      onHide={handleClose}
      size="md p-5"
      centered
    >
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold text-danger fs-5">Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="my-3" onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
            type="text"
            name="name"
            placeholder="Riki Wahyudi"
            style={{borderColor: "red"}}
            onChange={handleOnChange}
              />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
            type="email"
            name="email"
            placeholder="riki@mail.com"
            style={{borderColor: "red"}}
            onChange={handleOnChange}
            // value={user.email}
              />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleOnChange}
            style={{borderColor: "red"}}
              />
          </Form.Group>

        <div className="d-grid mt-4">
          <Button variant="danger" type="submit" className="fw-bold">Register</Button>
        </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <div className="d-grid m-auto">
        <p >Already have an account? Click <Link to onClick={changeModal} className="fw-bold text-dark" style={{textDecoration: "none"}}>Here</Link> </p>
        </div>
      </Modal.Footer>
      </Modal>
  );
}

export default Register