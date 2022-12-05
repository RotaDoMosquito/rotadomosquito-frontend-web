import MenuLateral from '../../components/MenuLateral';
import Map from '../../components/Map';
import useLogic from './Home.logic';

export default function Home() {
    const { data, isDataAvailable, inputRef, handleClickSearch, isFindingData, isFetching, isLoading, error } =
        useLogic();

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
