import React from 'react'
import Products from './Products'
import Rating from './Rating'
import { Button } from 'react-bootstrap'

function formatName(user) {
  return user.firstName + ' ' + user.lastName
}

function App() {
  const isValid = true

  return (
    <div>
      <Rating rating='1' />
      <Rating rating='2' />
      <Rating rating='3' />
      <Rating rating='4' />
      <Rating rating='5' />

      <Products />
      <h1>Hello, {formatName({ firstName: 'Harsh', lastName: 'Choudhary' })}!</h1>
      <h2>Welcome to React</h2>
    </div>
  )
}

export default App
