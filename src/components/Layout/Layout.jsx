import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { logOutThunk } from '../../redux/auth/authOperations';
import { selectToken, selectUser } from '../../redux/auth/selectors';
import UserMenu from 'components/UserMenu/UserMenu';
import { Div, Header, List, Nav, NavLinkStyled } from './Layout.styled';
import Notiflix from 'notiflix';

const Layout = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const isAuth = useSelector(selectToken);

    const handleLogout = () => {
        Notiflix.Notify.info('You leave the account');
        dispatch(logOutThunk())
    }

    return (
    <Div>
        <Header>
            {!isAuth ?   
            <Nav>
                <ul>        
                    <li><NavLinkStyled to='/'>Home</NavLinkStyled></li>
                </ul>            
                <List>
                    <li>
                        <NavLinkStyled to='/login'>Login</NavLinkStyled>
                    </li>
                    <li>
                        <NavLinkStyled to='/register'>Registration</NavLinkStyled>
                    </li>
                </List>
            </Nav>                   
            :
            <UserMenu handleLogout={handleLogout} user={user} />    
            }
        </Header>
        <Outlet/>    
    </Div>
  )
}

export default Layout