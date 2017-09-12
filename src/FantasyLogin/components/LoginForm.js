import React from 'react'

import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Accordion, Icon } from 'semantic-ui-react'


const LoginForm = ({login, updateUsername, updatePassword, signup, updateConfirmPassword}) => {
  return (
    <div>
    <Accordion >
      <Accordion.Title>
        <Icon name='dropdown' />
            Login
        </Accordion.Title>
       <Accordion.Content>
          <Form onSubmit={login}>
              <Form.Field>
                <label>username</label>
                <input placeholder='username' onChange={updateUsername}/>
              </Form.Field>
              <Form.Field>
                <label>password</label>
                <input placeholder='password' onChange={updatePassword}/>
              </Form.Field>
              <Button type='submit'>Submit</Button>
            </Form>
        </Accordion.Content>
        <Accordion.Title>
        <Icon name='dropdown' />
          SignUp
        </Accordion.Title>
            <Accordion.Content>
            <Form onSubmit={signup}>
                <Form.Field>
                  <label>username</label>
                  <input placeholder='username' onChange={updateUsername}/>
                </Form.Field>
                <Form.Field>
                  <label>password</label>
                  <input placeholder='password' onChange={updatePassword}/>
                </Form.Field>
                <Form.Field>
                  <label>confirm password</label>
                  <input placeholder='password' onChange={updateConfirmPassword}/>
                </Form.Field>
                <Button type='submit'>Submit</Button>
              </Form>
          </Accordion.Content>
          </Accordion>
    </div>
  )
}

export default LoginForm
