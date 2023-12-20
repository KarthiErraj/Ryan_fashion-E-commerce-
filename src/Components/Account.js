import React from 'react'
import toast from 'react-hot-toast'




function Account() {

const createtoast=()=>{
  toast.success("ACCOUNT CREATED SUCCESSFULLY")
}
  return (

    <div className='container'>

      {/* <div className='text-center w-50 h-100 border border-dark  p-5 m-auto mt-5 ' > 


            <button className='border border-dark btn btn-lg btn-outline-primary' style={{width:"350px", height:"90px"}} >Exsisting user</button><br/>
            <button className='border border-dark btn btn-lg btn-outline-primary' style={{width:"350px", height:"90px"}}> details</button><br/>
            <button className='border border-dark btn btn-lg btn-outline-primary' style={{width:"350px", height:"90px"}}>Create account</button><br/>
            <button className='border border-dark btn btn-lg btn-outline-danger' style={{width:"350px", height:"90px"}}>Subscribe</button>

           
 
 

      </div> */}


      <h3 className='text-center'>CREATE ACCOUNT</h3>

      <div className='mt-4 text-center w-50 m-auto   ' style={{borderRadius:"10%"}}>


        <label className='mt-3 fw-bold' >USER NAME</label><br />
        <input type='text' className='col-8 mt-1' /><br />

        <label className='mt-3 fw-bold'>E-MAIL</label><br />
        <input type='email' className='col-8 mt-1' /><br />

        <label className='mt-3 fw-bold'>SET PASSWORD</label><br />
        <input type='password' className='col-8 mt-1 mb-3 ' />

        <div>
        <button className='btn btn-success text-light fw-bolder col-6 mb-5' onClick={()=>createtoast()}>SUBMIT</button>
        

        </div>

      </div>

       



    </div>

  )
}

export default Account