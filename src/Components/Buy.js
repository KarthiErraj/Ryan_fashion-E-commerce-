import React from 'react'
import toast from 'react-hot-toast'

function Buy() {

const submittoast=()=>{
  toast.success('ORDER PLACED SUCCESSFULLY')
}

  return (
    <div className='container'>



      <div className='details w-50 m-auto mt-4'>
        <h4 className='fw-bold mb-4 '>Delivery to :</h4>

        <form class="row g-3 border" style={{ backgroundColor: "whitesmoke" }}>

          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">First Name</label>
            <input type="text" class="form-control border-dark" id="inputEmail4" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Last Name</label>
            <input type="text" class="form-control border-dark" id="inputPassword4" />
          </div>


          <div class="col-md-12">
            <label for="inputEmail4" class="form-label">Email</label>
            <input type="email" class="form-control border-dark" id="inputEmail5" />
          </div>
          <div class="col-md-12 ">
            <label for="inputPassword4" class="form-label">Password</label>
            <input type="password" class="form-control border-dark" id="inputPassword5" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">Address</label>
            <input type="text" class="form-control border-dark" id="inputAddress" placeholder="1234 Main St" />
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">Address 2</label>
            <input type="text" class="form-control border-dark" id="inputAddress2" placeholder="Apartment, studio, or floor" />
          </div>
          <div class="col-md-6 me-5">
            <label for="inputCity" class="form-label">City</label>
            <input type="text" class="form-control border-dark" id="inputCity" />
          </div>
          <div class="col-md-4 ms-5">
            <label for="inputState" class="form-label">State</label>
            <select id="inputState" class="form-select border-dark">
              <option selected>Choose...</option>
              <option>Andhra Pradesh</option>
              <option>Arunachal Pradesh</option>
              <option>Assam</option>
              <option>Bihar</option>
              <option>Chandigarh</option>
              <option>Chhattisgarh</option>
              <option>Delhi</option>
              <option>Goa</option>
              <option>Gujarat</option>
              <option>Haryana</option>
              <option>Himachal Pradesh</option>
              <option>Jharkhand</option>
              <option>Karnataka</option>
              <option>Kerala</option>
              <option>Lakshadweep</option>
              <option>Madhya Pradesh</option>
              <option>Maharashtra</option>
              <option>Manipur</option>
              <option>Meghalaya</option>
              <option>Mizoram</option>
              <option>Nagaland</option>
              <option>Odisha</option>
              <option>Puducherry</option>
              <option>Punjab</option>
              <option>Rajasthan</option>
              <option>Sikkim</option>
              <option>Tamil Nadu</option>
              <option>Telangana</option>
              <option>Tripura</option>
              <option>Uttar Pradesh</option>
              <option>Uttarakhand</option>
              <option>West Bengal</option>


            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">Pin code</label>
            <input type="text" class="form-control border-dark" id="inputZip" maxLength={6} />
          </div>

          <div class="col-12">
            <button class="btn btn-primary  fw-bold" onClick={()=>submittoast()}>SUBMIT</button>
            
          </div>
        </form>

      </div>
    </div>
  )
}

export default Buy