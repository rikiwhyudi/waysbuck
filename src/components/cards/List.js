import React from 'react'
import { getData } from "../../utils/Data"

import Cards from './Cards'

function List() {
  const dataDummy = getData()

  return (
    <>
    {
       dataDummy.map((data) => (
         <Cards key={data.id} {...data} />
       ))
     }
    </>
  )
}

export default List