import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
`
export const List = styled.ul`
    display: flex;
    gap: 18px;
`
export const Text = styled.p`
    font-size: 18px;
    font-weight: 700;
    color: white;
    background-color: #5a4486;
    padding: 8px;
    border-radius: 7px;
`
export const Btn = styled.button`
    cursor: pointer;
    padding: 8px 16px;
    font-weight: 700;
    font-size: 16px;
    border: 2px solid #B22222;
    border-radius: 5px;
    background-color: white;
    color: #B22222;
    transition-duration: .3s;
    transition-timing-function: linear;
    &:is(:hover) {
        background-color: #B22222;
        color: white;
    }
`