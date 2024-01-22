import LoginForm from 'components/LoginForm/LoginForm'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logInThunk } from '../redux/auth/authOperations';

const LoginPage = () => {
  const dispatch = useDispatch();

  const login = (body) => {
    dispatch(logInThunk(body))
  }

  return (
    <>
      <LoginForm login={login} />
    </>
  )
}

export default LoginPage