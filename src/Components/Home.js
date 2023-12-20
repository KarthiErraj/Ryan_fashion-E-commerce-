import React from 'react'
import { useNavigate } from 'react-router-dom'

import './Home.css'

import im2 from '../img/im2.webp'

import women from '../img/women.webp'
import suit from '../img/suit.jpg'
import offer from '../img/offer.webp'
import kids from '../img/kids.webp'
import bg1 from '../img/bg1.jpg'
import combo from '../img/combo.webp'
import suit2 from '../img/suit1.webp'
import kids2 from '../img/kids2.webp'
import offer3 from '../img/offer3.webp'
import bg2 from '../img/bg2.jpg'
import new1 from '../img/new1.jpg'
import new4 from '../img/new4.jpg'
 
function Home() {

  const navigate = useNavigate()


  return (
    < div className='bdy'>
      <div className='options bg-primary'>
        <div className='opt ' onClick={() => navigate('/offers')}>
          <img src={offer} style={{ width: "85px", height: "85px", borderRadius: "50%",cursor: "pointer" }} />
        </div>
        <div className='opt' onClick={() => navigate('/Mens')}>
          <img src={suit} style={{ width: "85px", height: "85px", borderRadius: "50%",cursor: "pointer" }} />
        </div>
        <div className='opt' onClick={() => navigate('/Women')}>
          <img src={women} style={{ width: "85px", height: "85px", borderRadius: "50%",cursor: "pointer" }} />
        </div>
        <div className='opt' onClick={() => navigate('/kids')}>
          <img src={kids} style={{ width: "85px", height: "85px", borderRadius: "50%",cursor: "pointer" }} />
        </div>
        <div className='opt' onClick={() => navigate('/Combo')}>
          <img src={combo} style={{ width: "85px", height: "85px", borderRadius: "50%",cursor: "pointer" }} />
        </div>
      </div>

      {/* !!!!!!here the coursel is working in the webpage : is not moving to the second page*/}
      {/* coursel on going event or upcoming event and new arrival or most awaited collection should be shown in
      each slide */}
      <div className='sale mt-5 border border-primary'>
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={im2} alt="..." style={{ width: "100%", height: "350px" }} />

            </div>
            <div class="carousel-item" onClick={()=>navigate('/offers')}>
              <img src={bg2} alt="..." style={{ width: "100%", height: "350px" }} />


            </div>
            <div class="carousel-item">
              <img src={bg1} alt="..." style={{ width: "100%", height: "350px" }} />

            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>


      {/* !!!!!!!!!!!current Trend dress are shown here these cards must be included with the add to cart button
      additional they should have see more options to see more the related dress */}

      {/* <div className='trends'>
        <div class='row p-5'>
          <div class="col-3 ">
            <div class="card" >
              <img src={im} class="card-img-top" alt="..." />
              <div class="card-body border border-secondary">
                <h5 class="card-title">Card title</h5>
                <h6>price</h6>
                <h6>offer and percent</h6>
                <h6>Delivered by</h6>    <button class="btn btn-primary fw-bold text-center " onClick={() => navigate('/Buy')}>Buy now</button>
                <button class="btn btn-danger fw-bold text-center ms-5" onClick={() => navigate('/Cart/:id')}>Add to Cart</button>

              </div>
            </div>
          </div>


          <div class="col-3">
            <div class="card">
              <img src={im} class="card-img-top" alt="..." />
              <div class="card-body border border-secondary">
                <h5 class="card-title">Card title</h5>
                <h6>price</h6>
                <h6>offer and percent</h6>
                <h6>Delivered by</h6> <button class="btn btn-primary fw-bold text-center " onClick={() => navigate('/Buy')}>Buy now</button>
                <button class="btn btn-danger fw-bold text-center ms-5" onClick={() => navigate('/Cart')}>Add to Cart</button>
              </div>
            </div>
          </div>


          <div class="col-3">
            <div class="card" >
              <img src={im} class="card-img-top" alt="..." />
              <div class="card-body border border-secondary">
                <h5 class="card-title">Card title</h5>
                <h6>price</h6>
                <h6>offer and percent</h6>
                <h6>Delivered by</h6>  <button class="btn btn-primary fw-bold text-center " onClick={() => navigate('/Buy')}>Buy now</button>
                <button class="btn btn-danger fw-bold text-center ms-5" onClick={() => navigate('/Cart')}>Add to Cart</button>
              </div>
            </div>
          </div>

          <div class="col-3">
            <div class="card" >
              <img src={im} alt="..." />
              <div class="card-body border border-secondary">
                <h5 class="card-title">Card title</h5>
                <h6>price</h6>
                <h6>offer and percent</h6>
                <h6>Delivered by</h6> <button class="btn btn-primary fw-bold text-center " onClick={() => navigate('/Buy')}>Buy now</button>
                <button class="btn btn-danger fw-bold text-center ms-5 " onClick={() => navigate('/Cart')}>Add to Cart</button>
              </div>

            </div>
          </div>

        </div>
      </div> */}
      <div className='trends mt-5'>
        <h3 class='text-primary fw-bolder'><span className='text-danger'>NEW</span>   ARRIVAL:</h3>
        <div class='row mt-4'>
          <div className='col-3'>
            <img src={suit2} onClick={() => navigate('/Mens')} style={{ width: "350px", height: "300px", borderRadius: "10%", cursor: "pointer" }} />
            <h3></h3>
          </div>


          <div className='col-3'>
            <img src={kids2} onClick={() => navigate('/kids')} style={{ width: "350px", height: "300px", borderRadius: "10%",cursor: "pointer" }} />
          </div>

          <div className='col-3'>
            <img src={offer3} onClick={() => navigate('/offers')} style={{ width: "350px", height: "300px", borderRadius: "10%",cursor: "pointer" }} />
          </div>

          <div className='col-3'>
            <img src={women} onClick={() => navigate('/Women')} style={{ width: "350px", height: "300px", borderRadius: "10%",cursor: "pointer" }} />
          </div>
        </div>
      </div>


      {/* !!!!!!!!! The upcoming arrival and new sale or upcoming events and the subscribers offer 
      extra benefits for paid customer are shown here. */}
      <div class='new-arrive mx-3 my-5'>
        <h3 className='fw-bold'>UPCOMING EVENTS :</h3>
        <div class='row newar'>

          <div class='col-6 '>
          <img src={new1} className='w-75 h-75'/>
          <h4 className='fw-bold text-danger'>50% OFF ON COMBO</h4>

          </div>
          <div class='col-6 '>

          <img src={new4} className='w-75 h-75'/>
          <h4  className='fw-bold text-danger'>COMING SOON..</h4>
          </div>
        </div>
      </div>


      {/*!!!!!!! Here the most searched items on this will be appered here . it doesn't need too much 
     even a little will be good. */}

      <div class='most-searched my-5 mx-2'>
        <h2 className='fw-bold '>Switch to <span className='text-warning'> Premium*</span></h2>
        <h6 className='mt-3'>
          <ol>
            <li>Personalized Shopping Experience:
              Enjoy a personalized touch to your shopping experience with our premium delivery service. Tailored to your preferences, this membership ensures that every order is handled with meticulous care and attention.</li>
            <li>Versatility in Choices:
              Explore a vast array of products spanning various categories—fashion, electronics, home essentials, and more. Premium members have the privilege of selecting from a diverse range of high-quality items.</li>
            <li>Dedicated Customer Support:
              Receive priority access to our dedicated customer support team. Premium members enjoy exclusive assistance, ensuring that their queries and concerns are addressed promptly and efficiently.</li>
            <li>Early Access to Sales and Events:
              Stay ahead of the curve with early access to major sales events and promotions. Premium members get a head start on incredible discounts, allowing them to seize the best deals before they run out.</li>
            <li>Flexible Membership Options:
              Choose a membership plan that suits your lifestyle. Whether you prefer the flexibility of a short-term commitment or the long-term benefits of a yearly subscription, our premium options cater to your needs.</li>
            <li>Guaranteed Product Availability:
              Premium members never miss out on popular products. Enjoy guaranteed availability, ensuring that you can secure the latest trends and innovations without the fear of items running out of stock.</li>
            <li>Enhanced Return and Exchange Policy:
              Experience hassle-free returns and exchanges. Premium members benefit from an enhanced policy, streamlining the process and providing added convenience for any product-related concerns.</li>
            <li>Exclusive Sneak Peeks:
              Get an exclusive sneak peek into upcoming collections and product releases. Premium members are the first to know about the latest trends, ensuring they stay ahead in the world of fashion and innovation.</li>
            <li>Customized Recommendations:
              Receive personalized product recommendations based on your preferences and past purchases. Our premium service tailors suggestions to match your unique style and interests.</li>
            <li>Complimentary Gift Wrap:
              Elevate your gift-giving experience with complimentary gift wrapping services. Premium members enjoy the added touch of sophistication when sending presents to their loved ones.</li>
          </ol>
        </h6>
      </div>



      {/*  here is the footer of the home page ..  where you can see the about a, contach details, company details,
      and address too. */}

      <div class='footer bg-dark text-light '>

        <div class='about ms-5 mt-5'>
          <h5 class='fw-bolder ms-5'>ABOUT :</h5>
          <ul className='list-unstyled mt-4 fw-bold ms-5'>
            <li type="button" >Contact us</li>
            <li type="button">About us</li>
            <li type="button">Careers</li>
            <li type="button">Careers</li>
            <li type="button">RA services</li>
            <li type="button" >RA services</li>
            <li type="button">Corporate information</li>
          </ul>
        </div>


        <div class='help ms-5 mt-5'>
          <h5 class='fw-bolder'>HELP :</h5>
          <ul className='list-unstyled mt-4 fw-bold'>
            <li type="button" >Payment</li>
            <li type="button">Shipping</li>
            <li type="button">Cancellation $ Return</li>
            <li type="button">FAQ</li>
          </ul>
        </div>


        <div class='consumer ms-5 mt-5'>
          <h5 class='fw-bolder'>CONSUMER:</h5>
          <ul className='list-unstyled mt-4 fw-bold'>
            <li type="button" >Terms of Use</li>
            <li type="button">Security</li>
            <li type="button">Privacy</li>
            <li type="button">Sitemap</li>
          </ul>
        </div>


        <div class='social ms-5 mt-5'>
          <h5 class='fw-bolder'>SOCIAL:</h5>
          <ul className='list-unstyled mt-4 fw-bold'>
            <li type="button" >Twitter</li>
            <li type="button">Meta</li>
            <li type="button">Instagram</li>
          </ul>
        </div>


        <div class='contact mt-5'>
          <h5 class='fw-bolder'>Mail us:</h5>
          <ul className='list-unstyled mt-4 fw-bold' >
            <li type="email" >rafashion@gmail.com</li>
            <li type="email">fashionfreaks91@gmail.com</li>
          </ul>
        </div>

        <div class='contact  mt-5'>
          <h5 class='fw-bolder'>ADDRESS :</h5>
          <p className='list-unstyled mt-4 fw-bold'>
            Rayan Fashion <br />
            123 Elegant Street<br />
            Chic City, Fashland<br />
            Zip Code: 54321<br />
            Country: Trendland
          </p>
        </div>

      </div>


    </div>

  )
}

export default Home