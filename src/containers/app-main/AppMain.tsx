import { Box } from '@mui/system'
import Routes from '../../routes/routes'
import styles from './appMain.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const AppMain = () => {

  return (
    <Box className={cx('appMain')}>
      <Routes />
    </Box>
  )
}

export default AppMain