import React from 'react'
import { Stack } from 'react-bootstrap'

function ShopCard() {
  return (
    <>
    <Stack direction="horizontal" gap={3} >
          <img src="/assets/img/coffee1.png" width="80" alt="products" className="rounded" />
        <Stack direction="vertical" className="mt-4" gap={2} >
          <div className="text-danger fw-bold">Ice coffee palm sugar</div>
          <div className="text-danger">Toping: Bil berry boba, bubble tea gelatin</div>
        </Stack>

      <Stack direction="vertical" className="mt-4" gap={2} >
        <div className="text-danger ms-auto">Rp. 27.000</div>
        <div className="bg-light border ms-auto"><img src="/assets/img/delete.svg" width="20" alt="delete" /></div>
      </Stack>
    </Stack> 
    </>
  )
}

export default ShopCard 