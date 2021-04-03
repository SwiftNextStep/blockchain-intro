import { Heading } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Spacer } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';
import React from 'react';

function Header() {
  function MenuItems({ children }) {
    return <Text mr={6}>{children}</Text>;
  }
  return (
    <Flex
      as='nav'
      justify='center'
      padding='2.5'
      bg='gray.800'
      color='gray.100'
    >
      <Flex align='center' mr={5}>
        <Heading as='h1' size='lg'>
          Blockchain viewer
        </Heading>
      </Flex>
      <Spacer />
      <Box display='flex' alignItems='center'>
        <MenuItems>SHA256</MenuItems>
        <MenuItems>Block</MenuItems>
        <MenuItems>Blockchain</MenuItems>
      </Box>
    </Flex>
  );
}

export default Header;
