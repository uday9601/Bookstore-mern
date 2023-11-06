import React, { useState } from 'react'
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import {NavLink} from 'react-router-dom'

const Header = () => {
    let [value,setValue]=useState()
  return (
    <div>
        <AppBar position='sticky' sx={{backgroundColor:'#232F3D'}}>
            <Toolbar>
                <NavLink to={'/'}  >
                <Typography>
                <LibraryBooksIcon sx={{color:'white'}}/>
            </Typography>  
                </NavLink>
            
            <Tabs 
           sx={{ml:'auto'}}
            textColor='inherit' indicatorColor='secondary' value={value} onChange={(e,val)=>setValue(val)}>
                <Tab LinkComponent={NavLink} to='/add' label="AddProduct"/>
                <Tab LinkComponent={NavLink} to='/books' label="books"/>
                <Tab LinkComponent={NavLink} to='/aboutus' label="AboutUs"/>
            </Tabs>
            </Toolbar>
            
        </AppBar>
    </div>
  )
}

export default Header