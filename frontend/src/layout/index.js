import React from 'react'
import { SegmentedControl } from 'segmented-control'
import { useHistory } from "react-router-dom"
import './index.scss'

function Layout({ children }) {
  const history = useHistory();

  const handlePageChange = (value) => {
    if (history)
      history.push(value === 'Devices' ? '/devices' : '/users' );
  }

  return (
    <>
      <div class="main-layout">
        <SegmentedControl
          name="page-control"
          options={[
            { label: "Devices", value: "Devices", default: true  },
            { label: "Users", value: "Users"},
          ]}
          setValue={newValue => handlePageChange(newValue)}
          style={{ width: '100%', color: '#ab47bc' }} // purple400
        />
        <div>

          { children }
        </div>
      </div>

    </>
  )
}

export default Layout