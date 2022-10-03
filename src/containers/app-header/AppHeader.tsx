import React, { useState, useContext, useEffect } from 'react';
import { IconButton, Box, AppBar, Typography, Container, Switch } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './appHeader.module.scss'
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { AuthorizationContext } from '../../context/authorizationContext';

const cx = classNames.bind(styles);

const AppHeader = () => {

  const isAuth1 = Number(localStorage.getItem('isAuth'));
  const authorizationContexts = useContext(AuthorizationContext)

  useEffect(() => {
    authorizationContexts?.setAuth(isAuth1)
  }, [authorizationContexts, isAuth1])

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const [checked, setChecked] = useState<boolean>(!!isAuth1);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.checked ?
      localStorage.setItem('isAuth', '1') :
      localStorage.setItem('isAuth', '0')
    setChecked(event.target.checked);
  };

  return (
    <AppBar
      className={cx('header')}
      position="fixed"
    >
      <Container maxWidth="lg"  >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Typography
            variant="h6"
            component={NavLink}
            to="/"
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              margin: 0,
            }}
          >
            INCORA
          </Typography>
          <Box  >
            <Typography variant='caption'>
              Off
            </Typography>
            <Switch
              checked={checked}
              color="success"
              onChange={handleChange}
            />
            <Typography variant='caption'>
              On
            </Typography>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};
export default AppHeader;
