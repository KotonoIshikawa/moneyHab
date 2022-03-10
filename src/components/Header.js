import { Box, Typography } from '@mui/material';
import React from 'react';

const Header = ({ currentYear, currentMonth, currentDay }) => {
    return(
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
            }}
        >
            <Typography component="h4" variant="h4">
                {currentYear}年{currentMonth}月{currentDay}日
            </Typography>
                
            
       
        </Box>

    );
};
export default Header;