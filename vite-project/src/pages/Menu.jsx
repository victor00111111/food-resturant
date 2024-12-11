import React from 'react'
import Layout from '../components/Layout/Layout'
 import {MenuList} from '../../src/data/Data'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
const Menu = () => {
  return (
    <Layout>
      <Typography variant='h4' sx={{ my:5, ml:10,textAlign:"center", fontSize:"bolder","@media (max-width600px)":{
            mt:0,
            "& h4 ":{
              fontSize:'1.5rem',
            }
          },"& h4":{fontWeight:'bold', mb:2,  } }}>
            INTERNATIONAL DISHES
            </Typography>
         <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"center", }}>
          {MenuList.map(menu => (
              <Card sx={{maxWidth:"390px", display:"flex", m:2 }}>
               <CardActionArea>
                <CardMedia 
                sx={{minHeight: "400px"}} 
                component={'img'} 
                src={menu.image} 
                alt={menu.name}
                />
                <CardContent>
                  <Typography variant='h5' gutterBottom component={"div"}>
                    {menu.name}
                  </Typography>
                  <Typography variant='body'>{menu.description}</Typography>
                </CardContent>
               </CardActionArea>
              </Card>
            ))}
             </Box>
             <Typography variant='h4' sx={{ my:5, ml:10,textAlign:"center", fontSize:"bolder", "& h4":{fontWeight:'bold', mb:2, } }}>
            LOCAL DISHES 
            <p></p>
            </Typography>
            <div>
            <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"center", }}>
          {MenuList.map(menu => (
              <Card sx={{maxWidth:"390px", display:"flex", m:2 }}>
               <CardActionArea>
                <CardMedia 
                sx={{minHeight: "400px"}} 
                component={'img'} 
                src={menu.image} 
                alt={menu.name}
                />
                <CardContent>
                  <Typography variant='h5' gutterBottom component={"div"}>
                    {menu.name}
                  </Typography>
                  <Typography variant='body'>{menu.description}</Typography>
                </CardContent>
               </CardActionArea>
              </Card>
            ))}
             </Box>
            </div>
    </Layout>
  )
}

export default Menu