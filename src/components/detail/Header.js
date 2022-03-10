import React from 'react';
import { Box, Typography } from '@mui/material';

const Header = ({ selectD, selectM, selectY }) => {
    
    return(

        <Box 
            component = "div" 
            sx={{
                marginTop: 8,
                //backgroundColor: 'primary.main',
                alignItems: 'center',
                borderBottom: 2,
                borderColor: 'text.disabled'
            }}
        >
            <Typography variant="h2" gutterBottom component="div">
                {selectY}年　{selectM}月 {selectD}日
            </Typography>
            
        </Box>
    );
};

export default Header;