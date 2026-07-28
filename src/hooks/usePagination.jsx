import { useState, useMemo } from 'react';

export const usePagination = (items = [], itemsPerPage = 6) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage) || 1;

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  }, [items, currentPage, itemsPerPage]);

  const goToPage = (pageNumber) => {
    const page = Math.max(1, Math.min(pageNumber, totalPages));
    setCurrentPage(page);
  };

  return {
    currentPage,
    totalPages,
    currentItems,
    goToPage,
    nextPage: () => goToPage(currentPage + 1),
    prevPage: () => goToPage(currentPage - 1),
  };
};
