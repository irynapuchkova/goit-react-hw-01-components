import PropTypes from 'prop-types';
import defaultImg from '../Profile_comp/default-user.jpg';

console.log(defaultImg);

export default function  Profile(props){
  const { name, tag, location, avatar = defaultImg, followers, views, likes } =  props;
  return (
    <div class="profile">
      <div class="description">
        <img
          src={avatar}
          alt={name}
          class="avatar"
        />
        <p class="name">{name}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>);
}


Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
}

console.dir(Profile);

