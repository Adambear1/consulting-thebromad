import React from 'react'

function FormInput({name, info, placeholder}) {
  return (
    <div className="row">
      <div className="col-6">
        <div className="form-outline m-3">
          <input type="text"
          placeholder={placeholder}
            id={
              name.replace(/ /g, "").toLowerCase()
            }
            className="form-control"/>
          <label className="form-label"
            for={
              name.replace(/ /g, "").toLowerCase()
          }>
            {name}</label>
        </div>
      </div>
      <div className="col-6 ">
        <small>{info}</small>
      </div>
    </div>
  )
}

export default FormInput
