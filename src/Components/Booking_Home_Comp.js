import React from "react";
import "../Css/Booking_sec.css";
const Booking_Home_Comp = () => {
  return <>
  <div className="container Booking">

<div className="card-wrapper  ">

<div className="container-inner text-center"> 

<div className="content"><span>Location</span>

<select class="form-select " aria-label=".form-select-sm example">
  <option selected>U.K</option>
  <option value="1">Canada</option>
  <option value="3">U.S.A</option>
  <option value="2">Turkey</option>
  <option value="3">India</option>
  <option value="3">Pakistan</option>
</select>
</div>

<div className="content"><span>Property type</span>

<select class="form-select " aria-label=".form-select-sm example">
  <option selected>Modern House</option>
  <option value="1">Luxurious Villas</option>
  <option value="2">Normal Appartments</option>
  <option value="3">Sites</option>
</select>
</div>
<div className=""><span>Price Range</span>
<select class="form-select " aria-label=".form-select-sm example">
  <option selected>$10k - $20k</option>
  <option value="1">$20k - $30k</option>
  <option value="2">$30k - Above</option>

</select>

</div>
<div className="content">

<button className='btn btn-primary btn-lg w-50 book-btn'>Search</button>


</div>

</div>
</div>

</div>
  
  
  
  </>;
};

export default Booking_Home_Comp;
