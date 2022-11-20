import React, { useState } from 'react'
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
    className="d-flex flex-column align-items-center justify-content-center">

    <img src={moodBootProps.imageUrl} alt="coffee" />

      { marking ? (
        <Badge className= "notifCheck position-absolute p-2 border border-light rounded-circle visible" bg="success" >
        <span className="visually-hidden">New alerts</span>
      </Badge>
      ) :
      (
        <Badge className= "notifCheck position-absolute p-2 border border-light rounded-circle invisible" bg="success" >
          <span className="visually-hidden">New alerts</span>
        </Badge>
      )
      
      }
        <p style={{fontSize: "13px"}} >{moodBootProps.title}</p>
        <p>{moodBootProps.harga}</p>
   </div>
   </>
  )
}

export default Topping