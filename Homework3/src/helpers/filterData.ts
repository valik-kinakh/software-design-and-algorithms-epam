import { Row } from '../components';

const selectedFilterValue = (row: Row, selectedFilter: number[]) => {
  if (selectedFilter.includes(1) && selectedFilter.includes(100)) {
    return row.posts < 1 || row.posts >= 100;
  } else if (selectedFilter.includes(1)) {
    return row.posts < 1;
  } else if (selectedFilter.includes(100)) {
    return row.posts >= 100;
  }
  return false;
};

const filterData = (selectedFilter: number[], data: Row[]) => {
  const filterData = data.filter(row =>
    selectedFilterValue(row, selectedFilter)
  );
  return filterData;
};

export default filterData;
