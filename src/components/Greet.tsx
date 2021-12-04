import React from 'react'

type GreetProps = {
  name:string
  age:number
}

const Greet = (props:GreetProps) => {
  return (
    <div>
        <h2>this is greet component {props.name} you are {props.age} years old</h2>
    </div>
  )
}

export default Greet
