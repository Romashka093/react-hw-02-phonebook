import React, { Fragment } from 'react';
import { Button } from '../../../../ui/button/Button';

export function ListItem({ name, number, onDeleteContact }) {
  return (
    <Fragment>
      <p>{name}</p>
      <span>{number}</span>
      <Button name="delete" type="button" onClick={onDeleteContact} />
    </Fragment>
  );
}
