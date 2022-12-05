import { useCallback, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import getImportedData from '../../utils/getImportedData';

export default function useLogic() {
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

    const { isFetching, error, data } = useQuery(['importedData'], getImportedData(cidade), {
        enabled: isFindingData,
        onSettled,
    });

    const isDataAvailable = !!data;

    return { data, isDataAvailable, inputRef, handleClickSearch, isFindingData, isFetching, error };
}
