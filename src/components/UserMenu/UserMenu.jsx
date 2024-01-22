import React from 'react'
import { Btn, Div, List, Text } from './UserMenu.styled'

const UserMenu = ({handleLogout, user}) => {
  return (
    <Div>
        <List>
          <li><Text>🙍‍♂️ {user?.name}</Text></li>
          <li><Text>📧 {user?.email}</Text></li>
        </List>
          <Btn onClick={handleLogout}>Log Out</Btn>
      </Div>
  )
}

export default UserMenu