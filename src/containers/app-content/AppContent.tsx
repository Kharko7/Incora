import classNames from 'classnames/bind';
import AppHeader from '../app-header/AppHeader'
import AppMain from '../app-main/AppMain';
import Footer from '../footer/Footer'
import SideBar from '../side-bar/SideBar';
import styles from './appContent.module.scss'
import { Box } from '@mui/material'
import { AuthorizationContextProvider } from '../../context/authorizationContext';

const cx = classNames.bind(styles);

const AppContent: React.FunctionComponent = () => {

  return (
    <AuthorizationContextProvider >
      <Box className={cx('content')}>
        <AppHeader />
        <SideBar />
        <AppMain />
        <Footer />
      </Box>
    </AuthorizationContextProvider>
  )
}

export default AppContent
