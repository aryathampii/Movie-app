import { AppBar, StepLabel, Toolbar } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate=useNavigate();
  return (
    <div>
        <AppBar style={{backgroundColor:'cadetblue'}}>
            <Toolbar>
                <StepLabel style={{paddingLeft:'100px'}}><b>Movie Management App</b></StepLabel>
                <StepLabel style={{paddingLeft:'900px'}} onClick={()=>navigate('/')}>Home</StepLabel>&nbsp;&nbsp;&nbsp;
                <StepLabel onClick={()=>navigate('/add')}>Add Movie</StepLabel>&nbsp;&nbsp;&nbsp;
                <StepLabel onClick={()=>navigate('/about')}>About</StepLabel>
            </Toolbar>
        </AppBar>
    </div>
  )
}
export default Header