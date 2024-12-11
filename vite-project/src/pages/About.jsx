import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
        <Box 
        sx={{
          my:15,
          textAlign:'center',
          p:2,
          "& h4":{
            fontWeight:'bold',
            my:2,
            fontSize: '2rem'
          },
          "& p":{
            textAlign:'justify'
          },
          "@media (max-width600px)":{
            mt:0,
            "& h4 ":{
              fontSize:'1.5rem',
            }
          }
        }}>
          <Typography variant='h4'>
            Welcome To My Resturant
            </Typography>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente ex, illum voluptas repellat nam aspernatur cumque fugiat, soluta dolores nisi tempora nihil laborum, vel in possimus aliquid. Dolorem obcaecati ratione, laudantium perspiciatis voluptate labore dignissimos magni sint, libero ullam quo alias assumenda consequatur cupiditate sequi magnam error, neque quae a reprehenderit corrupti odit nihil tenetur? Fugiat ex alias quaerat quidem dolores! Temporibus dolores vitae id velit alias laborum recusandae reiciendis laboriosam omnis rem atque totam doloremque, sit voluptates necessitatibus quibusdam aliquam fuga qui consectetur. Laborum aliquid ullam dignissimos perferendis sunt consequatur laboriosam praesentium dolores numquam velit optio recusandae, corrupti voluptatem.
              </p>
              <br/>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem laboriosam dolorem, sit sequi aperiam animi facere nam impedit nemo excepturi atque modi enim ratione quos, explicabo esse nostrum? Natus, minima libero excepturi dolore fugiat ipsam tempore possimus ea iste neque praesentium unde doloremque placeat pariatur reprehenderit suscipit nostrum soluta vitae ratione quidem fugit aliquid dicta inventore eligendi. Necessitatibus illo reiciendis distinctio consectetur deserunt hic fuga, illum nisi ipsam atque est aut deleniti veniam, at sequi! Enim illo dolore assumenda laboriosam eligendi exercitationem, rerum distinctio commodi, eum molestias mollitia consequuntur. Laboriosam, obcaecati? Tempora eaque rem laudantium, non officia impedit reprehenderit? Blanditiis?
              </p>
        </Box>
    </Layout>
  )
}

export default About