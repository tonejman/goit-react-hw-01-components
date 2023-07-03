import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const isOnlineStatus = isOnline ? 'online' : 'offline';
  return (
    <li className={css.item}>
      <span className={css[isOnlineStatus]}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export const FriendList = ({ friends }) => (
  <ul className={css.friend_list}>
    {friends.map(el => (
      <FriendListItem
        key={el.id}
        avatar={el.avatar}
        name={el.name}
        isOnline={el.isOnline}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.array,
};
