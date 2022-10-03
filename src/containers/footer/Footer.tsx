import styles from './footer.module.scss'
import classNames from 'classnames/bind';
import { Box, Typography } from '@mui/material';
import { config } from '../../configs';

const cx = classNames.bind(styles);

const Footer = () => {

  const { termOfUse, privacyPolicy, allRightsReserved } = config.footer

  return (
    <Box className={cx('footer')}>
      <Box className={cx('container')}>
        <Typography variant='caption'>
          {allRightsReserved}
        </Typography>
        <Box className={cx('terms')}>
          <Typography variant='caption'>
            {privacyPolicy}
          </Typography>
          <Typography variant='caption'>
            {termOfUse}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;