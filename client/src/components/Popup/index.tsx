import { FC } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';

interface IPopupProps {
  title: string;
  onClose: () => void;
}

const Popup: FC<IPopupProps> = props => {
  const { title, children, onClose } = props;

  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={true}>
      <DialogTitle id="simple-dialog-title">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      {/* <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Subscribe
        </Button>
      </DialogActions> */}
    </Dialog>
  );
};

export default Popup;
