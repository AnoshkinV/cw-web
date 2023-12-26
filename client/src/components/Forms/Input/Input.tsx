import React from 'react'

interface InputProps {
    value: string,
    placeholder: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    error?: boolean,
    password?: boolean
}

const Input: React.FC<InputProps> = ({value, onChange, placeholder, error, password}) => 
(
    <input
    className={`bg-gray-700 rounded-md ${error ? 'errorField' : ''}`}
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e)}
    type={!password ? 'text' :'password'}
    />
  )

export default Input