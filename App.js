// ... (other imports)

import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, createTheme, ThemeProvider } from '@mui/material';
import Search from './Search';  
import Main from './Main';  
import Widget from './Widget';  
import axios from 'axios';
import ErrorPage from './ErrorPage';  
import AsyncStorage from '@react-native-async-storage/async-storage';

const theme = createTheme({
  typography: {
    fontFamily: ['Poppins'],
  },
  palette: {
    primary: {
      main: '#DB5A42',
    },
    secondary: {
      main: '#DB5A42',
    },
  },
});

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const defaultCity = await AsyncStorage.getItem('city') || 'Iloilo';
      fetchWeather(defaultCity);
    };

    fetchData();
  }, []);

  const fetchWeather = async (city) => {
    setLoading(true);

    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=8370452805f200bc9bad722c3948a15d`);
      setWeatherData(response?.data);
      await AsyncStorage.setItem('city', response?.data?.name);
      setLoading(false);
      setError(false);
    } catch (error) {
      console.error(error);
      setError(true);
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            maxWidth: '550px',
            width: '100%',
            justifyContent: 'center',
            margin: 'auto',
            flexDirection: 'column',
          }}
        >
          <Search fetchWeather={fetchWeather} />
          {error ? (
            <ErrorPage />
          ) : (
            <>
              <Main
                city={weatherData?.name}
                country={weatherData?.sys?.country}
                icon={weatherData?.weather[0]?.icon}
                temp={weatherData?.main?.temp}
                weatherDescription={weatherData?.weather[0]?.description}
              />
              <Widget
                temp={weatherData?.main?.temp}
                feelsLike={weatherData?.main?.feels_like}
                humidity={weatherData?.main?.humidity}
                wind={weatherData?.wind?.speed}
              />
            </>
          )}
        </Box>
      )}
    </ThemeProvider>
  );
}

export default App;
