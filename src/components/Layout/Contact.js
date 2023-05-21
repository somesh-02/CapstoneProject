import React from "react";

const Contact = () =>{
    return(
        <>
        <div class="container">
        <div style={{textAlign:'center'}}>
            <h2 style={{background:'#45a049'}}>Contact Us</h2>
        </div>
        <div class="row">
            <div class="column">
                <p><strong>Contact Us : </strong>9000100234</p>
                <p><strong>Email Us : </strong>KStory@gmail.com</p>
                <p><strong>Follow Us on :</strong>
                    <button type="button" class="btn btn-primary">FaceBook</button>
                    <button type="button" class="btn btn-secondary">Instagram</button>
                    <button type="button" class="btn btn-success">Twitter</button>
                </p>
            </div>
            <div class="column">
                <form action="#">
                    <label for="fname">Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                    <label for="email">Email or Mobile Number</label>
                    <input type="text" id="email" name="emailid" placeholder="Your email or mobile number.."/>
                    <label for="place">Place</label>
                    <select id="place" name="place">
                        <option value="select">Select</option>
                        <option value="hyderabad">Hyderabad</option>
                        <option value="chennai">Chennai</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="banglore">Banglore</option>
                        <option value="delhi">Delhi</option>
                    </select>
                    <label for="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.."
                        style={{height:70+'px'}}></textarea>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    </div>
    </>
    )
}

export default Contact;