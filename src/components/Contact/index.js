
import React, { useState } from 'react';
import { Container, Row, Form } from "react-bootstrap";
import { validateEmail } from "../../utils/helpers"
import Button from "react-bootstrap/Button";

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

 
  return (
    <div>
      <Container fluid className="contact-section">
     
        <Row style={{ justifyContent: "center", position: "relative" }}>
        <section>
        
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="your name" name="name" defaultValue={name}  onBlur={handleChange}/>
      </Form.Group>    
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" name="email" defaultValue={email} onBlur={handleChange} />
    
      </Form.Group>
     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} name="message"  defaultValue={message}  onBlur={handleChange} />
    </Form.Group>
    </Form>



    <form id="contact-form" onSubmit={handleSubmit}>
          
          <Button type="submit">Submit</Button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}


      </section>
  


        </Row>

       
        
      </Container>
    </div>
  );
}

export default Contact;

