import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const Balance = ({IncItems,ExpItems}) => {

   const IncItemsAm = IncItems.map(item => item.Amount);
   const ExpItemsAm = ExpItems.map(item => item.Amount); 

   //合計算出用
   const reducer = (previousValue, currentValue) => previousValue + currentValue;


   const AllIncItems = IncItemsAm.reduce(reducer, 0);
   const AllExpItems = ExpItemsAm.reduce(reducer, 0);
   
   const zandaka = AllIncItems - AllExpItems;

   return(
      <Box
         sx={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               mx: 'auto'
         }}
      >
         <Grid container spacing={2}>
            <Grid item >
               <Typography component="h4" variant="h5">
                  残高
               </Typography>
            </Grid>
            
            <Grid item >
               <Typography component="h2" variant="h2">
                  {zandaka}円
               </Typography>
            </Grid>
         </Grid>

      </Box>
      
   );


};
export default Balance;