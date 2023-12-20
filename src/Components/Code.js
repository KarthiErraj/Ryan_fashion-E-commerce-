
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem('cartItems');
    return storedItems ? JSON.parse(storedItems) : [];
  });

  const getData = () => {
    axios.get(`https://6578cc40f08799dc80461073.mockapi.io/sam/data/product/${id}`)
      .then((res) => {
        const newItem = res.data;

        // Check if the item is already in the cart
        if (!items.find(item => item.id === newItem.id)) {
          setItems((prevItems) => {
            const updatedItems = [...prevItems, newItem];
            localStorage.setItem('cartItems', JSON.stringify(updatedItems));
            return updatedItems;
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeData = (itemId) => {
    // Filter out the item with the specified itemId
    const updatedItems = items.filter(item => item.id !== itemId);

    // Update local storage with the new array
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));

    // Set the state with the updated array
    setItems(updatedItems);
  };

  useEffect(() => {
    getData();
  }, [id]);

  console.log(items);

  return (
    <div className='mx-4'>
      <h1 className='fw-bolder fs-4'>ITEMS ADDED :</h1><br /><br />
      <div className='row'>
        <div className='col-8'>
          
          {
          items.map((cartItem, index) => (
            
            <div key={index} className='col-6 mb-4'>
              <div className="card" >
                <img src={cartItem.image} className="card-img-top" alt="..." />
                <div className="card-body border border-secondary">
                  <h4 className="card-title">{cartItem.brand}</h4>
                  <h6>{cartItem.price}</h6>
                  <h6>{cartItem.delivered}</h6>
                  <button className="btn btn-primary fw-bold text-center" onClick={() => navigate('/Buy')}>Buy now</button>
                  <button className="btn btn-danger fw-bold text-center" onClick={()=>removeData(cartItem.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='col-4'>
          hello there
        </div>
      </div>
    </div>
  );
}

export default Cart;
