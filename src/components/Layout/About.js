import React from "react";

const About = () =>{
    return(
        <>
        <div style={{textAlign:'center',padding:5+'px'}}>
        <h2 style={{background:'#45a049',padding:10+'px'}}>About Us</h2>
    </div>
    <div class="row">
        <div class="column">
           
        </div>
        <div class="column">
            <p>Medicine Store is an e-commerce portal that lets people to order basic medicines on their website. The website needs to have the following features:

                A search form in the home page to allow entry of the medicines to be purchased by the customer.
                
                Based on item details entered, it will show available medicines with price.
                
                Once a person selects an item to purchase, they will be redirected to the list of available items. In the next page, they are shown the complete breakout of the order and details of the payment to be made in the payment gateway. When payment is done, they are shown a confirmation page with details of the order.
                
                For the above features to work, there will be an admin backend with the following features:
                
                Admin login page where admin can change password after login if he wants to
                
                A master list of medicines available for purchase
                
                A functionality to add or remove medicines</p>
        </div>
    </div>
    </>
    )
}

export default About;