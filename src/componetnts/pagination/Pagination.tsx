import styles from './pagination.module.scss'
import classNames from 'classnames/bind';
import { getArrayNumbersFromNumber, splitItemsOnArraysInArray } from '../../utils/pagination';

interface PaginationProps {
  activePage: number;
  totalItems: number;
  perPage: number;
  withActions?: boolean;
  classes?: {
    btn?: string;
    activeBtn?: string;
  };
  onChangePage: (newPage: number) => void;
};

const cx = classNames.bind(styles);
const defaultBtnStyles = {
  btn: 'button',
  activeBtn: 'activeButton'
}

const Pagination = ({
  activePage,
  totalItems,
  perPage,
  withActions = true,
  classes = defaultBtnStyles,
  onChangePage,
}: PaginationProps) => {
  const quantityOfPages: number = Math.ceil(totalItems / perPage);
  const quantityButtonsShow: number = 3;
  const arrayDigits: number[] = getArrayNumbersFromNumber(quantityOfPages);
  const arrayItems: number[][] = splitItemsOnArraysInArray(arrayDigits, quantityButtonsShow);
  const activePageIndex: number = arrayItems.findIndex((array) => array.includes(activePage));

  const handlePreviousPage = (): void => {
    if (activePage !== 1) {
      onChangePage(activePage - 1);
    };
  }
  const handleNextPage = (): void => {
    if (activePage !== quantityOfPages) {
      onChangePage(activePage + 1);
    };
  };

  const btnClass = (isActive: boolean) => {
    let buttonClass: string;
    let activebutton: string;
    classes.btn === 'button' || classes.btn === undefined ? buttonClass = cx(defaultBtnStyles.btn) : buttonClass = classes.btn;
    classes.activeBtn === 'activeButton' || classes.activeBtn === undefined ? activebutton = cx(defaultBtnStyles.activeBtn) : activebutton = classes.activeBtn;

    return isActive ? `${buttonClass} ${activebutton}` : buttonClass;
  };

  return (
    <nav className={cx('pagination')}>
      <button
        onClick={handlePreviousPage}
        style={withActions ? {} : { display: 'none' }}
        className={cx((activePage === 1) ? 'navigate' : ['navigate', 'active'])}
      >
        Previous
      </button>
      <ul className={cx('paginationItem')} >
        {arrayItems[activePageIndex].map((page) => (
          <li key={page}>
            <button
              className={btnClass(activePage === page)}
              onClick={() => onChangePage(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={handleNextPage}
        style={withActions ? {} : { display: 'none' }}
        className={cx((activePage === quantityOfPages) ? 'navigate' : ['navigate', 'active'])}
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;