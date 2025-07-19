import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DialogContent from '@mui/material/DialogContent';

export const CustomDialog = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog open maxWidth="sm" fullWidth>
      <DialogTitle>
        <IconButton size="small">
          <CloseRoundedIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
