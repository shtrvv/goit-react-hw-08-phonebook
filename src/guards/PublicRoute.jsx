import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { selectToken } from '../redux/auth/selectors'

const PublicRoute = ({ children }) => {
    const isAuth = useSelector(selectToken)
    const location = useLocation()

    return !isAuth ? children : <Navigate to='/contacts' state={location} />
}

export default PublicRoute