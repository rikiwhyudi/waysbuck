import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content"

 
function Cards({ id, title, harga, imageUrl}) {

  const Swalrt = withReactContent(Swal)
  const localData = localStorage.getItem("LOGIN_STATUS");
  const data = JSON.parse(localData);
  let getLogin = [...data];
   console.log(getLogin)
  const navigate = useNavigate()

  const handleOnClick = () => {
    if (getLogin.length !== 0) {
      return navigate(`/details/${id}`) 
    } else {
      return Swalrt.fire({
        position: 'center',
        icon: 'info',
        title: 'Login/Register dulu..!',
        showConfirmButton: true,
        timer: 5000
      })
    }
  } 


 return (
  <>

   <Card onClick={handleOnClick} style={{ width: '18rem', cursor: 'pointer', margin: '10px', background: 'pink', overflow: "hidden"}}>
    {/* ` style={{textDecoration: "none"}}> */}
        <Card.Img variant="top" src={imageUrl} height="300px" style={{objectFit: "cover"}} />
        <Card.Body>
        <Card.Title className="text-danger">{title}</Card.Title>
        <Card.Text className="text-secondary">Rp.{harga}</Card.Text>
      </Card.Body>
   </Card>

   {/* <Login show={show} setShow={setShow} /> */}
  </>
 );
}
 
export default Cards;