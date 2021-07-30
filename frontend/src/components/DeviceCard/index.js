import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Switch from 'react-ios-switch'
import LockIcon from '@material-ui/icons/Lock'
import LockOpenIcon from '@material-ui/icons/LockOpen'

import './index.scss'

function DeviceCard({ deviceData, lockChanged }) {


  return (
    <div class="device-card">

      <div class="device-card__avatar-container">
        <Avatar>H</Avatar>
      </div>
      <div class="device-card__middle-column">
        <div class="title">
          {deviceData?.attributes?.name}
        </div>
        <div class="model-number">
          {deviceData?.attributes?.model_number}
        </div>
        <div class="switch">
          <Switch
            checked={deviceData?.attributes?.state === 'locked'}
            onChange={lockChanged}
          />
        </div>
      </div>
      <div class="device-card__lock-status">
        {
          deviceData?.attributes?.state === 'locked' ?
          <>
            <LockIcon />
            <label>Locked</label>
          </>
          :
          <>
            <LockOpenIcon />
            <label>Unlocked</label>
          </>
        }

      </div>
    </div>
  )

}

export default DeviceCard