import React from 'react'
import '../3d_Bike/Bike.css'


import { useState } from 'react'

// import Img0 from '../3d_Bike/Assets/bike0.png'
import Img0 from '../3d_Bike/Assets/0_0.png'
// import Img1 from '../3d_Bike/Assets/bike1.png'
import Img1 from '../3d_Bike/Assets/0_1.png'
// import Img2 from '../3d_Bike/Assets/bike2.png'
import Img2 from '../3d_Bike/Assets/0_2.png'
// import Img3 from '../3d_Bike/Assets/bike3.png'
import Img3 from '../3d_Bike/Assets/0_3.png'
// import Img4 from '../3d_Bike/Assets/bike4.png'
import Img4 from '../3d_Bike/Assets/0_4.png'
// import Img5 from '../3d_Bike/Assets/bike5.png'
import Img5 from '../3d_Bike/Assets/0_5.png'
// import Img6 from '../3d_Bike/Assets/bike6.png'
import Img6 from '../3d_Bike/Assets/0_6.png'
// import Img7 from '../3d_Bike/Assets/bike7.png'
import Img7 from '../3d_Bike/Assets/0_7.png'
// import Img8 from '../3d_Bike/Assets/bike8.png'
import Img8 from '../3d_Bike/Assets/0_8.png'
// import Img9 from '../3d_Bike/Assets/bike9.png'
import Img9 from '../3d_Bike/Assets/0_9.png'
// import Img10 from '../3d_Bike/Assets/bike10.png'
import Img10 from '../3d_Bike/Assets/0_10.png'
// import Img11 from '../3d_Bike/Assets/bike11.png'
import Img11 from '../3d_Bike/Assets/0_11.png'
// import Img12 from '../3d_Bike/Assets/bike12.png'
import Img12 from '../3d_Bike/Assets/0_12.png'
// import Img13 from '../3d_Bike/Assets/bike13.png'
import Img13 from '../3d_Bike/Assets/0_13.png'
// import Img14 from '../3d_Bike/Assets/bike14.png'
import Img14 from '../3d_Bike/Assets/0_14.png'
// import Img15 from '../3d_Bike/Assets/bike15.png'
import Img15 from '../3d_Bike/Assets/0_15.png'
// import Img16 from '../3d_Bike/Assets/bike16.png'
import Img16 from '../3d_Bike/Assets/0_16.png'
// import Img17 from '../3d_Bike/Assets/bike17.png'
import Img17 from '../3d_Bike/Assets/0_17.png'
// import Img18 from '../3d_Bike/Assets/bike18.png'
// import Img19 from '../3d_Bike/Assets/bike19.png'
// import Img20 from '../3d_Bike/Assets/bike20.png'
// import Img21 from '../3d_Bike/Assets/bike21.png'
// import Img22 from '../3d_Bike/Assets/bike22.png'
// import Img23 from '../3d_Bike/Assets/bike23.png'


