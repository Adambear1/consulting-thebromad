import React from 'react'

function FormInput({name, info, placeholder, type}) {
  return (
    <div className="row">
      <div className="col-md-6 col-12">
        <div className="form-outline m-3">
          <input type={type}
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
      <div className="col-md-6 col-12">
        <small className="text-center center-align">{info}</small>
      </div>
    </div>
  )
}

export default FormInput
