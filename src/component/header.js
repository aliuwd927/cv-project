import React from 'react'

const Header = (props) =>{
  const { names } = props;

  return (
    <ul>
      {names.map((name) => {
        alert(name)
      })}
    </ul>
  )
}

export default Header