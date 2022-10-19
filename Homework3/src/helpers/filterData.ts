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

const matchSearch = (row: Row, searchedValue: string) => {
  if (!searchedValue) {
    return false;
  }

  const { username, name, country } = row;
  const searchedValueLower = searchedValue.toLowerCase();

  return (
    username.toLowerCase().includes(searchedValueLower) ||
    name.toLowerCase().includes(searchedValueLower) ||
    country.toLowerCase().includes(searchedValueLower)
  );
};

const filterData = (
  selectedFilter: number[],
  data: Row[],
  searchedValue: string,
  withFilter: boolean = false
) => {
  const filterData = data.filter(
    row =>
      withFilter ||
      selectedFilterValue(row, selectedFilter) ||
      matchSearch(row, searchedValue)
  );
  return filterData;
};

export default filterData;
