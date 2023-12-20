import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { json, useNavigate, useParams } from 'react-router-dom'


function Cart() {

  const navigate = useNavigate()
  const { id } = useParams()
  const [item, setitem] = useState(() => {
    const storeditem = localStorage.getItem('cartitem');
    return storeditem ? JSON.parse(storeditem) : []
  })



  const getdata = () => {
    axios.get(`https://6578cc40f08799dc80461073.mockapi.io/sam/data/product/${id}`)
      .then((res) => {
        const newitem = res.data;

        if (!item.find(item => item.id === newitem.id)) {
          setitem([...item,newitem])
          localStorage.setItem('cartitem',JSON.stringify([...item,newitem]))
          // setitem((previtem) => {
          //   const updateitem = [...previtem, newitem]
          //   localStorage.setItem('cartitem', JSON.stringify(updateitem))
          //   return updateitem
          // })
        }


      })
      .catch((err) => {
        console.log(err)
      })
  }

  const totalCost = item.reduce((prev,curr)=>prev+curr.price,0)


  const removeData = (itemId) => {
    // Filter out the item with the specified itemId
    const updateitem = item.filter(item => item.id !== itemId);

    // Update local storage with the new array
    localStorage.setItem('cartitem', JSON.stringify(updateitem));

    // Set the state with the updated array
    setitem(updateitem);
  };

  useEffect(() => {
    getdata()
  }, [])

  console.log(item)

  return (
    <div className='mx-4'>


      <h1 className='fw-bolder fs-4 ' >ITEMS ADDED :</h1><br /><br />
      <div className='row'>

        <div className='col-8'>
          <div className='row  w-75' >
            {

              item.map((cartitem) => {
                return <div className='col-6 mt-3' style={{ marginBottom: "10px" }}>
                  <div class="card" >
                    <img src={cartitem.image} class="card-img-top" alt="..." />
                    <div class="card-body  border-secondary">
                      <h4 class="card-title">{cartitem.brand}</h4>
                      <h6>Price : {cartitem.price}</h6>
                      <h6>Item ID : {cartitem.delivered}</h6>
                      <button class="btn btn-primary fw-bold text-center " onClick={() => navigate('/Buy')}>Buy now</button>
                      <button class="btn btn-danger fw-bold text-center " onClick={() => removeData(cartitem.id)} >remove</button>
                    </div>
                  </div>

                </div>
              })
            }
            
          </div>
          <div className='total'>
          {/* <h3 className='mt-5'>Total amount :{totalCost}</h3> */}
          <span>{item.price}</span>
          </div>
        </div>




        <div className='col-4 '>
        <h3 className='mt-5 border border-dark  '>Total amount :{totalCost}</h3><br/>
        <button class="btn btn-success fw-bold text-center btn btn-lg" onClick={() => navigate('/Buy')}>Buy All:</button>
        </div>

      </div>




    </div>

  )
}

export default Cart