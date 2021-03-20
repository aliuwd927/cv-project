import React from 'react'

const Header = (props) =>{
  const { names } = props;

  return (
    <ul>
      {names.map((name) => {
        return <li>{name}</li>
      })}
    </ul>
  )
}

export default Header