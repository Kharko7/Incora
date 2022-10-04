import styles from './settings.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Settings = () => {

  return (
    <div className={cx('wrapper')}>
      Settings
    </div>
  );
};

export default Settings;
