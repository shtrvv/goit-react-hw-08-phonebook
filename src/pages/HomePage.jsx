import Greeting from 'components/Greeting/Greeting'
import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';
import { selectToken } from '../redux/auth/selectors';

const HomePage = () => {
  const isAuth = useSelector(selectToken);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    isAuth ? navigate('/contacts', { state: location }) : navigate('/login', { state: location })
  }

  return (
    <>
      <Greeting handleClick={handleClick} />
    </>
  )
}

export default HomePage