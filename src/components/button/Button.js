import React from 'react'

const Button = ({clickevent,style,text}) => {
  return (
    <button onClick={clickevent} className={style}>{text}</button>
  )
}

export default Button
