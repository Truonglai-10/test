import React from 'react'
import "./VideoCard.css"
import { Avatar } from '@mui/material'


function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="videoCard">
      <div>
        <img className="videoCard_thumbnail" src={image} alt="" />
      </div>
      <div className="videoCard_show">
        <div className="videoCard_info">
          <Avatar
            className="videoCard_avatar"
            src={channelImage}
            alt={channel}
          />
        </div>
        <div className="videoCard_text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} ● {timestamp}
          </p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard