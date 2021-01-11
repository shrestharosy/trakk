import { TextField } from '@material-ui/core';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface IFormInputProps {
  name: string;
  label: string;
  type?: string;
}

const FormInput: FC<IFormInputProps> = props => {
  const { name, label, type = 'text' } = props;
  const { control } = useFormContext();

  return (
    <Controller
      as={TextField}
      name={name}
      label={label}
      fullWidth
      type={type}
      control={control}
      margin="dense"
    />
  );
};

export default FormInput;
