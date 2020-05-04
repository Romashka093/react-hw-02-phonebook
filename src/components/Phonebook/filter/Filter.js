import React, { Fragment } from 'react';
import { Input } from '../../../ui/input/Input';

export function Filter({ value, onChangeFilter }) {
  return (
    <Fragment>
      <Input
        value={value}
        type="text"
        placeholder="find contact by name"
        onChange={onChangeFilter}
      />
    </Fragment>
  );
}
