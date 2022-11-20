import React from 'react'
import { Container, Table } from 'react-bootstrap'

function Income() {
  return (
    <Container className="mt-5">
    <Table striped bordered hover>
        {/* #E5E5E5 */}
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Address</th>
        <th>Post Code</th>
        <th>Income</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Sugeng No Pants</td>
        <td>Cileungsi</td>
        <td>16820</td>
        <td>69.000</td>
        <td>Waiting Approve</td>
        <td align="center">
            <button style={{width: "100px", borderRadius: "8px"}} className="btn btn-danger btn-sm me-2">Cancel</button>
            <button style={{width: "100px", borderRadius: "8px"}} className="btn btn-success btn-sm">Approve</button>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Haris Gams</td>
        <td>Serang</td>
        <td>42111</td>
        <td>30.000</td>
        <td>Success</td>
        <td align="center"><img src="/assets/img/ceklis.svg" alt="success" /></td>
      </tr>
      <tr>
        <td>3</td>
        <td>Aziz Union</td>
        <td>Bekasi</td>
        <td>13450</td>
        <td>28.000</td>
        <td>Cancel</td>
        <td align="center"><img src="/assets/img/cancel.svg" alt="success" /></td>
      </tr>
      <tr>
        <td>4</td>
        <td>Lae Tanjung Balai</td>
        <td>Tanjung Balai</td>
        <td>21331</td>
        <td>30.000</td>
        <td>On The Way</td>
        <td align="center"><img src="/assets/img/ceklis.svg" alt="success" /></td>
      </tr>
    </tbody>
  </Table>
    </Container>
  )
}

export default Income