import React from 'react'
import { UserOutlined } from '@ant-design/icons'

import './avatar.css'

interface AvatarProps {
  url: string
  username: string
}

export const Avatar = ({ url, username }: AvatarProps): JSX.Element => {
  return (
    <div className='avatar'>
      {url ? (
        <img src={`${url}`} alt={`GitHub user's ${username} avatar`} />
      ) : (
        <UserOutlined />
      )}
    </div>
  )
}

export default Avatar
