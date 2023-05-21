import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ViewDetailsUser = (props) => {
    const [medicineDetails,setMedicineDetails] = useState([]);
    const { medid } = props;
    console.log(medid);

    const navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(`http://localhost:5185/api/Medicine/GetMedicineById?id=${medid}`);
                setMedicineDetails(res.data)
                console.log(res.data);
            }
            catch (error) {
                console.log(error);
            }
        };
        getData();
    }, [medid]);

    //console.log(userDetails);
    //console.log(userDetails[0].firstName);

    return (
    <>
        <table style={{ alignContent: 'center', marginLeft: 'auto', marginRight: 'auto' }} border="1" cellpadding="10px" cellspacing="0">
            {medicineDetails.map(item =>(
                <>
                <tr><td><strong>Medicine Id : </strong>{medicineDetails[0].id}</td></tr>
                <tr><td><strong>Name : </strong>{medicineDetails[0].medicineName}</td></tr>
                <tr><td><img src={medicineDetails[0].image} style={{ height: 200 + 'px', width: 250 + 'px', paddingTop: 10 + 'px' }}/></td></tr>
                <tr><td><strong>Price : </strong>{medicineDetails[0].price}</td></tr>
                <tr><td><strong>Seller : </strong>{medicineDetails[0].seller}</td></tr>
                <tr><td><strong>Description : </strong>{medicineDetails[0].description}</td></tr>
                </>
            ))}


        </table><br></br>
        <Link to='/viewmedicines' className="btn btn-primary">Back</Link>
        </>
    )
}

export default ViewDetailsUser;