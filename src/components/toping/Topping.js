import React, { useState } from 'react';
import { Badge } from 'react-bootstrap';

function Topping(props) {
  
  const moodBootProps = Object.assign({}, props)
  delete moodBootProps.sumTop;
  const [marking, setMark] = useState(false)

  const checkMark = () => {
    setMark(!marking)
    props.sumTop(moodBootProps.harga, marking, moodBootProps.title)
  }

  return (
   <>
   <div 
    key={moodBootProps.id}
    onClick={checkMark}
    className="d-flex flex-column align-items-center ">
      <div className="position-relative">
        <img src={moodBootProps.imageUrl} alt="coffee" style={{cursor: "pointer"}} />
      </div>

      { marking ? (
        <Badge className= "notifCheck position-absolute ms-5 visible" bg="none" >
        <img src='/assets/img/ceklis.svg' alt='' />
      </Badge>
      ) :
      (
        <Badge className= "notifCheck position-absolute p-2 invisible" bg="none" />
      )
      
      }
        <p style={{fontSize: "13px"}} >{moodBootProps.title}</p>
        {/* <p>{moodBootProps.harga}</p> */}
   </div>
   </>
  )
}

export default Topping