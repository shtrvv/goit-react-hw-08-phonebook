import styled from "styled-components"

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    width: 400px;
    margin: 0 auto;
    box-shadow: rgba(90, 68, 134, 0.12) 0px 4px 8px 0px, rgba(90, 68, 134, 0.32) 0px 8px 24px 0px;
    border-radius: 7px;
    padding: 10px 0;
    margin-top: 90px;
    background: rgb(168,154,198);
    background: radial-gradient(circle, rgba(168,154,198,1) 0%, rgba(111,87,159,1) 100%);
`
export const Label = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    font-size: 18px;
    font-weight: 700;
    color: white;
`
export const Input = styled.input`
    font-size: 16px;
    border-radius: 5px;
    border: 3px solid white;
    padding: 5px;
`
export const Button = styled.button`
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    background-color: white;
    border-radius: 5px;
    border: none;
    padding: 8px 16px;
    color: #5a4486;
    text-transform: capitalize;
    transition-duration: .3s;
    transition-timing-function: linear;
    &:is(:hover) {
        transform: scale(1.15);
    }
`