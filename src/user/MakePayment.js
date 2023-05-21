import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const MakePayment = () => {
    const [address, setAddress] = useState([]);
    const [cart, setCart] = useState([]);
    const [total,setTotal] = useState(0);
    const LoginId = localStorage.getItem("LoginId");

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(`http://localhost:5185/api/Address/GetAddressByUserId?id=${LoginId}`);
                setAddress(res.data);
            }
            catch (error) {
                console.log(error);
            }
        };
        getData();
        GetCart();
        TotalPrice();
    }, []);

    const GetCart = async () => {
        try {
            const res = await axios.get(`http://localhost:5185/api/Cart/GetCartByUserId?id=${LoginId}`);
            setCart(res.data)
        }
        catch (error) {
            console.log(error);
        }
    }

    const TotalPrice = async () => {
        var sum = 0
        cart.map(item => (
            sum = sum + item.price
        ))
        setTotal(sum);
    }
    console.log(cart);
    console.log(address);
    return (
        <>
            <h2 style={{textAlign:'center',backgroundColor:'antiquewhite',padding:5+'px'}} >Payment Page</h2><br />
            <div style={{backgroundColor:'green',fontSize:20+'px',textAlign:'center',padding:5+'px'}} >Delivery Address</div><br />
            <table style={{marginLeft:'auto',marginRight:'auto',border:'1px solid black'}} cellpadding="10px" cellspacing="0">
                {address.map(item => (
                    <>
                <tr><td><strong>C/O : </strong>{address[0].userName}</td></tr>
                <tr><td><strong>Email Id : </strong>{address[0].email}</td></tr>
                <tr><td><strong>Mobile Number : </strong>{address[0].phone}</td></tr>
                <tr><td><strong>Address : </strong>{address[0].location}</td></tr>
                <tr><td><strong>Country : </strong>{address[0].country}</td></tr>
                <tr><td><strong>State : </strong>{address[0].state}</td></tr>
                <tr><td><strong>Zip : </strong>{address[0].zip}</td></tr>
                </>
                ))}
            </table><br />
            <h1 style={{textAlign:'center'}}>Total amount to be paid is : {total}</h1><br />

            <div className="select">
                <strong>Select a payment method : </strong>
                <select name="options">
                    <option value="#">Select</option>
                    <option value="creditcard">Credit Card</option>
                    <option value="debitcard">Debit Card</option>
                    <option value="pod">Pay on Delivery</option>
                    <option value="upi">UPI</option>
                    <option value="net">Net Banking</option>
                </select>
            </div><br />
            <Link to='/invoice' className="btn btn-outline-primary">Continue With Payment</Link> <br />
        </>
    )
}

export default MakePayment;