import React from 'react'
import UserCard from '../../components/UserCard'
import { connect } from 'react-redux';

function UserList({ userList }) {

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
      {
        userList && userList.map((user, index) => {
          return (
            <UserCard userData={user} key={index} />
          )
        })
      }

    </div>
  )
}

const mapStateToProps = state => ({
  userList: state.userList
})


export default connect(mapStateToProps, null)(UserList);