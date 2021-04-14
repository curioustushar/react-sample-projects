import React from 'react';
import { Table, Thead, Tbody, Tr, Td, Th } from '@chakra-ui/react';
import { Box, Avatar, Flex, Button } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItemFromCart } from '../actions/cart.actions';
import { useHistory } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cartItems = useSelector(state => state.cart.cartItems);

  const viewProductDetails = (e, item) => {
    history.push(`/product/${item.id}`);
  };

  const deleteItem = (e, item) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(deleteItemFromCart(item));
  };

  if (cartItems.length === 0) {
    return (
      <Flex>
        <Box
          m={4}
          w="100%"
          fontWeight="semibold"
          letterSpacing="wide"
          textAlign="center"
        >
          You cart empty :(
        </Box>
      </Flex>
    );
  }
  return (
    <Box m={3} p={3}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Image</Th>
            <Th>Title</Th>
            <Th isNumeric>Price</Th>
            <Th isNumeric>Quantity</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cartItems.map((item, index) => (
            <Tr key={item.id} onClick={e => viewProductDetails(e, item)}>
              <Td>{index + 1}</Td>
              <Td>
                <Avatar size={'sm'} src={item.image} alt={item.title} />
              </Td>
              <Td>{item.title}</Td>
              <Td isNumeric>
                ${parseFloat(item.price * item.quantity).toFixed(2)}
              </Td>
              <Td isNumeric>{item.quantity}</Td>
              <Td>
                <Button onClick={e => deleteItem(e, item)}>Delete</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Cart;
