import React from 'react'
import { Container } from 'react-bootstrap'
import List from './cards/List';

const styles = {
    relative: {
        display: "block",
        position: "relative",
        margin: "10px 10% 0 10px",
    },

    absolute: {
        position: "absolute",
        marginLeft: "10px",
        top: "10%",
        left: "75%",
        width: "300px",
        height: "230px",
    },
};

function Section() {
  return (
    <Container className="p-5">
            <div style={styles.relative} className="p-5 bg-danger rounded">
                <div className="pe-5 me-5">
                    <div className='pe-5 me-5'>
                    <h3 className="fs-3 text-white">WAYSBUCKS</h3>
                    <p className="text-white">Things are changing, but we we're still here for you.</p>
                    <p className="text-white pe-5">We have temporarily closed our in-store, cafes but select 
                    grocery and drive-thru locations remaining open. <b>Waysbucks</b> Drivers is also avalaible</p>
                    <p className="text-white">Let's Order..</p>
                    <div style={styles.absolute} className="rounded overflow-hidden">
                    <img src="/assets/img/jumbotron.png" alt="images" styles={styles.image} height="100%"/>
                    </div>
                    </div>
                </div>
            </div>

        <div className="px-3 my-3">
            <h3 className="px-3 text-danger fs-3">Let's Order</h3>
        <div className="d-flex">                
            <List/>
        </div>
        </div>
        </Container>
  )
}

export default Section