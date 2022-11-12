import { Avatar } from '@mui/material'
import React from 'react'
import './ChannelRow.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function ChannelRow({image, channel, subs, noOfVideos, description, verified}) {
  return (
    <div className="channelRow">
        <Avatar 
            className="channelRow_logo" 
            alt={channel} 
            src={image} 
        />
        <div className="channelRow_text">
            <h4>
                {channel} {verified && <CheckCircleIcon/>}
            </h4>
            <p>
                {subs} subscribers ● {noOfVideos} videos
            </p>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ChannelRow