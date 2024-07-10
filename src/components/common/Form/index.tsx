import React, { useState, ChangeEvent } from 'react'
import PropTypes from 'prop-types'

interface FormProps {
  id: string
  name: string
  value: string | number
  type?: 'text' | 'email' | 'tel' | 'textarea'
  placeholder?: string
  className?: string
  errorResponse?: string
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const Form: React.FC<FormProps> = ({
  id,
  name,
  value,
  type = 'text',
  placeholder = '',
  className = '',
  errorResponse = 'Please match the requested format.',
  onChange
}) => {
  const [hasError, setHasError] = useState<string | null>(null)

  let pattern: RegExp | undefined = undefined
  if (type === 'email') pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (type === 'tel') pattern = /^[0-9]*$/

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (type === 'email' && pattern instanceof RegExp) {
      if (pattern.test(event.target.value)) setHasError(null)
      else setHasError(errorResponse)
    } else if (type === 'tel' && pattern instanceof RegExp) {
      if (pattern.test(event.target.value)) onChange(event)
    } else {
      onChange(event)
    }
  }

  return (
    <div className="flex flex-col mb-6 mx-2 lg:mx-5">
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          value={value as string}
          className={[
            'w-95 sm:w-192 lg:w-192.5 xl:w-192.5 p-4 mx-2 mb-6 font-light text-lg text-theme-blue rounded border border-gray-400 focus:outline-none focus:ring-1 focus:ring-theme-purple',
            className
          ].join(' ')}
          onChange={handleChange}
          rows={9}
          required
        />
      ) : type === 'tel' ? (
        <div className="flex flex-col mb-6 mx-2 lg:mx-5">
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            pattern={pattern?.source} // Use pattern.source for string representation of RegExp
            value={value as string}
            className={[
              'p-4 font-light text-lg text-theme-blue rounded border border-gray-400 focus:outline-none focus:ring-1 focus:ring-theme-purple',
              className
            ].join(' ')}
            onChange={handleChange}
            required
          />
          {hasError && (
            <span className="text-sm text-white bg-red-500 p-1 rounded">{hasError}</span>
          )}
        </div>
      ) : (
        <div className="flex flex-col mb-6 mx-2 lg:mx-5">
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            value={value as string}
            className={[
              'p-4 font-light text-lg text-theme-blue rounded border border-gray-400 focus:outline-none focus:ring-1 focus:ring-theme-purple',
              className
            ].join(' ')}
            onChange={handleChange}
            required
          />
          {hasError && (
            <span className="text-sm text-white bg-red-500 p-1 rounded">{hasError}</span>
          )}
        </div>
      )}
    </div>
  )
}

Form.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'tel', 'textarea']),
  placeholder: PropTypes.string,
  className: PropTypes.string,
  errorResponse: PropTypes.string
}

export default Form
