import { PropsWithChildren } from 'react';

import { IconButton, Image, Input } from '@chakra-ui/react';
import { Box, Center, Flex, HStack, VStack } from '@chakra-ui/layout';

import { SearchIcon } from '@chakra-ui/icons';
import TabelaInformacoes from '../TabelaInformacoes';

interface Props {
    inputRef: React.RefObject<HTMLInputElement>;
    handleClickSearch(): void;
    isFindingData: boolean;
    isDataAvailable: boolean;
}

export default function MenuLateral({
    children,
    inputRef,
    handleClickSearch,
    isFindingData,
    isDataAvailable,
}: PropsWithChildren<Props>) {
    return (
        <Flex bgColor="gray.700" h="100vh">
            <Center w="350px" bg="grey.700">
                <VStack>
                    <Box mb={30} w="300px">
                        <Image src="/assets/images/icon_logo.png" alt="Rota do mosquito" />
                    </Box>
                    <HStack>
                        <Input ref={inputRef} placeholder="Pesquisar cidade" bgColor="white" />
                        <IconButton aria-label="Search database" icon={<SearchIcon />} onClick={handleClickSearch} />
                    </HStack>
                    {!isFindingData && isDataAvailable ? <TabelaInformacoes /> : <Box boxSize={600} />}
                </VStack>
            </Center>
            <Box alignSelf="center" textAlign="center" flex="1">
                {children}
            </Box>
        </Flex>
    );
}
