import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { Box, VStack, HStack, IconButton, Image } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Text } from '@chakra-ui/react';

export const CartMenu = () => {
  const cartItems = useSelector(state => state.cart.cartItems) || [];
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Menu>
      <VStack position="relative">
        {cartItems.length > 0 && (
          <Box
            position="absolute"
            borderRadius="50%"
            right={-1}
            top={-1}
            p={1}
            zIndex={1}
            bg="red"
            color="white"
            fontSize="10"
          >
            {totalItems}
          </Box>
        )}
        <MenuButton
          as={IconButton}
          variant="ghost"
          size="md"
          fontSize="lg"
          icon={<MdShoppingCart />}
        ></MenuButton>
      </VStack>
      <MenuList p={2}>
        {cartItems.map(item => (
          <Link key={item.id} to={`/product/${item.id}`}>
            <MenuItem>
              <HStack>
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src={item.image}
                  alt={item.title}
                  mr="12px"
                />
                <span>{item.title}</span>
              </HStack>
            </MenuItem>
          </Link>
        ))}
        {cartItems.length > 0 && (
          <MenuItem>
            <Box my={2} width="100%">
              <Link to="/cart">
                <Button isFullWidth colorScheme="teal">
                  Go To Cart
                </Button>
              </Link>
            </Box>
          </MenuItem>
        )}
        {cartItems.length === 0 && (
          <Box my={2} width="100%">
            <Text fontSize="xl">Your cart is empty :(</Text>
          </Box>
        )}
      </MenuList>
    </Menu>
  );
};

export default CartMenu;
