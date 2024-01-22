import styled from "styled-components";

export const Div = styled.div`
    margin-top: 90px;
    box-shadow: rgba(90, 68, 134, 0.12) 0px 4px 8px 0px, rgba(90, 68, 134, 0.32) 0px 8px 24px 0px;
    padding: 18px 22px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 8px;
    border-radius: 7px;
`
export const Header = styled.h1`
    width: 450px;
    color: white;
    text-shadow: rgb(102, 51, 153) 2px 0px 3px, 
        rgb(102, 51, 153) 0px 2px 3px, 
        rgb(102, 51, 153) -2px 0px 3px, 
        rgb(102, 51, 153) 0px -2px 3px;
`
export const Btn = styled.button`
    cursor: pointer;
    width: 150px;
    padding: 8px 16px;
    font-weight: 700;
    font-size: 16px;
    border: 2px solid #5a4486;
    border-radius: 5px;
    background-color: white;
    color: #5a4486;
    transition-duration: .3s;
    transition-timing-function: linear;
    &:is(:hover) {
        background-color: #5a4486;
        color: white;
    }
`