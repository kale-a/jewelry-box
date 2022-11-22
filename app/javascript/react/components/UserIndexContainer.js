import React, { useState, useEffect } from 'react'
import UserIndex from './UserIndex'

const UserIndexContainer = (props) => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    try {
      const response = await fetch("/api/v1/users")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      setUsers(responseBody.users)

    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="margin-padding">
      <h4 className="page-font">Get some inspiration!</h4>
      <UserIndex />
    </div>
  )
}

export default UserIndexContainer