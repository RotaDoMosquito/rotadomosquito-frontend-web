import { Input, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import { Box, Text, VStack } from '@chakra-ui/layout';

import DADOS from './mock.json';

export default function TabelaInformacoes() {
  return (
    <VStack>
      <Box marginY={10}>
        <Box w="16vw" alignItems="start">
          <Text color="white" mb="8px">
            DE:
          </Text>
          <Input bgColor="white" placeholder="Selecione uma data" size="md" type="date" />
        </Box>
        <Box w="16vw" alignItems="start">
          <Text color="white" mb="8px">
            ATÉ:
          </Text>
          <Input bgColor="white" placeholder="Selecione uma data" size="md" type="date" />
        </Box>
      </Box>
      <TableContainer p={2} borderRadius={10} bgColor="white">
        <Table size="sm" variant="unstyled">
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
            {DADOS.bairros.map(({ id, nome, numero_casos }) => (
              <Tr key={id}>
                <Td>{nome}</Td>
                <Td isNumeric>{numero_casos}</Td>
              </Tr>
            ))}
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
