import { CircleMarker, Popup } from 'react-leaflet';
import { PositionType } from '../../../types/map';

const redOptions = { color: 'red' };

export default function IconNaoConfirmado({ position }: PositionType) {
  return (
    <CircleMarker center={position} pathOptions={redOptions} radius={20}>
      <Popup>Casos não confirmados</Popup>
    </CircleMarker>
  );
}
