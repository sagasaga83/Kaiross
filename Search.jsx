import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = ({ fetchWeather }) => {
  const [searchCity, setSearchCity] = useState('');

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        mt: '24px',
        paddingLeft: '10px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column', // Change to column for vertical centering
          alignItems: 'center', // Center vertically
          width: '65%',
        }}
      >
        <TextField
          sx={{
            width: '100%',
            '& label': { fontFamily: 'calibri', fontSize: 'bold', textAlign: 'justify' }, // Justify the label text
          }}
          label="Enter your location and search"
          autoComplete="off"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          variant="outlined"
          id="search-input"
        />
        <Button
          sx={{
            backgroundColor: 'none',
            boxShadow: 'none',
            borderRadius: '18px',
            mt: '12px', // Add margin-top to the button for spacing
          }}
          variant="contained"
          onClick={() => fetchWeather(searchCity)}
        >
          <SearchIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Search;
