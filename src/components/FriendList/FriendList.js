import React from 'react';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => (
  <>
    {friends.length > 0 && (
      <ul className="friend-list">
        {friends.map(item => (
          <li key={item.id} className="item">
            <span className={item.isOnline ? 'status on' : 'status off'}></span>
            <img
              className="avatar"
              src={item.avatar}
              alt={item.name}
              width="48"
            />
            <p className="name">{item.name}</p>
          </li>
        ))}
      </ul>
    )}
  </>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendList;
