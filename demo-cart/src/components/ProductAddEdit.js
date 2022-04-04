import React, { useEffect } from 'react';
import { VStack, Input, Button, Select, Textarea, Box } from '@chakra-ui/react';
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, addNewProduct } from './../actions/product.actions';
import { useNavigate } from 'react-router';

const ProductAddEdit = () => {
  const categories = useSelector(state => state.product.categories);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    title: '',
    price: '',
    category: '',
    description: '',
    image: '',
  };

  const validationSchema = yup.object({
    title: yup.string().required(),
    price: yup.number().required(),
    category: yup.string().required(),
    description: yup.string().required(),
    image: yup.string().url().required(),
  });

  const onFormSubmit = (values, actions) => {
    actions.setSubmitting(false);
    dispatch(addNewProduct(values));
    navigate('/');
  };

  useEffect(() => {
    dispatch(fetchCategories());
    return () => {};
  }, [dispatch]);

  return (
    <Box boxShadow="base" m={'auto'} width="clamp(300px, 60%, 100%)">
      <Formik
        initialValues={initialValues}
        onSubmit={onFormSubmit}
        validationSchema={validationSchema}
      >
        {props => (
          <Form noValidate>
            <VStack p={3} m="3">
              <Box fontWeight="semibold" mt="1" as="h2" textAlign="left">
                Add Product
              </Box>

              <Field name="title">
                {({ field, form }) => (
                  <FormControl
                    isRequired
                    isInvalid={form.errors.title && form.touched.title}
                  >
                    <FormLabel htmlFor="title">Enter Title</FormLabel>
                    <Input
                      {...field}
                      type="text"
                      id="title"
                      placeholder="Enter Title"
                    />
                    <ErrorMessage
                      name="title"
                      component={FormErrorMessage}
                    ></ErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="price">
                {({ field, form }) => (
                  <FormControl
                    isRequired
                    isInvalid={form.errors.price && form.touched.price}
                  >
                    <FormLabel>Enter price</FormLabel>
                    <Input type="number" placeholder="Enter price" {...field} />
                    <ErrorMessage
                      name="price"
                      component={FormErrorMessage}
                    ></ErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="category">
                {({ field, form }) => (
                  <FormControl
                    name="category"
                    isRequired
                    isInvalid={form.errors.category && form.touched.category}
                  >
                    <FormLabel>Enter category</FormLabel>
                    <Select placeholder="Select category" {...field}>
                      {categories.map((category, index) => (
                        <option key={index}>{category}</option>
                      ))}
                    </Select>
                    <ErrorMessage
                      name="category"
                      component={FormErrorMessage}
                    ></ErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="description">
                {({ field, form }) => (
                  <FormControl
                    name="description"
                    isRequired
                    isInvalid={
                      form.errors.description && form.touched.description
                    }
                  >
                    <FormLabel>Enter description</FormLabel>
                    <Textarea
                      {...field}
                      id="description"
                      placeholder="Enter description"
                    ></Textarea>
                    <ErrorMessage
                      name="description"
                      component={FormErrorMessage}
                    ></ErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="image">
                {({ field, form }) => (
                  <FormControl
                    name="image"
                    isRequired
                    isInvalid={form.errors.image && form.touched.image}
                  >
                    <FormLabel>Enter image</FormLabel>
                    <Input
                      type="url"
                      placeholder="Enter image url"
                      {...field}
                    />

                    <ErrorMessage
                      name="image"
                      component={FormErrorMessage}
                    ></ErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                mt={4}
                colorScheme="teal"
                type="submit"
                isLoading={props.isSubmitting}
              >
                Add Product
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ProductAddEdit;
