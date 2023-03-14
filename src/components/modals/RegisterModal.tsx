import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { useAuthStore } from "../../stores/useAuthStore";
import Loader from "../Loader";

interface Props {
  open: boolean;
  handleClose: () => void
}

const RegisterModal: React.FC<Props> = ({ open, handleClose }) => {

  const { register } = useAuth()

  const setAuth = useAuthStore((state) => state.setAuth)

  const registerMutation = register()

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      password: { value: string };
    };

    const name = target.name.value;
    const email = target.email.value;
    const password = target.password.value;

    registerMutation.mutate({ name, email, password }, {
      onSuccess: (data) => {
        setAuth(data.user, data.token)
        
        handleClose()
      },
      onError: (err) => {
        console.log({err});
      },
    })


  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={onSubmit}>
        <DialogTitle>Register</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            name="name"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            id="email"
            label="Email"
            type="email"
            name="email"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            name="password"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>

          {
            registerMutation.isLoading
              ? <Loader />
              : <Button type="submit">Register</Button>
          }

        </DialogActions>
      </form>

    </Dialog>
  )
}

export default RegisterModal