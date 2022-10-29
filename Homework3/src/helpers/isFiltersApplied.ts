import { Store } from '../App';

const isFiltersApplied = (store: Store): boolean => {
  const { selectedFilter, searchedValue } = store;

  return !selectedFilter.length && !searchedValue;
};

export default isFiltersApplied;
