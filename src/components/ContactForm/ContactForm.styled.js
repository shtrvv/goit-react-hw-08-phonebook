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
`
export const Label = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    font-size: 18px;
    font-weight: 700;
    color: #663399;
`
export const Input = styled.input`
    font-size: 16px;
    border-radius: 5px;
    border: 3px solid #663399;
    padding: 5px;
`
export const Button = styled.button`
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    background-color: #9370DB;
    border-radius: 7px;
    border: none;
    padding: 8px 10px;
    color: white;
    text-transform: capitalize;
    transition-duration: .3s;
    transition-timing-function: linear;

    &:is(:hover) {
        transform: scale(1.15);
        background-color: #663399;
    }
`
