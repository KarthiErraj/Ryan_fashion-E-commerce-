import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Combo() {

  const [Citem, setCitem] = useState([])
  const navigate = useNavigate()

  const getdata = () => {
    axios.get('https://6578cc40f08799dc80461073.mockapi.io/sam/data/product')
      .then((res) => {
       setCitem(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getdata()
  }, [])

  return (
    <div className='container '>
      <h3 class='fw-bold'>COMBO OFFERS :</h3>
      <div className='row mx-0 my-3'>
        <div className='col-3  p-3 '>


        <div class="input-group mb-3 ">
            {/* <label class="input-group-text" for="inputGroupSelect01">Options</label> */}
            <select class="form-select border-dark" id="inputGroupSelect01">
              <option selected>MENS</option>
              <option value="1">Shirts</option>
              <option value="2">Pants</option>
              <option value="3">T-shirts</option>
              <option value="4">Track</option>
            </select>
          </div>

          <div class="input-group mb-3 ">
            {/* <label class="input-group-text" for="inputGroupSelect01">Options</label> */}
            <select class="form-select border-dark" id="inputGroupSelect01">
              <option selected>WOMEN</option>
              <option value="1">Saree</option>
              <option value="2">Chudithar</option>
              <option value="3">Lehanga</option>
              <option value="4">Top</option>
            </select>
          </div>

          <div class="input-group mb-3 ">
            {/* <label class="input-group-text" for="inputGroupSelect01">Options</label> */}
            <select class="form-select border-dark" id="inputGroupSelect01">
              <option selected>KIDS</option>
              <option value="1">Shirts</option>
              <option value="2">Pants</option>
              <option value="3">T-shirts</option>
              <option value="4">Track</option>
            </select>
          </div>
         

        </div>



        <div className='col-9 '>
          <div className='row' style={{ backgroundColor: "#57B3FC" }}>
            {
              Citem.map((data) => {
                return <div className='col-4 mb-4 mt-3'>
                  <div class="card " >
                    <img src={data.image} class="card-img-top" alt="..." />
                    <div class="card-body border border-secondary" style={{ backgroundColor: "#DDFEFD" }}>
                      <h4 class="card-title">{data.brand}</h4>
                      <h6>{data.price}</h6>
                      <h6>{data.delivered}</h6>


                      <button class="btn btn-primary fw-bold text-center " onClick={() => navigate('/Buy')}>Buy now</button>
                      <button class="btn btn-danger fw-bold text-center ms-4" onClick={() => navigate(`/Cart/${data.id}`)}>Add to Cart</button>
                      {/* here must use data.id otherwise it will show error */}
                    </div>
                  </div>

                </div>
              })
            }
          </div>

        </div>
      </div>

    </div>
  )
}

export default Combo