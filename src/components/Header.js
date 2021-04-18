import { Heading } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Link } from '@chakra-ui/layout';
import { Spacer } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';
import React from 'react';

function Header() {
  function MenuItems({ children, link }) {
    return (
      <Text mr={6}>
        <Link href={link}>{children}</Link>
      </Text>
    );
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
        <MenuItems link='/sha256'>SHA256</MenuItems>
        <MenuItems link='/block'>Block</MenuItems>
        <MenuItems link='/blockchain'>Blockchain</MenuItems>
        <MenuItems link='/distributed'>Distributed</MenuItems>
        <MenuItems link='/transactions'>Transactions</MenuItems>
        <MenuItems link='/wallet'>Wallet</MenuItems>
        <MenuItems link='/signed'>Signed</MenuItems>
        <MenuItems link='/wallet-transactions'>Wallet-Transactions</MenuItems>
      </Box>
    </Flex>
  );
}

export default Header;
