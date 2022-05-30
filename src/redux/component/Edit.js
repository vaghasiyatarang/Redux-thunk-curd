import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { Link, useLocation } from 'react-router-dom';
import ExitToAppSharpIcon from '@mui/icons-material/ExitToAppSharp';
import { useDispatch } from 'react-redux';
import editAction from '../actions/editAction';


const Edit = () => {
  const location = useLocation()
  const editData = location.state;

  const dispatch = useDispatch()
  const [data, setData] = useState(editData)
  console.log(data, "---------  data");

  // console.log(data);
  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const submit = (e) => {
    e.preventDefault()

    dispatch(editAction(data))
  }

  return (
    <>

      


      <div className='maindiv'>
        <form className='App' onSubmit={submit}>
          <label>Name : <input type="text" value={data.name} name="name" onChange={(e) => handleInput(e)} /></label><br /><br />
          <label>Email : <input type="text" value={data.email} name="email" onChange={(e) => handleInput(e)} /></label><br /><br />
          <label>Phone : <input type="text" value={data.phone} name="phone" onChange={(e) => handleInput(e)} /></label><br /><br />

          <input className='submit' type="submit" value="Submit" />
        </form>

      </div>


      <div style={{ textAlign: "center" }}>
        <Link to="/back" style={{ textDecoration: "none", color: "secondary" }}>
          <Button variant="outlined" size="medium" color="warning" endIcon={<ExitToAppSharpIcon />} >
            GO BACK
          </Button>
        </Link>
      </div>

    </>
  )
}

export default Edit



