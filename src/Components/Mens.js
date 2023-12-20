import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function Mens() {
  const navigate = useNavigate()
  const [productData, setproductData] = useState([])

  const fetchdata = () => {
    axios.get("https://6578cc40f08799dc80461073.mockapi.io/sam/data/product")
      .then((res) => {
        setproductData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetchdata()
  }, [])

  console.log(productData)

  return (

    <div className='container ' >
      <h3 class='fw-bold'>MEN'S COLLECTION :</h3>
      
      <div className='row mx-0 my-3'>

        <div className='col-3 '>
          <div class="input-group mb-3">
            {/* <label class="input-group-text" for="inputGroupSelect01">Options</label> */}
            <select class="form-select border-dark" id="inputGroupSelect01">
              <option selected>SHIRT</option>
              <option value="1">Formals</option>
              <option value="2">Causals</option>
              <option value="3">Office</option>
              <option value="3">Traditionals</option>
            </select>
          </div>

          <div class="input-group mb-3 ">
            {/* <label class="input-group-text" for="inputGroupSelect01">Options</label> */}
            <select class="form-select border-dark" id="inputGroupSelect01">
              <option selected>PANT</option>
              <option value="1">Formals</option>
              <option value="2">Causals</option>
              <option value="3">Office</option>
              <option value="4">Traditionals</option>
            </select>
          </div>

          <div class="input-group mb-3">
            {/* <label class="input-group-text" for="inputGroupSelect01">Options</label> */}
            <select class="form-select border-dark" id="inputGroupSelect01">
              <option selected>T-SHIRTS</option>
              <option value="1">Sports</option>
              <option value="2">Gym</option>
              <option value="3">Athletic</option>
              <option value="3">Normal</option>
            </select>
          </div>

          <div class="input-group mb-3 ">
            {/* <label class="input-group-text" for="inputGroupSelect01">Options</label> */}
            <select class="form-select border-dark" id="inputGroupSelect01">
            <option selected>TRACKS</option>
              <option value="1">Sports</option>
              <option value="2">Gym</option>
              <option value="3">Athletic</option>
              <option value="4">Normal</option>
            </select>
          </div>

          <div class="input-group mb-3  ">
            {/* <label class="input-group-text" for="inputGroupSelect01">Options</label> */}
            <select class="form-select border-dark" id="inputGroupSelect01">
              <option selected>SHORTS</option>
              <option value="1">Sports</option>
              <option value="2">Gym</option>
              <option value="3">Athletics</option>
              <option value="4">Normal</option>
            </select>
          </div>
        </div>



        <div className='col-9 '>
          <div className='row' style={{ backgroundColor: "#57B3FC" }}>
            {
              productData.map((data) => {
                return <div className='col-4 mb-4 mt-3'>
                  <div class="card" >
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

export default Mens