export default function Bike() {
  
    const onMouseMove = (e) => {
        let rect = e.currentTarget.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
    
        console.log(x, y);
        
        // FOR FIRST HALF OF DIV
        // x <= 175 && x >= 161 ? setImage(Img12) :
        // x <= 161 && x >= 147 ? setImage(Img11) :  
        // x <= 147 && x >= 133 ? setImage(Img10) :  
        // x <= 133 && x >= 119 ? setImage(Img9)  :  
        // x <= 119 && x >= 105 ? setImage(Img8)  :  
        // x <= 105 && x >= 91  ? setImage(Img7)  :  
        // x <= 91  && x >= 77  ? setImage(Img6)  :  
        // x <= 77  && x >= 63  ? setImage(Img5)  :  
        // x <= 63  && x >= 49  ? setImage(Img4)  :  
        // x <= 49  && x >= 35  ? setImage(Img3)  :  
        // x <= 35  && x >= 21  ? setImage(Img2)  :  
        // x <= 21  && x >= 7   ? setImage(Img1)  :
        // x >= 175 && x <= 189 ? setImage(Img13) :  
        // x >= 189 && x <= 203 ? setImage(Img14) :  
        // x >= 203 && x <= 217 ? setImage(Img15) :  
        // x >= 217 && x <= 231 ? setImage(Img16) :  
        // x >= 231 && x <= 245 ? setImage(Img17) :  
        // x >= 245 && x <= 259 ? setImage(Img18) :  
        // x >= 259 && x <= 273 ? setImage(Img19) :  
        // x >= 273 && x <= 287 ? setImage(Img20) :  
        // x >= 287 && x <= 301 ? setImage(Img21) :  
        // x >= 301 && x <= 315 ? setImage(Img22) :  
        // x >= 315 && x <= 329 ? setImage(Img23) :  
       
        x <= 167 && x >= 149 ? setImage(Img8) :
        x <= 149 && x >= 131 ? setImage(Img7) :  
        x <= 131 && x >= 113 ? setImage(Img6) :  
        x <= 113 && x >= 95 ? setImage(Img5)  :  
        x <= 95 && x >= 77 ? setImage(Img4)  :  
        x <= 77 && x >= 59  ? setImage(Img3)  :  
        x <= 59  && x >= 41  ? setImage(Img2)  :  
        x <= 41  && x >= 23  ? setImage(Img1)  :  
        x <= 23  && x >= 5  ? setImage(Img0)  :  
        // x <= 49  && x >= 35  ? setImage(Img3)  :  
        // x <= 35  && x >= 21  ? setImage(Img2)  :  
        // x <= 21  && x >= 7   ? setImage(Img1)  :
        // x >= 175 && x <= 189 ? setImage(Img13) :  
        // x >= 149 && x <= 167 ? setImage(Img14) :  
        x >= 167 && x <= 185 ? setImage(Img9) :  
        x >= 185 && x <= 203 ? setImage(Img10) :  
        x >= 203 && x <= 221 ? setImage(Img11) :  
        x >= 221 && x <= 239 ? setImage(Img12) :  
        x >= 239 && x <= 257 ? setImage(Img13) :  
        x >= 257 && x <= 275 ? setImage(Img14) :  
        x >= 275 && x <= 293 ? setImage(Img15) :  
        x >= 293 && x <= 311 ? setImage(Img16) :  
        x >= 311 && x <= 329 ? setImage(Img17) :  
        
        //FOR SECOND HALF OF DIV 
        // x >= 329 && x <= 343 ? setImage(Img0)  :  x >= 343 && x <= 357 ? setImage(Img1)  :  
        x >= 329 && x <= 347 ? setImage(Img0)  :  
        x >= 347 && x <= 365 ? setImage(Img1)  :  
        x >= 365 && x <= 383 ? setImage(Img2)  :  
        x >= 383 && x <= 401 ? setImage(Img3)  :  
        x >= 401 && x <= 419 ? setImage(Img4)  :  
        x >= 419 && x <= 437 ? setImage(Img5)  :  
        x >= 437 && x <= 455 ? setImage(Img6)  :  
        x >= 455 && x <= 473 ? setImage(Img7)  :  
        x >= 473 && x <= 491 ? setImage(Img8) :  
        x >= 491 && x <= 509 ? setImage(Img9) :  
        x >= 509 && x <= 527 ? setImage(Img10) :  
        x >= 527 && x <= 545 ? setImage(Img11) :  
        x >= 545 && x <= 563 ? setImage(Img12) :  
        x >= 563 && x <= 581 ? setImage(Img13) :  
        x >= 581 && x <= 599 ? setImage(Img14) :  
        x >= 599 && x <= 617 ? setImage(Img15) :  
        x >= 617 && x <= 635 ? setImage(Img16) :  
        x >= 635 && x <= 653 ? setImage(Img17) :  
        // x >= 567 && x <= 581 ? setImage(Img16) :  x >= 581 && x <= 595 ? setImage(Img17) :  
        // x >= 595 && x <= 609 ? setImage(Img18) :  x >= 609 && x <= 623 ? setImage(Img19) :  
        // x >= 623 && x <= 637 ? setImage(Img20) :  x >= 637 && x <= 651 ? setImage(Img21) :  
        // x >= 651 && x <= 665 ? setImage(Img22) :  x >= 665 && x <= 679 ? setImage(Img23) :  
       
        setImage(Img0) 
        
    }
     
   
    

    const [Img, setImage] = useState(Img0);
  
    return (
        // <div className="container-fluid">
        <div className="row  mx-auto text-center py-5" >
          <div className="col-lg-6 my_bike_div col-md-10 mx-auto py-5" onMouseMove={onMouseMove} >
          <img src={Img} alt="" className='img-fluid' />

          </div>
        
          
        </div>
    //    </div>
  )
}
