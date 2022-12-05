import { useCallback, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import MenuLateral from '../components/MenuLateral';
import Map from '../components/Map';
import getImportedData from '../utils/getImportedData';

export default function Home() {
    const [isFindingData, setIsFindingData] = useState(false);
    const [cidade, setCidade] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClickSearch = useCallback(() => {
        setIsFindingData(true);
        setCidade(inputRef.current?.value || '');
    }, []);

    const onSettled = useCallback(() => {
        setIsFindingData(false);
    }, [setIsFindingData]);

    const { isLoading, isFetching, error, data } = useQuery(['importedData'], getImportedData(cidade), {
        enabled: isFindingData,
        onSettled,
    });

    const isDataAvailable = !!data;

    return (
        <MenuLateral
            isDataAvailable={isDataAvailable}
            inputRef={inputRef}
            handleClickSearch={handleClickSearch}
            isFindingData={isFindingData}
        >
            <Map isFetching={isFetching} isLoading={isLoading} error={error} data={data} />
        </MenuLateral>
    );
}
