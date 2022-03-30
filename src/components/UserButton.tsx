import React from 'react'
import Button from '@material-ui/core/Button/Button'

const menuLabels = {
  color: 'black',
  padding: 20,
}

export class UserButton extends React.Component<IUserButtonProps, {}> {
  render() {
    const { isLoggedIn } = this.props
    const selectedPanel = isLoggedIn ? (
      <Button style={menuLabels}>Members</Button>
    ) : (
      <Button style={menuLabels}>Login</Button>
    )
    return selectedPanel
  }
}

export interface IUserButtonProps {
  isLoggedIn: boolean
}
