import styled from "styled-components";
import contactImage from "./Assets/ContactFormImage.jpg";
import contactBackground from "./Assets/ContactBackground.jpg";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1gscyl8",
        "template_tns52ph",
        form.current,
        "YGpyPg-Pt_o_y0OLx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
        e.target.reset(),
        window.alert("Email Sent, Thank you!")
      );
  };

  return (
    <>
      <Container>
        <Left>
        <Form ref={form} onSubmit={sendEmail}>
            <ContactTitle>Contact Me</ContactTitle>
            <LabelSection>
                <TextLabel >Name: </TextLabel>
                <Input type="text" name="user_name"/>
            </LabelSection>
            <LabelSection>
                <TextLabel>Email: </TextLabel>
                <Input type="email" name="user_email"/>
            </LabelSection>
            <LabelSection>
                <MessageLabel>Message: </MessageLabel>
                <MessageInput name="message"/>
            </LabelSection>
            <ButtonDiv>
                <Send type="submit" >Send</Send>
            </ButtonDiv>
        </Form>
        </Left>
        <Right></Right>
      </Container>
    </>
  );
};

export default Contact;

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Left = styled.div`
  background-image: url(${contactBackground});
  /* Photo by Resul Mentes 🇹🇷 on Unsplash */
  height: 100vh;
  width: 50%;
`;

const Right = styled.div`
  background-image: url(${contactImage});
  /* Photo by Lance Anderson on Unsplash */
  background-size: cover;
  height: 100vh;
  width: 50%;
`;

const Form = styled.form`
display: flex;
flex-direction: column;
`;


const ContactTitle = styled.h1`
text-align: center;
margin: 4.5em 0 0;
font-size: 3em;
`

const TextLabel = styled.label`
display: flex;
justify-content: center;
align-items: center;
padding: 1em;
font-size: 1.5em;
`

const Input = styled.input`
width: 25em;
font-size: 1em;
height: 2em;
padding: 0.25em;
font-family: 'Rajdhani', sans-serif;
margin-right: 17em;
`

const MessageInput = styled.textarea`
width: 25em;
font-size: 1em;
height: 3.75em;
padding: 0.25em;
resize: none;
font-family: 'Rajdhani', sans-serif;
margin-right: 17em;
`

const LabelSection = styled.div`
display: flex;
justify-content: end;
align-items: center;
margin: 1em 0 0 0;
`

const Send = styled.button`
font-size: 1.5em;
height: 2em;
width: 5em;
border-radius: 0.5em;
background-color: #75E6DA;
font-family: 'Rajdhani', sans-serif;
`

const MessageLabel = styled.label`
display: flex;
justify-content: center;
align-items: center;
margin-right: 0.75em;
font-size: 1.5em;
`

const ButtonDiv = styled.div`
margin-top: 2em;
display: flex;
justify-content: center;
align-items: center;
`