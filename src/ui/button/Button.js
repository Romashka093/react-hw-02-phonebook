import React, { Fragment } from 'react';

export function Button({ name, type, onClick }) {
  return (
    <Fragment>
      <button onClick={onClick} type={type}>
        {name}
      </button>
    </Fragment>
  );
}
