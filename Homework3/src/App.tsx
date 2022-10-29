import { FC } from 'react';
import { useState, useEffect } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';

import { Image, User, Account } from '../types';
import { Table, Filters, Sort, Search, Row } from './components';
import { getImages, getUsers, getAccounts } from './mocks/api';
// import rows from './mocks/rows.json';

import styles from './App.module.scss';
import dataConverter from './helpers/dataConverter';
import filterData from './helpers/filterData';
import sortData from './helpers/sortData';

// mockedData has to be replaced with parsed Promises’ data
// const mockedData: Row[] = rows.data;

export interface Store {
  selectedFilter: number[];
  sort: string;
  searchedValue: string;
}

export const App: FC = () => {
  const [data, setData] = useState<Row[]>([]);
  const [store, updateStore] = useState<Store>({
    selectedFilter: [],
    sort: 'desc',
    searchedValue: '',
  });

  useEffect(() => {
    // fetching data from API
    Promise.all([getImages(), getUsers(), getAccounts()]).then(
      ([images, users, accounts]: [Image[], User[], Account[]]) => {
        const { selectedFilter, sort, searchedValue } = store;
        const rows = dataConverter(users, accounts, images);

        const filtered = filterData(
          selectedFilter,
          rows,
          searchedValue,
          !store.selectedFilter.length
        );
        setData(sortData(filtered, sort));
      }
    );
  }, [store]);

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters updateStore={updateStore} />
            <Sort updateStore={updateStore} />
          </div>
          <Search updateStore={updateStore} />
        </div>
        {data && <Table rows={data} />}
      </div>
    </StyledEngineProvider>
  );
};
