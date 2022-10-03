import styles from './sideBar.module.scss'
import classNames from 'classnames/bind';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
import { config } from '../../configs';
import { ListItem } from '@material-ui/core';
import { List } from '@mui/material';

const cx = classNames.bind(styles);

const SideBar = () => {
  const { sideBarRouters } = config

  const navLinks = sideBarRouters.map(({ to, content }) => (
    <ListItem key={to}>
      <NavLink to={to}>{content} </NavLink>
    </ListItem>
  ))

  return (
    <Box className={cx('sideBar')}>
      <List className={cx('list')}>
        {navLinks}
      </List>
    </Box>
  );
};

export default SideBar;