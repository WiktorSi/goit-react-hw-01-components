import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ id, avatar, name, isOnline }) => (
    <li className={css.item} key={id}>
          <span
            className={`${css.status} ${isOnline ? css.active : css.nonActive}`}
          ></span>
          <img
            className={css.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{name}</p>
    </li>
);

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,  
};