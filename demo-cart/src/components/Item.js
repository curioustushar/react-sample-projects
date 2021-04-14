import React from 'react';
import { Flex, Box, Image, Center, Tooltip, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Icon } from '@chakra-ui/icons';
import { MdShoppingCart } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { addItemToCart } from './../actions/cart.actions';

const Item = ({ item }) => {
  const dispatch = useDispatch();

  const addItemToCartHandler = e => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addItemToCart(item));
  };

  return (
    <Link to={{ pathname: `/product/${item.id}`, state: { item } }}>
      <Box
        boxShadow="base"
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Box p="6">
          <Center>
            <Image
              _hover={{ transform: `scale(1.1)` }}
              src={item.image}
              alt={item.title}
              maxH="400"
              height="400"
            />
          </Center>
        </Box>

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
            >
              {item.category}
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
            whiteSpace="wrap"
            textAlign="left"
          >
            {item.title}
          </Box>
          <Flex justifyContent="space-between">
            <Box textAlign="left">${item.price}</Box>
            <Tooltip label="Add to Cart" fontSize="md">
              <Button variant="ghost" p={2} onClick={addItemToCartHandler}>
                <Icon as={MdShoppingCart} w={6} h={6} />
              </Button>
            </Tooltip>
          </Flex>
        </Box>
      </Box>
    </Link>
  );
};

export default Item;
