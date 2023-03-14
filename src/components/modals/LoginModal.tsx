import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { useAuthStore } from "../../stores/useAuthStore";
import Loader from "../Loader";

interface Props {
  open: boolean;
  handleClose: () => void
}

const LoginModal: React.FC<Props> = ({ open, handleClose }) => {

  const { login } = useAuth()

  const setAuth = useAuthStore((state) => state.setAuth)

  const loginMutation = login()

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };

    const email = target.email.value;
    const password = target.password.value;

    loginMutation.mutate({ email, password }, {
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
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
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
            loginMutation.isLoading
              ? <Loader />
              : <Button type="submit">Login</Button>
          }

        </DialogActions>
      </form>

    </Dialog>
  )
}

export default LoginModal