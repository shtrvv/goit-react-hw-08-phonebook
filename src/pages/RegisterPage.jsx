import RegisterForm from 'components/RegisterForm/RegisterForm'
import React from 'react'
import { useDispatch } from 'react-redux'
import { signUpThunk } from '../redux/auth/authOperations';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const register = (body) => {
    dispatch(signUpThunk(body))
  }

  return (
    <>
      <RegisterForm register={register} />
    </>
  )
}

export default RegisterPage