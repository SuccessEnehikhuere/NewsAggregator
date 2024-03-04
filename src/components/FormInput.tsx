import React from 'react'

interface userDetails {
  label: string
  type: string
  name: string
  defaultValue ?: string
  size ?: string
}

const FormInput = ({label, type, name, defaultValue, size}: userDetails) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>

      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered  ${size}`}
      />
    </div>
  )
}

export default FormInput