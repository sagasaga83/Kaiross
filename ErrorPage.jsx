import React from 'react';
import Undefined from './assets/undefined.png'; 
import { Box, Typography } from '@mui/material';

const ErrorPage = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '70px' }}>
        <Box>
          <Box
            sx={{
              height: '240px',
              width: '240px', // Adjust width to maintain aspect ratio
              margin: 'auto', // Center the image
              paddingLeft: '160px',
            }}
            component='img'
            src={Undefined}
            alt="City Not Found" // Provide a meaningful alt text
          />
          <Typography sx={{ mt: '12px', textAlign: 'center', fontSize: '32px', fontWeight: 'bold', color: '#3b3b3b' }}>
            Garchu!! We can't find that city. Please input a valid one.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ErrorPage;
