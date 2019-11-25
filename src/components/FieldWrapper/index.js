import React from 'react';
import { FieldLabel } from "../FieldLabel";
import { FieldText } from "../FieldText";
import { FieldSelect } from "../FieldSelect";

export const FieldWrapper = (props) => (
  <FieldLabel htmlFor={props.id}>
    {props.label}
    {props.type === 'text' ? (
      <FieldText name={props.name} {...props} />
    ) : (
      <FieldSelect name={props.name} {...props} />
    )}

  </FieldLabel>
);
