import React from 'react'

const InputField = ({Type,Name,changeEvent,Placeholder,styles,Value}) => {
  return (
    <div>
      <input type={Type} value={Value} name={Name} onChange={changeEvent} placeholder={Placeholder} className={styles}/>
    </div>
  )
}

export default InputField
