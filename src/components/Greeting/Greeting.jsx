import React from 'react'
import { Btn, Div, Header } from './Greeting.styled'

const Greeting = ({handleClick}) => {
    return (
        <Div>
            <Header>Hi👋</Header>
            <Header>You can use a convenient application for contacts!</Header>
            <Btn onClick={handleClick}>Get started!</Btn>
        </Div>
  )
}

export default Greeting