import { ChakraProvider } from '@chakra-ui/react';
import Map from './Map';
import 'leaflet/dist/leaflet.css';

export default function () {
  return (
    <ChakraProvider>
      <Map />
    </ChakraProvider>
  );
}
