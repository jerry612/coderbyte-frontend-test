import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Switch from 'react-ios-switch'
import LockIcon from '@material-ui/icons/Lock'
import LockOpenIcon from '@material-ui/icons/LockOpen'

import './index.scss'

function UserCard({ userData }) {


  return (
    <div class="user-card">

      <div class="user-card__avatar-container">
        <Avatar>H</Avatar>
      </div>
      <div class="user-card__middle-column">
        <div class="title">
          {userData?.attributes?.name}
        </div>
        <div class="email">
          {userData?.attributes?.email}
        </div>
        <div class="start-end">
          {new Date(userData?.attributes?.starts_at).toDateString()} ~ {new Date(userData?.attributes?.ends_at).toDateString()}
        </div>
      </div>
      <div class="user-card__status">
        <label>{userData?.attributes?.status}</label>
      </div>
    </div>
  )

}

export default UserCard