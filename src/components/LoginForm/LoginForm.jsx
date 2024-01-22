import { Form, Input, Label, Button } from 'components/LoginForm/LoginForm.styled';
import React from 'react'

const LoginForm = ({ login }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = e.target.elements;

    login({email: email.value, password: password.value})
  }

  return (
      <Form onSubmit={handleSubmit}>
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

export default LoginForm