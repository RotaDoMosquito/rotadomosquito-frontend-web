import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';

import { Text } from '@chakra-ui/react';

type PositionType = {
  position: {
    lat: number;
    lng: number;
  };
};

const redOptions = { color: 'red' };
const fillBlueOptions = { fillColor: 'blue' };

function IconConfirmado({ position }: PositionType) {
  return (
    <CircleMarker className="" center={position} pathOptions={fillBlueOptions} radius={20}>
      <Popup>Casos confirmados</Popup>
    </CircleMarker>
  );
}

function IconNaoConfirmado({ position }: PositionType) {
  return (
    <CircleMarker center={position} pathOptions={redOptions} radius={20}>
      <Popup>Casos não confirmados</Popup>
    </CircleMarker>
  );
}

export default function Map() {
  const [marks, setMarks] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const marcadores = [] as JSX.Element[];

    async function buscarCasos() {
      const request = await fetch('http://localhost:8080/dados?cidade=Dois Vizinhos')
        .then(r => r.json())
        .then(jsonBody => {
          console.log(`[DT_OCORRENCIA] ${jsonBody.listDados[0].dtOcorrencia}`);

          const length = parseInt(jsonBody.listDados.length);

          for (let i = 0; i < length; i++) {
            const situacao = parseInt(jsonBody.listDados[i].fgSituacao);

            if (jsonBody.listDados[i].dsLatitude != null && jsonBody.listDados[i].dsLongitude != null) {
              const lat = jsonBody.listDados[i].dsLatitude as number;
              const lng = jsonBody.listDados[i].dsLongitude as number;

              const position = {
                lat,
                lng,
              };

              marcadores.push(
                situacao === 1 ? <IconConfirmado position={position} /> : <IconNaoConfirmado position={position} />,
              );
            }
          }
        });
    }

    buscarCasos();
    setMarks(marcadores);
  }, []);

  const position = { lat: -25.7511, lng: -53.0606 };

  return marks ? (
    <MapContainer center={position} zoom={13.5} scrollWheelZoom={false} style={{ height: '100vh', width: '100wh' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <>
        {/* TODO: Renderizar marcadores */}
        {marks}
      </>
    </MapContainer>
  ) : (
    <Text>Carregando valores...</Text>
  );
}
