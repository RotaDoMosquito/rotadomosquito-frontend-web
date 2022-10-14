import { ChakraProvider } from '@chakra-ui/react';

import Map from './Map';
import MenuLateral from './components/MenuLateral';

import 'leaflet/dist/leaflet.css';

export default function () {
  return (
    <ChakraProvider>
      <MenuLateral childComp={<Map />} />
    </ChakraProvider>
  );
}
