import React from 'react'
import { Flex, Box, Text } from 'rebass';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <Flex
      as="header"
      px={2}
      color='white'
      bg='gray'
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 1280,
          mx: 'auto',
          px: 3,
        }}>
        <Flex alignItems='center'>
          <Text p={2} fontWeight='bold'>apollo(SpaceX)</Text>
          <Box mx='auto' />
          <Link to="/">
            Home
          </Link>
        </Flex>
      </Box>
    </Flex>
  )
};
