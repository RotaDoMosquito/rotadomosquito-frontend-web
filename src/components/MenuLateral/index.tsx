import { PropsWithChildren } from 'react';

import { IconButton, Image, Input, Spinner } from '@chakra-ui/react';
import { Box, Center, Flex, HStack, VStack } from '@chakra-ui/layout';

import { SearchIcon } from '@chakra-ui/icons';
import TabelaInformacoes from '../TabelaInformacoes';

interface Props {
    inputRef: React.RefObject<HTMLInputElement>;
    handleClickSearch(): void;
    isFindingData: boolean;
    isDataAvailable: boolean;
    isFetching: boolean;
}

export default function MenuLateral({
    children,
    inputRef,
    handleClickSearch,
    isFindingData,
    isDataAvailable,
    isFetching,
}: PropsWithChildren<Props>) {
    const searchBarWidth = isDataAvailable ? '350px' : '100%';
    const searchBarIcon = isFetching ? <Spinner /> : <SearchIcon />;

    return (
        <Flex bgColor="gray.700" h="100vh">
            <Center w={searchBarWidth} bg="grey.700">
                <Flex flexDirection="column" maxW={600}>
                    <Box mb={30}>
                        <Image src="/assets/images/icon_logo.png" alt="Rota do mosquito" />
                    </Box>
                    <HStack mx={5}>
                        <Input ref={inputRef} placeholder="Pesquisar cidade" bgColor="white" />
                        <IconButton aria-label="Search database" icon={searchBarIcon} onClick={handleClickSearch} />
                    </HStack>
                    <Box flex={1} visibility={!isFindingData && isDataAvailable ? 'visible' : 'hidden'}>
                        <TabelaInformacoes />
                    </Box>
                </Flex>
            </Center>
            <Box alignSelf="center" textAlign="center" flex="1">
                {children}
            </Box>
        </Flex>
    );
}
