import React from 'react'
import { getToping } from '../../utils/Data'
import Topping from './Topping'

function ListToping() {
    const getItem = getToping()

  return (
    <>
    {
        getItem.map((data) => (
            <Topping key={data.id} {...data} />
        ))
    }
    </>
  )
}

export default ListToping