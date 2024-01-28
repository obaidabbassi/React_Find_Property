import React from 'react'
import '../Css/Home.css'
import 'animate.css';
import Footer from '../Components/Footer'
import Dark_Home_Comp from '../Components/Dark_Home_Comp';
import Comfort_Room_Comp from '../Components/Comfort_Room_Comp';
import Booking_Home_Comp from '../Components/Booking_Home_Comp';
import Dream_Room_Home_Comp from '../Components/Dream_Room_Home_Comp';
const Home = () => {
  return (
    <>
    <div className='container-fluid Hero'>

<div className="container hero-text">

<h1 className='text-white animate__animated animate__bounce'>Find a <span className='text-primary '>dream</span> home to <span className='text-primary'>live</span> in</h1>
<p className='text-white'>Finding your dream home is an exciting
journey that involves envisioning a place where you can create 
lasting memories. A haven of comfort and personal expression,
 your dream home encapsulates your aspirations, 
providing the perfect backdrop for every chapter of your life.</p>
</div>

<Booking_Home_Comp/>


    </div>




<Dark_Home_Comp/>










<div className="container-fluid Carosel">


<div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="Images/rm1.jpg" className="d-block w-100 img-fluid" alt="Image 1" />
          </div>
          <div className="carousel-item">
            <img src="Images/rm2.jpg" className="d-block w-100 img-fluid" alt="Image 2" />
          </div>
          <div className="carousel-item">
            <img src="Images/rm3.jpg" className="d-block w-100 img-fluid" alt="Image 3" />
          </div>
          <div className="carousel-item">
            <img src="Images/rm4.jpg" className="d-block w-100 img-fluid" alt="Image 3" />
          </div>
          <div className="carousel-item">
            <img src="Images/rm5.jpg" className="d-block w-100 img-fluid" alt="Image 3" />
          </div>
      
        </div>
        <a className="carousel-control-prev" href="#carouselExample" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExample" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>





</div>






<Comfort_Room_Comp/>





<Dream_Room_Home_Comp/>







<div className="container comfort text-center">

<h1 className='text-center'>Feel the <span className='text-primary'>comfort</span></h1>
<img  className='img-fluid' src='Images/rm6.jpg'/>

</div>



<Footer/>

    </>
  )
}

export default Home