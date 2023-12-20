import React from 'react'
import { useNavigate } from 'react-router-dom'

function Topbar() {

  const navigate = useNavigate()
  return (

    <div>

      <div className='bg-light border' >

        <div className=' mt-3 '>
          <h2 className='  text-primary mt-4' onClick={() => navigate("/")} style={{ display: "inline-flex", marginTop: "20px", marginBottom: "20px", marginLeft: "20px", fontWeight: "bolder", fontFamily: "times new roman", cursor: "pointer" }}><span className='text-danger '>R</span>YAN_F<span className='text-danger'>A</span>SHION</h2>
          <input type='search' placeholder='Search the products here' maxLength={40} style={{ width: "900px", marginLeft: "65px", height: "40px", borderRadius: "10%", textAlign: "center", fontWeight: "bolder" }}></input>
          {/*for the cart option another div is used because icon and other option might be included  */}
          <button className='btn btn-primary btn-sm text-light' onClick={() => navigate("/")} style={{ marginLeft: "20px", borderRadius: "25%", fontWeight: "bolder" }}><i class="fa fa-home fs-3" aria-hidden="true"></i></button>
          <button className='btn btn-primary btn-sm text-light' onClick={() => navigate("/Cart/:id")} style={{ marginLeft: "10px", borderRadius: "25%", fontWeight: "bolder" }}><i class="fa fa-shopping-cart fs-3" aria-hidden="true"></i></button>




          {/* <button className='btn btn-primary btn-sm text-light' onClick={() => navigate("/Account")} style={{marginLeft: "10px", borderRadius:"25%",fontWeight:"bolder"}}><i class="fa fa-user-circle-o fs-3" aria-hidden="true"></i></button> */}

          <button class="btn btn-primary btn-sm" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" style={{ marginLeft: "10px", borderRadius: "25%", fontWeight: "bolder" }} >{<i class="fa fa-user-circle-o fs-3" aria-hidden="true"></i>}</button>

          <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title fw-bolder" id="offcanvasWithBothOptionsLabel">{<i class="fa fa-user-circle-o fs-3" aria-hidden="true"></i>} MY ACCOUNT</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">

              <div class="list-group">
                {/* <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                  The current link item
                </a> */}
                <a  class="list-group-item list-group-item-action  fw-bold fs-5 border border-secondary">Personal Details</a>
                <a class="list-group-item list-group-item-action  fw-bold fs-5 border border-secondary">My Activity</a>
                <a class="list-group-item list-group-item-action  fw-bold fs-5 border border-secondary" >My Orders</a>
                <a class="list-group-item list-group-item-action  fw-bold fs-5 border border-secondary" >Payment Methods</a>
                <a class="list-group-item list-group-item-action  fw-bold fs-5 border border-secondary" >Membership</a>
                <a class="list-group-item list-group-item-action  fw-bold fs-5 border border-secondary">Most Searched</a>
                <a class="list-group-item list-group-item-action  fw-bold fs-5 border border-secondary" >Help</a>
                <button className='btn btn-sm btn-danger text-light fw-bold '>LOG OUT</button>
                <button className='btn btn-sm btn-success text-light mt-5 fw-bold'>ADD ACCOUNT</button>
                <button className='btn btn-sm btn-primary text-light fw-bold 'onClick={()=>navigate('/Account')}>CREATE ACCOUNT</button>
                </div>
                <div>
                
                
                </div>
               

                


            </div>
          </div>




        </div>
      </div>



    </div>

  )
}

export default Topbar