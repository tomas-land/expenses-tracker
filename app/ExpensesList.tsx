import React from 'react'
import Grid from "@mui/material/Grid"
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';



const list = [
  {
    price: "88",
    name: "shop",
  },
  {
    price: "88",
    name: "shop",
  },
  {
    price: "88",
    name: "shop",
  },
  {
    price: "88",
    name: "shop",
  },
  {
    price: "88",
    name: "shop",
  },
  {
    price: "88",
    name: "shop",
  },
  {
    price: "88",
    name: "shop",
  },
  {
    price: "88",
    name: "shop",
  },
  {
    price: "88",
    name: "shop",
  },
  {
    price: "88",
    name: "shop",
  },
];

const ExpensesList = () => {

  return (
    <>
  
      <Box display={"flex"} justifyContent={"space-between"} pt={'1.5rem'}>
        <Typography fontSize={'0,5rem'} sx={{ color: 'textColorDarkGray', fontWeight: '700' }}>Paskutinės transakcijos</Typography>
        {/* <Typography variant='subtitle1' sx={{ color: 'textColorGray', fontWeight: '700' }}><Link href={'/'}>Daugiau..</Link></Typography> */}
      </Box>
      <Grid container rowGap={2} justifyContent={'center'} pt={'1rem'} >
        {list.map((item: any) => {
          return (
            <Grid item xs={12} key={item} display={'flex'} justifyContent={'space-between'} p={'1rem'} bgcolor={'white'} borderRadius={'1rem'} sx={{boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 12px'}}>
              <Box>icon</Box>
              <Box>{item.name}-{item.price}</Box>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default ExpensesList