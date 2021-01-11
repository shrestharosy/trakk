import React, { FC } from 'react';
import { Button, DialogActions } from '@material-ui/core';

import FormInput from 'components/FormControls/Input';

interface IBoardFormProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export interface IBoardFormValues {
  title: string;
  description: string;
}

const BoardForm: FC<IBoardFormProps> = props => {
  const { onConfirm, onCancel } = props;

  return (
    <>
      <FormInput name={'title'} label={'Title'} />
      <FormInput name={'description'} label={'Description'} />
      <DialogActions>
        <Button color="primary" onClick={onCancel}>
          Cancel
        </Button>
        <Button color="primary" onClick={onConfirm}>
          Add
        </Button>
      </DialogActions>
    </>
  );
};

export default BoardForm;
