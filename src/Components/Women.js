import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'



function Women() {

  const [Witem, setWitem] = useState([])
  const navigate = useNavigate()

  const fetchdata = () => {
    axios.get('https://6578cc40f08799dc80461073.mockapi.io/sam/data/product')
      .then((res) => {
        setWitem(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetchdata()
  }, [])

  console.log(Witem)




  return (
    <div className='container  w-100' >
      <h3 class='fw-bold '>WOMEN'S COLLECTION :</h3>
      <div className='row  my-3'>
        <div className='col-3    '>
         
        <div class="input-group mb-3 ">
            {/* <label class="input-group-text" for="inputGroupSelect01">Options</label> */}
            <select class="form-select border-dark" id="inputGroupSelect01">
              <option selected>Saree</option>
              <option value="1">Silk</option>
              <option value="2">Silk cotton</option>
              <option value="3">Cotton</option>
            </select>
          </div>

          <div class="input-group mb-3 ">
            {/* <label class="input-group-text" for="inputGroupSelect01">Options</label> */}
            <select class="form-select border-dark" id="inputGroupSelect01">
              <option selected>Chudithar</option>
              <option value="1">Cotton</option>
              <option value="2">Top</option>
            </select>
          </div>

          <div class="input-group mb-3 ">
            {/* <label class="input-group-text" for="inputGroupSelect01">Options</label> */}
            <select class="form-select border-dark" id="inputGroupSelect01">
              <option selected>Others</option>
              <option value="1">Jeans</option>
              <option value="2">T-shits</option>
              <option value="3">Shorts</option>
            </select>
          </div>


        </div>



        <div className='col-9 '>
          <div className='row' style={{backgroundColor:"#57B3FC"}}>
            {
              Witem.map((data) => {
                return <div className='col-4 mb-4 mt-3'>
                  <div class="card" style={{ backgroundColor: "#DDFEFD" }} >
                    <img src={data.image} class="card-img-top" alt="..." />
                    <div class="card-body border border-secondary">
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

export default Women