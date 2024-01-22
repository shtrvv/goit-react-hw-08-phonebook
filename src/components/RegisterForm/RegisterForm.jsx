import { Button, Form, Input, Label } from 'components/LoginForm/LoginForm.styled';
import React from 'react'

const RegisterForm = ({ register }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, password } = e.target.elements;

        register({name: name.value, email: email.value, password: password.value})
    }


    return (
      <Form onSubmit={handleSubmit}>
          <Label>
              Name
              <Input type="name" name="name" placeholder='Alex' required />
          </Label>
          <Label>
              Email
              <Input type="email" name='email' placeholder='example@mail.com' required />
          </Label>
          <Label>
              Password
              <Input type="password" name='password' placeholder='qwerty123' required />
          </Label>
          <Button type='submit'>Submit</Button>
    </Form>
    )
}

export default RegisterForm