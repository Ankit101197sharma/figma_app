import React from 'react'
import classes from "./Figma.module.css"
import img1 from "../../Assest/image1.png"
import logo1 from  "../../Assest/logo.png"

function Figma() {
  return (
    <div  className={classes.mainSec}>
        <div className={classes.mainSec1}>
              
                   <div className={classes.rightSec1}>
                  <div className={classes.logoname}>
                      <img className={classes.logoPick} src={logo1} alt="logo" />
                  </div>
                   <div className={classes.mainSec2}>
                       
                       <img src={img1}  alt='ice'/> 
                   </div>
              </div>
                        
                  
                  
               <div  className={classes.leftDiv}>
                   <div className={classes.leftDiv1}>
                       <div className={classes.heading1}>
                           <h6>Thank you for your order</h6>
                           <div className={classes.heading2}  >
                           <div >
                                <p>Order#012345</p>
                           </div>
                           <div>
                                <p>Date:1/10/2022</p>
                           </div>
                          
                       </div>
                       <hr />
                       </div>
                       <div style={{display:'flex', justifyContent:'space-between'}}>
                       <div className={classes.circle1}>
                          <p className={classes.circleText}>1</p> 
                       </div>
                       <div className={classes.itemText}>
                           <p>Mixed Ice Cream in Sundae Cup</p> 
                       </div>
                       <div className={classes.itemText2}>
                           <p>$1</p>
                       </div>
                       </div>
                       <div>
                       <div style={{display:'flex', justifyContent:'space-between'}}>
                       <div className={classes.circle2}>
                          <p className={classes.circleText1}>2</p> 
                       </div>
                       <div className={classes.itemText1}>
                           <p>Mixed Ice Cream in Sundae Cup</p> 
                       </div>
                       <div className={classes.itemText3}>
                           <p>$2</p>
                       </div>
                       </div>
                       </div>
                       <div >
                         <hr  className={classes.hr2}/>
                       </div>

                       <div >
                       <div style={{display:'flex', justifyContent:'space-between'}}>
                       <div className={classes.orderSec}>
                           <p>Orders fee</p>
                       </div>
                       
                       <div className={classes.orderSec1}>
                           <p>$2</p>
                       </div>
                       <div className={classes.orderSec2}>
                           <p>Discounts</p>
                       </div>
                       
                       <div className={classes.orderSec3}>
                           <p>$3</p>
                       </div>
                       <div >
                         <hr  className={classes.hr3}/>
                       </div>
                       <div style={{display:"flex", justifyContent:'space-between'}}>
                       <div className={classes.orderSec4}>
                           <p>Total</p>
                       </div>
                       <div className={classes.orderSec5}>
                           <p>$8</p>
                       </div>
                       </div>
                       
                       </div>
                       </div>
                       
                        
                   </div>
               </div>
        </div>
    </div>
  )
}

export default Figma;