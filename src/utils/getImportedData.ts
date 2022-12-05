import { MarkProps } from '../Map';
import importer from '../services/importer';

export interface DataResponse {
    dsLatitude: string;
    dsLongitude: string;
    dsCidade: string;
    listDados: ListDado[];
}

export interface ListDado {
    idDado: number;
    fgSituacao: number;
    dsLatitude?: string;
    dsLongitude?: string;
    dtOcorrencia: string;
}

export default function getImportedData(cidade: string) {
    return async () => {
        const {
            data: { listDados },
        } = await importer.get<DataResponse>('/dados', {
            params: {
                cidade,
            },
        });

        const marcadoresProps = listDados
            .map(({ dsLatitude, dsLongitude, idDado, fgSituacao }) => {
                if (dsLatitude === null && dsLongitude === null) {
                    return null;
                }

                const iconPosition = {
                    lat: Number(dsLatitude),
                    lng: Number(dsLongitude),
                };

                return {
                    key: idDado,
                    situacao: fgSituacao,
                    position: iconPosition,
                };
            })
            .filter(v => !!v) as MarkProps[];

        return marcadoresProps;
    };
}
