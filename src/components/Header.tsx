import { useState } from 'react';

import { Menu, MenuItem, TextField } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LoginModal from './modals/LoginModal';
import { useAuthStore } from '../stores/useAuthStore';
import { shallow } from 'zustand/shallow'
import RegisterModal from './modals/RegisterModal';
import { useNavigate } from 'react-router-dom';
import { Roles } from '../types/Roles';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false)
  const [openRegisterModal, setOpenRegisterModal] = useState<boolean>(false)
  const userState = useAuthStore(state => state.user)

  const navigate = useNavigate()

  const { user, isAuthenticated, logout } = useAuthStore(
    (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated, logout: state.logout }),
    shallow
  )

  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onCloseLoginModal = () => {
    setOpenLoginModal(false)
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickRegister = () => {
    handleClose()
    setOpenRegisterModal(true)
  }

  const onLogin = () => {
    handleClose()
    setOpenLoginModal(true)
  }

  const onClickLogout = () => {
    logout()
    handleClose()
  }

  const goToAdmin = () => navigate("/admin")

  return (
    <>
      <LoginModal open={openLoginModal} handleClose={onCloseLoginModal} />
      <RegisterModal open={openRegisterModal} handleClose={() => setOpenRegisterModal(false)} />
      <header className='align-items-center bg-white d-flex justify-content-center pb-3 pt-5 px-5'>

        {userState?.role == Roles.ADMIN && <span onClick={() => goToAdmin()} role="button" className='me-3'>To Admin</span>}

        <TextField variant='outlined' placeholder='Buscar producto' className='w-50' />
        <div
          id="my-account"
          aria-controls={open ? 'menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          className='mx-3'
          role='button'
          onClick={handleClick}
        >
          <PersonOutlineIcon />

          {user?.name ?? "Mi cuenta"}

          <ArrowDropDownIcon />
        </div>
        <Menu
          id="menu"
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'my-account',
          }}
        >
          {
            isAuthenticated ?
              <MenuItem onClick={onClickLogout}>Logout</MenuItem>
              :
              <span>
                <MenuItem onClick={onClickRegister}>Registrarte</MenuItem>
                <MenuItem onClick={onLogin}>Iniciar sesión</MenuItem>
              </span>
          }



        </Menu>
      </header>
    </>
  )
}

export default Header