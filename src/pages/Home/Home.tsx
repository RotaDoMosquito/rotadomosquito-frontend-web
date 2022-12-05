import MenuLateral from '../../components/MenuLateral';
import Map from '../../components/Map';
import useLogic from './Home.logic';

export default function Home() {
    const { data, isDataAvailable, inputRef, handleClickSearch, isFindingData, isFetching, error } = useLogic();

    return (
        <MenuLateral
            isDataAvailable={isDataAvailable}
            inputRef={inputRef}
            handleClickSearch={handleClickSearch}
            isFindingData={isFindingData}
            isFetching={isFetching}
        >
            <Map isFetching={isFetching} error={error} data={data} />
        </MenuLateral>
    );
}
