import React from 'react'
import { useParams } from 'react-router-dom'
import { getData } from '../utils/Data';
import Details from './Details';



function ListDeatils() {
  const getDataID = getData()
  // console.log("getdata", getDataID)

    const { id } = useParams();

  return (
    <>
        <Details title={getDataID[id].title} harga={getDataID[id].harga} imageUrl={getDataID[id].imageUrl} />

    </>
  )
}

export default ListDeatils