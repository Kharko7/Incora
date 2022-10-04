import React, { useState, useContext, useEffect } from 'react';
import { Box, AppBar, Typography, Container, Switch } from '@mui/material';
import styles from './appHeader.module.scss'
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { AuthorizationContext } from '../../context/authorizationContext';

const cx = classNames.bind(styles);

const AppHeader = () => {

  const isAuth = Number(localStorage.getItem('isAuth'));
  const [checked, setChecked] = useState<boolean>(!!isAuth);
  const { setAuth } = useContext(AuthorizationContext);

  useEffect(() => {
    setAuth(isAuth)
  }, [setAuth, isAuth]);

  const handleChangeSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
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
              onChange={handleChangeSwitch}
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
