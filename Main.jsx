import React from 'react';
import { Box, Typography } from '@mui/material';

// Import your icons statically
import icon1 from './assets/01d.png';
import icon2 from './assets/01n.png';
import icon3 from './assets/02d.png';
import icon4 from './assets/02n.png';
import icon5 from './assets/03n.png';
import icon6 from './assets/03d.png';
import icon7 from './assets/04d.png';
import icon8 from './assets/04n.png';
import icon9 from './assets/09d.png';
import icon10 from './assets/09n.png';
import icon11 from './assets/10d.png';
import icon12 from './assets/10n.png';
import icon13 from './assets/11d.png';
import icon14 from './assets/11n.png';
import icon15 from './assets/13d.png';
import icon16 from './assets/13n.png';
import icon17 from './assets/50d.png';
import icon18 from './assets/50n.png';



const Main = ({ city, country, icon, temp, weatherDescription }) => {
  const getIcon = () => {
    switch (icon) {
      case '01d':
        return icon1;
      case '01n':
        return icon2;
      case '02d':
        return icon3;
      case '02n':
        return icon4;
      case '03d':
        return icon6;
      case '03n':
        return icon5;
      case '04d':
        return icon7;
      case '04n':
        return icon8;
      case '09d':
        return icon9;
      case '09n':
        return icon10;
      case '10d':
        return icon11;
      case '10n':
        return icon12;
      case '11d':
        return icon13;
      case '11n':
        return icon14;
      case '13d':
        return icon15;
      case '13n':
        return icon16;
      case '50d':
        return icon17;
      case '50n':
        return icon18;
      default:
        return null;
    }
  };
  
  
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: '24px' }}>
      <Box>
        <Box sx={{ height: '240px' }} component='img' src={getIcon()} alt="Weather Icon" />
        <Typography sx={{ textAlign: 'center', fontSize: '32px', fontWeight: 'bold', color: '#3b3b3b' }}>
          {city}, {country}
        </Typography>
        <Typography sx={{ textAlign: 'center', fontWeight: '500', color: '#696969' }}>
          {Math.round(temp - 273.15)}.0 °C {weatherDescription} 
        </Typography>
      </Box>
    </Box>
  );
};

export default Main;
