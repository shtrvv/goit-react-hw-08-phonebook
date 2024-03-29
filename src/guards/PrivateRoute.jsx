import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { selectToken } from '../redux/auth/selectors'

const PrivateRoute = ({ children }) => {
    const isAuth = useSelector(selectToken)
    const location = useLocation()

    return isAuth ? children : <Navigate to='/login' state={location} />
}

export default PrivateRoute