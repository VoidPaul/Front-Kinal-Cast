import React from 'react'
import PropTypes from 'prop-types'

export const ChannelDescription = ({
  username,
  title,
  description,
  channelId,
  getChannels,
}) => {
  return (
    <div className='channel-description-container'>
      <span className='channel-description-title'>{username}</span>
      <span className='channel-description-title'>{title}</span>
      <div className='channel-description-box'>
        <span className='channel-description'>{description}</span>
      </div>
    </div>
  );
};

ChannelDescription.propTypes = {
  username: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  channelId: PropTypes.string.isRequired,
  getChannels: PropTypes.func.isRequired
}
