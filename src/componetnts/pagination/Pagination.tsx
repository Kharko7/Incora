import styles from './pagination.module.scss'
import classNames from 'classnames/bind';
import { getArrayNumbersFromNumber, splitItemsOnArraysInArray } from '../../utils/pagination';
import { usePagination } from '../../hooks/usePagination';

interface PaginationProps {
  totalItems: number;
  perPage: number;
  withActions?: boolean;
  classes?: {
    btn?: string;
    activeBtn?: string;
  };
};

const cx = classNames.bind(styles);
const defaultBtnStyles = {
  btn: 'button',
  activeBtn: 'activeButton'
}

const Pagination = ({
  totalItems,
  perPage,
  withActions = true,
  classes = defaultBtnStyles,
}: PaginationProps) => {

  const { page, nexPage, prevPage, setActivePage } = usePagination(1)
  const quantityOfPages: number = Math.ceil(totalItems / perPage);
  const quantityButtonsShow: number = 5;
  const arrayDigits: number[] = getArrayNumbersFromNumber(quantityOfPages);
  const arrayItems: number[][] = splitItemsOnArraysInArray(arrayDigits, quantityButtonsShow);
  const activePageIndex: number = arrayItems.findIndex((array) => array.includes(page));

  const btnClass = (isActive: boolean) => {
    let buttonClass: string;
    let activebutton: string;
    classes.btn === 'button' || classes.btn === undefined ? buttonClass = cx(defaultBtnStyles.btn) : buttonClass = classes.btn;
    classes.activeBtn === 'activeButton' || classes.activeBtn === undefined ? activebutton = cx(defaultBtnStyles.activeBtn) : activebutton = classes.activeBtn;

    return isActive ? `${buttonClass} ${activebutton}` : buttonClass;
  };

  return (
    <nav className={cx('pagination')}>
      {withActions && <button
        onClick={prevPage}
        disabled={page === 1}
        className={cx((page === 1) ? 'navigate' : ['navigate', 'active'])}
      >
        Previous
      </button>}
      <ul className={cx('paginationItem')} >
        {arrayItems[activePageIndex].map((pages) => (
          <li key={pages}>
            <button
              className={btnClass(page === pages)}
              onClick={() => setActivePage(pages)}
            >
              {pages}
            </button>
          </li>
        ))}
      </ul>
      {withActions && <button
        onClick={nexPage}
        disabled={page === quantityOfPages}
        className={cx((page === quantityOfPages) ? 'navigate' : ['navigate', 'active'])}
      >
        Next
      </button>}
    </nav>
  );
};

export default Pagination;