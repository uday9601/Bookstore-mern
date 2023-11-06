import React from 'react'
import {Box, Button, Typography} from '@mui/material'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Box>
<Button LinkComponent={Link} to='/books' style={{display:"flex",marginTop:"90px",padding:'100px'}}>
  <Typography>view all Books</Typography>
</Button>
      </Box>
    </div>
  )
}

export default Home