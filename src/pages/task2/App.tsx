import { useState } from 'react';
import Pagination from '../../componetnts/pagination/Pagination';

const Task2 = () => {
  const [activePage, setActivePage] = useState<number>(1);

  const onChangePage = (newPage: number): void => {
    setActivePage(newPage);
  };

  return (
    <>
      <Pagination
        activePage={activePage}
        totalItems={100}
        perPage={10}
        onChangePage={onChangePage} />
    </>
  );
};

export default Task2;
