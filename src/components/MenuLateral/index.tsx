import React, { useState } from "react";

import { IconButton, Image, Input, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import { Box, Center, Flex, HStack, Text, VStack } from "@chakra-ui/layout";

import { SearchIcon } from '@chakra-ui/icons'

interface ParentCompProps {
    childComp?: React.ReactNode;
}


const DADOS = {
    nome_cidade: 'Dois Vizinhos',
    suspeitas: 'BASTANTE',
    confirmados: 29,
    quantidade_total: 550,
    bairros: [
        {
            nome: 'Bairro das Torres',
            numero_casos: 50
        },
        {
            nome: 'Colina',
            numero_casos: 40
        },
        {
            nome: 'Esperança',
            numero_casos: 35
        },
        {
            nome: 'Meredik',
            numero_casos: 30
        },
        {
            nome: 'Margarida Galvan',
            numero_casos: 28
        },
        {
            nome: 'Verdes Campos',
            numero_casos: 15
        },
        {
            nome: 'Nsa. Senhora de Lourdes',
            numero_casos: 10
        },
        {
            nome: 'Centro',
            numero_casos: 5
        },
        {
            nome: 'Santa Luiza',
            numero_casos: 5
        },
    ]
}

const Informacoes = () => {
    return (
        <VStack>
            <Box marginY={10}>
                <Box w='16vw' alignItems='start'>
                    <Text color='white' mb='8px'>DE:</Text>
                    <Input
                        bgColor='white'
                        placeholder="Selecione uma data"
                        size="md"
                        type="date"
                    />
                </Box>
                <Box w='16vw' alignItems='start'>
                    <Text color='white' mb='8px'>ATÉ:</Text>
                    <Input
                        bgColor='white'
                        placeholder="Selecione uma data"
                        size="md"
                        type="date"
                    />
                </Box>
            </Box>
            <TableContainer p={2} borderRadius={10} bgColor='white'>
                <Table size='sm' variant='unstyled'>
                    <TableCaption>Casos registrados na região selecionada</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Suspeitas:</Th>
                            <Th isNumeric>{DADOS.suspeitas}</Th>
                        </Tr>
                        <Tr>
                            <Th>Confirmados:</Th>
                            <Th isNumeric>{DADOS.confirmados}</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {DADOS.bairros.map((bairro, index) =>
                            <Tr>
                                <Td key={index}>{bairro.nome}</Td>
                                <Td key={index} isNumeric>{bairro.numero_casos}</Td>
                            </Tr>
                        )}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>Total de casos:</Th>
                            <Th isNumeric>{DADOS.quantidade_total}</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </VStack>
    );
}


const MenuLateral: React.FC<ParentCompProps> = (props) => {
    const { childComp } = props;

    const [isMenuVisible, setMenuVisible] = useState(false);
    const [cidade, setCidade] = useState('');

    return (
        <Flex bgColor={"gray.700"}>
            <Center w='350px' bg='grey.700'>
                <VStack>
                    <Box mb={30} w={'300px'}>
                        <Image src='/assets/images/icon_logo.png' alt='Rota do mosquito' />
                    </Box>
                    <HStack>
                        <Input
                            value={cidade}
                            placeholder="Pesquisar cidade"
                            bgColor={'white'}
                        />
                        <IconButton aria-label='Search database' icon={<SearchIcon />} onClick={() => {
                            setMenuVisible(!isMenuVisible)
                            setCidade(cidade.length > 0 ? '' : 'Dois Vizinhos')
                        }} />
                    </HStack>

                    {isMenuVisible ? <Informacoes /> : <Box boxSize={600}></Box>}

                </VStack>
            </Center>
            <Box flex='1'>
                {childComp}
            </Box>
        </Flex>
    );
}

export default MenuLateral;
