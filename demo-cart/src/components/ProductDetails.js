import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Box, Image, Button, SimpleGrid, Center } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchProductDetails,
  setProductDetails,
} from '../actions/product.actions';
import { addItemToCart } from './../actions/cart.actions';

const ProductDetails = () => {
  const { product } = useSelector(state => state.product);
  const dispatch = useDispatch();
  const { state } = useLocation() || {};

  const params = useParams();

  const addItemToCartHandler = e => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addItemToCart(product));
  };

  useEffect(() => {
    if (!params.id) return;
    if (state?.item) {
      dispatch(setProductDetails(state?.item));
    } else {
      dispatch(fetchProductDetails(params.id));
    }
    return () => {};
  }, [params.id, dispatch, state?.item]);

  if (!product) return <Box m="3">loading...</Box>;

  return (
    <Box
      m="3"
      boxShadow="base"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} spacing="40px">
        <Center>
          <Box p="6">
            <Image src={product.image} alt={product.title} maxH="400" />
          </Box>
        </Center>
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
            >
              {product.category}
            </Box>
          </Box>

          <Box textAlign="left">${product.price}</Box>
          <Box fontWeight="semibold" mt="1" as="h2" textAlign="left">
            Product Info:
          </Box>
          <Box textAlign="left" fontSize="md">
            {product.description}
          </Box>
          <Button
            onClick={addItemToCartHandler}
            m={3}
            variant={'solid'}
            colorScheme={'teal'}
            size={'sm'}
          >
            Add to Cart
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default ProductDetails;
