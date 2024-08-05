import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, CssBaseline } from '@mui/material';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Basket from './components/Basket';

const App = () => {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [view, setView] = useState('productList');

  const showBasket = () => setView('basket');
  const showProductList = () => setView('productList');

  useEffect(() => {
    axios
      .get(
        'https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/products.json',
      )
      .then((response) => setProducts(response.data))
      .catch((error) => setFetchError(error));
  }, []);

  const addToBasket = (product) => {
    setBasket([...basket, product]);
  };

  const removeFromBasket = (id) => {
    const index = basket.findIndex((item) => item.id === id);
    if (index !== -1) {
      setBasket(basket.filter((_, i) => i !== index));
    }
  };

  if (fetchError) {
    return <div>Error fetching data</div>;
  }

  return (
    <>
      <CssBaseline />
      <Header
        showBasket={showBasket}
        showProductList={showProductList}
        itemsInBasket={basket?.length}
      />
      <Container sx={{ pt: 5 }}>
        {view === 'productList' && (
          <ProductList products={products} addToBasket={addToBasket} />
        )}
        {view === 'basket' && (
          <Basket basketItems={basket} removeFromBasket={removeFromBasket} />
        )}
      </Container>
    </>
  );
};

export default App;
