import styles from './setSettings.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SetSettings = () => {

  return (
    <div className={cx('wrapper')}>
      You must log in for settings
    </div>
  );
};

export default SetSettings;
