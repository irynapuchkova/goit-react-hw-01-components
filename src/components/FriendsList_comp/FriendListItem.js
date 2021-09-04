import PropTypes from 'prop-types';
import { FaChrome } from 'react-icons/fa';

import s from './FrienList.module.css';
import defaultImg from '../Profile_comp/default-user2.png';
// import { directive } from '@babel/types';

export default function FriendListItem({ id, avatar, name, isOnline }) {
  // console.log(avatar);
  // const noAvatar = " " || undefined || null || false;
  // if (avatar !== true) {
  //   avatar = defaultImg;
  // }
  // console.log(avatar);

  return (
    <div className={s.friend} key={id}>
      {/* <li className={s.friend} key={id}> */}
      <span className={s.status}>
        <FaChrome color={isOnline === true ? 'green' : 'red'} />
      </span>
      <img
        className={s.avatar}
        src={(avatar = undefined ? avatar : defaultImg)}
        alt={name}
        width="48"
      />
      <p className={s.name}>{name}</p>
      {/* </li> */}
    </div>
  );
}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
