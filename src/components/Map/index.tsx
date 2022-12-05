import { MapContainer, TileLayer } from 'react-leaflet';

import { Text, Spinner } from '@chakra-ui/react';

import Icon from '../Icons';
import { PositionType } from '../../types/map';

const position = { lat: -25.7511, lng: -53.0606 };

export interface MarkProps extends PositionType {
    situacao: number;
}
interface Props {
    isFetching: boolean;
    error: unknown;
    data: MarkProps[] | undefined;
}

export default function Map({ isFetching, error, data }: Props) {
    if (isFetching) {
        return null;
    }

    if (error) {
        return <Text>Ops, algo deu errado!</Text>;
    }

    if (!data) {
        return <Text>Nenhum dado encontrado!</Text>;
    }

    return (
        <MapContainer center={position} zoom={13.5} scrollWheelZoom={false} style={{ height: '100vh', width: '100wh' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <>
                {/* TODO: Renderizar marcadores */}
                {data.map(markProp => (
                    <Icon {...markProp} />
                ))}
            </>
        </MapContainer>
    );
}
