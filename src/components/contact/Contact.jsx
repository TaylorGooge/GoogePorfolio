import React, {useState, useRef}from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const [sendSuccess, setSendSucces] = useState(false);
  const [sendFail, setSendFail] = useState(false);
  const form = useRef();


  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      return;
    }

    setValidated(true);
    sendEmail();
  };

  const sendEmail = () => {
    setSendSucces(false);
    setSendFail(false)
    
    emailjs.sendForm('service_n3a5lsj', 'template_elw54vb', form.current, 'B3qOKdXM-kf_bUSU4')
     .then((result) => {
         setSendSucces(true)
     }, (error) => {
       setSendSucces(false)
     });
  }
  return (
    <Form ref={form} validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          placeholder="your email here"
          type="email"
          name='from_name'
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control
          placeholder="your message here"
          as="textarea"
          name='message'
          required
        />
      </Form.Group>
      <Button type ='Submit' variant="primary">Submit</Button>
      {sendSuccess && <p>Message sent successfully</p>}
      {sendFail && <p>Message failed to send</p>}
    </Form>
    
  );
};

export default Contact;
