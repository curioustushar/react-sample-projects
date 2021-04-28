import { Box, Flex, Avatar, Button } from '@chakra-ui/react';
import logo from '../../logo.svg';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { Link as RouterLink } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import ProfileMenu from './ProfileMenu';
import CartMenu from './CartMenu';

export default function NavBar() {
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
        <RouterLink to={'/'}>
          <Avatar size={'sm'} src={logo} alt="demo cart" />
        </RouterLink>
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
          <CartMenu />
          <ColorModeSwitcher justifySelf="flex-end" />
          <ProfileMenu />
        </Flex>
      </Flex>
    </Box>
  );
}
