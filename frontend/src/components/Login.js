import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login(props) {
  return (
    <Form className='shadow p-3 mb-5 bg-white rounded sign-container'>
      <Form.Group className="m-4" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' onChange={props.handleChange}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="m-4" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' onChange={props.handleChange}/>
      </Form.Group>
      
      <Button variant="primary" type="submit" className='m-4'>
        Submit
      </Button>
    </Form>
  );
}

export default Login;