import { useState } from 'react';

interface usePaginationResult {
  page: number;
  nexPage: () => void;
  prevPage: () => void;
  setActivePage: (page: number) => void;
}

export const usePagination = (initialPage: number): usePaginationResult => {
  const [page, setPage] = useState<number>(initialPage);

  const nexPage = (): void => {
    setPage(prev => prev + 1);
  }
  const prevPage = (): void => {
    setPage(prev => prev - 1);
  };
  const setActivePage = (page: number): void => {
    setPage(page)
  }

  return {
    page,
    nexPage,
    prevPage,
    setActivePage,
  };
};
