import { useEffect, useState } from 'react';
import API from '../Api';

const initialState = { isLoading: false, data: null, error: null };

const useFetch = (type = '') => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const fetchData = async () => {
      setState({ ...state, isLoading: true });
      try {
        const response = await API.get(type);
        setState({ ...state, isLoading: false, data: response.data });
      } catch (error) {
        setState({ ...state, isLoading: false, error });
      }
    };
    fetchData();
  }, [type]);

  return { ...state };
};
export default useFetch;
