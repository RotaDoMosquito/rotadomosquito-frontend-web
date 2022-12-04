import { ChakraProvider } from '@chakra-ui/react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import 'leaflet/dist/leaflet.css';
import Home from './pages/Home';

const queryClient = new QueryClient();

export default function () {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </QueryClientProvider>
  );
}
