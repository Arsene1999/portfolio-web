import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/buttons/color-mode-switcher/ColorModeSwitcher.tsx';
import { Logo } from './Logo';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minW="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
