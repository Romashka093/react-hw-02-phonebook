import React, { Fragment } from 'react';

export function Input({
  titleNameInput,
  type,
  placeholder,
  value,
  onChange,
  name,
  id,
}) {
  return (
    <Fragment>
      <label htmlFor={id}>
        {titleNameInput}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />
      </label>
    </Fragment>
  );
}
