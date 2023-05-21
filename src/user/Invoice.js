import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const Invoice = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const LoginId = localStorage.getItem("LoginId");
    const [address, setAddress] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(`http://localhost:5185/api/Cart/GetCartByUserId?id=${LoginId}`);
                setCart(res.data)
            }
            catch (error) {
                console.log(error);
            }
        };
        const getAddress = async () =>{
            try
            {
                const res1 = await axios.get(`http://localhost:5185/api/Address/GetAddressByUserId?id=${LoginId}`);
                setAddress(res1.data);
            }
            catch(error)
            {
                console.log(error);
            }
        };
        getData();
        getAddress();
        TotalPrice();
    }, []);

    const TotalPrice = async () => {
        var sum = 0
        cart.map(item => (
            sum = sum + item.price
        ))
        setTotal(sum)
    }

    return (
        <>
        <h2 style={{textAlign:'center'}} className="btn btn-success">Your Order is placed</h2>

    <p>Your Order will be delivered by 3 days</p>
    <h3>Order Details : </h3>
    <table style={{marginLeft:'auto',marginRight:'auto'}} border={1+'px'} cellpadding="10px" cellspacing="0">
        {address.map(a =>(
        <tr>
            <td><strong>Address : </strong></td>
            <td><strong>C/O : </strong>{address[0].userName} <br />
                <strong>Email Id : </strong>{address[0].email} <br />
                <strong>Mobile Number : </strong>{address[0].phone} <br />
                <strong>Address : </strong>{address[0].location} <br />
                <strong>Country : </strong>{address[0].country} <br />
                <strong>State : </strong>{address[0].state} <br />
        <strong>Zip : </strong>{address.zip}</td>
        
    </tr>
    ))}
    <tr>
        <td><strong>Orders : </strong></td>
        <td>
            {cart.map(item => (
                <>
                    <span><strong>Name : </strong>{item.name}</span><br />
                    <span><strong>Price : </strong>{item.price}</span><br />
                    <span><strong>Quantity : </strong>1</span><br />
                    <span><strong>Seller : </strong>{item.seller}</span><br />
                    <hr />
                    </>
                    ))}
        </td>
        </tr>
        <tr>
            <td><strong>Total : </strong></td>
            <td><strong>{total}</strong></td>
        </tr>
    </table><br /> 

    <Link to='/viewmedicines' class="btn btn-success" >Continue Ordering</Link> &nbsp;
    <Link to='/makepayment' class="btn btn-warning">Back to Payment</Link>&nbsp;
    <Link to='/checkout' class="btn btn-info">Back to Check Out</Link>
    </>
    )
}

export default Invoice;