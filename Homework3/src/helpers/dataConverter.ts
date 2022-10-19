import { Account, Image, User } from '../../types';
import { Row } from '../components';

const convertUserInfo = (user: User) => {
  return {
    username: user.username,
    name: user.name,
    country: user.country,
  };
};

const convertAccountInfo = (account: Account) => {
  const lastPayment = account.payments[account.payments.length - 1];
  const totalSum = lastPayment?.totalSum ?? 0;
  return {
    lastPayments: totalSum,
    posts: account.posts,
  };
};

const convertImageInfo = (image: Image) => {
  return {
    avatar: image.url,
  };
};

const dataConverter = (
  users: User[],
  accounts: Account[],
  images: Image[]
): Row[] => {
  const rows = users.map((user, index): Row => {
    const { lastPayments, posts } = convertAccountInfo(accounts[index]);
    const { avatar } = convertImageInfo(images[index]);
    const { username, name, country } = convertUserInfo(user);

    return {
      lastPayments,
      posts,
      avatar,
      username,
      name,
      country,
    };
  });

  return rows;
};

export default dataConverter;
