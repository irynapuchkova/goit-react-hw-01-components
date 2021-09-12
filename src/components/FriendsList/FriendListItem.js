import PropTypes from 'prop-types';
import { FaChrome } from 'react-icons/fa';

import s from './FrienList.module.css';
import defaultImg from '../Profile/default-user2.png';

export default function FriendListItem({ id, avatar, name, isOnline }) {
  if (avatar !== true) {
    avatar = defaultImg;
  }

  return (
    <div className={s.friend}>
      <span className={s.status}>
        <FaChrome color={isOnline === true ? 'green' : 'red'} />
      </span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
