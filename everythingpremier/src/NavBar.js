import React from 'react'
import { Menu } from 'semantic-ui-react'


const NavBar = () => {
  return(
    <div>
      <img id="logo" src="/logo_black.svg" alt="logo"/>
      <Menu>
      <Menu.Item header>Home</Menu.Item>
      <Menu.Item name='aboutUs'   />
      <Menu.Item name='jobs'   />
      <Menu.Item name='locations'  />
    </Menu>
    </div>
  )
}

export default NavBar
