import React, { useState } from 'react'
import ExitToAppSharpIcon from '@mui/icons-material/ExitToAppSharp';
import Button from '@mui/material/Button';
import  {Link}  from 'react-router-dom';
import addAction from '../actions/addAction';
import { useDispatch } from 'react-redux';

const Add = () => {

    const dispatch = useDispatch();

    const [add,setAdd] = useState({
        name:"",
        email:"",
        phone:""
    })

    const handleInput = (e) =>{
        setAdd({...add,[e.target.name]:e.target.value})
        // console.log(add,"--------add");
        
    }

    const submit =(e)=>{
        e.preventDefault()
        dispatch(addAction(add))
    }
    return (
        <>
            
            <div className='maindiv'>
                <form className='App' onSubmit={submit} >
                    <label>Name : <input type="text" value={add.name} onChange={(e) => handleInput(e)} name="name" /></label><br /><br />
                    <label>Email : <input type="text" value={add.email} onChange={(e) => handleInput(e)} name="email" /></label><br /><br />
                    <label>Phone : <input type="text" value={add.phone} onChange={(e) => handleInput(e)} name="phone" /></label><br /><br />

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

export default Add