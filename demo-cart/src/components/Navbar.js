import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  VStack,
  IconButton,
} from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';
import logo from '../logo.svg';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Link as RouterLink } from 'react-router-dom';
import { Icon } from '@chakra-ui/icons';
import { MdAdd, MdShoppingCart } from 'react-icons/md';
import { useSelector } from 'react-redux';

export default function NavBar() {
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <Box
      boxShadow="base"
      px={4}
      bg="teal.500"
      position="fixed"
      w="100vw"
      zIndex="1"
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={8} alignItems={'center'}>
          <Box>
            <RouterLink to={'/'}>
              <Avatar size={'sm'} src={logo} alt="demo cart" />
            </RouterLink>
          </Box>
        </HStack>
        <Flex alignItems={'center'}>
          <RouterLink to="/product/add">
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              leftIcon={<MdAdd />}
            >
              Add
            </Button>
          </RouterLink>
          <RouterLink to={'/cart'}>
            <IconButton
              size="md"
              fontSize="lg"
              aria-label="cart"
              variant="ghost"
              ml={2}
              p={0}
            >
              <VStack>
                {cartItems.length > 0 && (
                  <Box
                    position="absolute"
                    borderRadius="50%"
                    right={-1}
                    top={-1}
                    p={1}
                    bg="red"
                    color="white"
                    fontSize="10"
                  >
                    {cartItems.length}
                  </Box>
                )}
                <Icon as={MdShoppingCart} w={6} h={6} />
              </VStack>
            </IconButton>
          </RouterLink>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              aria-label="Profile"
            >
              <Avatar
                size={'sm'}
                src={
                  'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                }
                alt="user"
              />
            </MenuButton>
            <MenuList>
              <MenuItem>Link 1</MenuItem>
              <MenuItem>Link 2</MenuItem>
              <MenuDivider />
              <MenuItem>Link 3</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}
