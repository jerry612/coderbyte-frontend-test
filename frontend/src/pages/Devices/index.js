import React from 'react'
import DeviceCard from '../../components/DeviceCard'
import { connect } from 'react-redux';
import { lockChanged } from '../../redux/actions';

function DeviceList({ deviceList, lockChanged }) {

  const handleLockChange = (index) => {
    lockChanged(index)
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
      {
        deviceList && deviceList.map((device, index) => {
          return (
            <>
              <DeviceCard deviceData={device} key={index} lockChanged={() => handleLockChange(index)} />
            </>
          )
        })
      }

    </div>
  )
}

const mapStateToProps = state => ({
  deviceList: state.deviceList
})

const mapDispatchToProps = {
  lockChanged
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceList);