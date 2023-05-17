import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          isOnline={isOnline}
          avatar={avatar}
          name={name}
          key={id}
        />
      ))}
    </ul>
);

FriendList.propTypes = {
  friends: PropTypes.array,
};