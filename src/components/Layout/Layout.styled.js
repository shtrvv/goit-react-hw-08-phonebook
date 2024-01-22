import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Div = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const Header = styled.header`
    padding: 10px 24px;
    width: 768px;
    border-bottom: 1px solid #5a4486;
`
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const List = styled.ul`
    display: flex;
    gap: 18px;
    align-items: center;
`
export const NavLinkStyled = styled(NavLink)`
    display: inline-block;
    font-size: 18px;
    font-weight: 700;
    color: #5a4486;

    &.active {
        color: white;
        background-color: #5a4486;
        padding: 8px;
        border-radius: 7px;
    }
`