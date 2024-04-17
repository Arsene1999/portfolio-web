import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import MainNavbar from './components/navbar/main/MainNavbar.tsx';
import { content } from './resources/main-nav-bar/mainNavbar.ts';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" position={'relative'}>
        <MainNavbar
          navBarData={content}
          // rightComponent={<ColorModeSwitcher />}
        />
        <Box id="home" height={'100vh'} backgroundColor={'green.50'}></Box>
        <Box id="about" height={'100vh'} backgroundColor={'green.200'}></Box>
        <Box
          id="experience"
          height={'100vh'}
          backgroundColor={'green.50'}
        ></Box>
        <Box id="my-works" height={'100vh'} backgroundColor={'green.200'}></Box>
        <Box id="contact" height={'100vh'} backgroundColor={'green.50'}></Box>
      </Box>
    </ChakraProvider>
  );
};

export default App;
