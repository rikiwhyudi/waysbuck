import Form from 'react-bootstrap/Form';

function InputEmail() {
  return (
    <>
    <Form.Group className="mb-3">
        <Form.Control
            type="email"
            placeholder="riki@mail.com"
            style={{borderColor: "red"}}
              />
    </Form.Group>
    </>
  )
}

function InputName() {
  return (
    <>
    <Form.Group className="mb-3">
        <Form.Control
            type="text"
            placeholder="Riki Wahyudi"
            style={{borderColor: "red"}}
              />
    </Form.Group>
    </>
  )
}

function InputPassword() {
  return (
    <>
    <Form.Group className="mb-3">
        <Form.Control
            type="password"
            placeholder="Password"
            style={{borderColor: "red"}}
              />
    </Form.Group>
    </>
  )
}

export { InputEmail, InputName, InputPassword}