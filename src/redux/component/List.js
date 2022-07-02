import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { userAction } from '../actions/userAction'
import ListData from './ListData'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const List = () => {

  const dispatch = useDispatch()

  const userList = useSelector(state => state.userList)

  const { loading, error, user } = userList

  useEffect(() => {
    dispatch(userAction())
  },[dispatch])

  return (
    <>
      

      {loading ? <Box sx={{ display: 'flex' }}><CircularProgress /></Box> : error ? <h3>{error}</h3> :
        <ListData user={user} />
      }

    </>
  )
}

export default List