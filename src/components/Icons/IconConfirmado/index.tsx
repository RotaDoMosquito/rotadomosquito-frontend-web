import { CircleMarker, Popup } from 'react-leaflet';
import { PositionType } from '../../../types/map';

const fillBlueOptions = { fillColor: 'blue' };

export default function IconConfirmado({ position }: PositionType) {
  return (
    <CircleMarker className="" center={position} pathOptions={fillBlueOptions} radius={20}>
      <Popup>Casos confirmados</Popup>
    </CircleMarker>
  );
}
