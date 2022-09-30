import { useState } from 'react';
import styles from './App.module.scss';
import Pagination from './componetnts/pagination/Pagination';
import classNames from 'classnames/bind';
import paginationStyles from '../src/styles/custom/customPagination.module.scss'

const cx = classNames.bind(styles);
const paginationClassNames = classNames.bind(paginationStyles);

function App() {
  const [activePage, setActivePage] = useState<number>(1);

  const onChangePage = (newPage: number): void => {
    setActivePage(newPage);
  };

  return (
    <div className={cx('container')}>
      <Pagination
        activePage={activePage}
        totalItems={100}
        perPage={10}
        //classes = {{btn:paginationClassNames('btn') , activeBtn: paginationClassNames('activeBtn')}}
        onChangePage={onChangePage} />
    </div>
  );
};

export default App;
