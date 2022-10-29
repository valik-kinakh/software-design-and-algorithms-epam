import { useState, FC, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';

import styles from './Filters.module.scss';

interface FiltersProps {
  store?: {};
  updateStore?: (val) => void;
}

// OR

//interface FiltersProps {
//  selected?: {};
//  updateSelected?: (val) => void;
//}

// OR store can be global

const OPTIONS = [
  {
    title: 'Without posts',
    value: 1,
  },
  {
    title: 'More than 100 posts',
    value: 100,
  },
];

export const Filters: FC<FiltersProps> = ({ updateStore }) => {
  const [selectedFilter, setSelectedFilter] = useState<number[]>([]);

  useEffect(() => {
    updateStore(prevValue => ({
      ...prevValue,
      selectedFilter,
    }));
  }, [selectedFilter]);

  const onChange = ({ title, value }) => {
    console.log(value); // for debugging

    let updatedFilters;

    if (selectedFilter.find(filter => filter === value)) {
      updatedFilters = selectedFilter.filter(filter => filter !== value);
    } else {
      updatedFilters = [...selectedFilter, value];
    }

    setSelectedFilter(updatedFilters);
  };

  return (
    <div className={styles.group}>
      <div className={styles.title}>Filter by posts</div>
      <ul className={styles.list}>
        {OPTIONS.map(option => (
          <li
            value={option.value}
            key={option.value}
            onClick={() => onChange(option)}
          >
            <Checkbox
              checked={!!selectedFilter.find(filter => filter === option.value)}
              value={option.value}
              size="small"
              color="primary"
              onChange={() => onChange(option)}
            />{' '}
            {option.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
