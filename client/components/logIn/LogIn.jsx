import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const  LogIn = () => {
    
  return (
    <Form className='Register'>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="2">
          {/* <Form.Control plaintext readOnly defaultValue="email@example.com" /> */}
          <Form.Control type="email" placeholder="email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="2">
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
       <Button variant="primary" type="submit">
        Log in
      </Button>
    </Form>
  );
}

export default LogIn;