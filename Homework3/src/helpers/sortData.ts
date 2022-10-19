import { Row } from '../components';

const sortData = (rows: Row[], sort: string) => {
  if (sort === 'desc') {
    return rows.sort((row1, row2) => {
      return row2.lastPayments - row1.lastPayments;
    });
  }
  return rows.sort((row1, row2) => {
    return row1.lastPayments - row2.lastPayments;
  });
};

export default sortData;
