import React from 'react'
import { Header, StyledSection } from './Section.styled'

const Section = ({title, children}) => {
  return (
    <StyledSection>
          <Header>{title}</Header>
          {children}
    </StyledSection>
  )
}

export default Section
