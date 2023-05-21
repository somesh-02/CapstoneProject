import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ViewMedicines = (props) => {
    const [medicinesList, setMedicinesList] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("http://localhost:5185/api/Medicine/GetAllMedicines");
                setMedicinesList(res.data);
            }
            catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

    const handleDetails = async (x) =>{
        props.MedicineId(x);
    }



    const handleCart = async (a,b,c,d,e) =>{
        try
        {
            await axios.put("http://localhost:5185/api/Cart/AddCarts",{
               name:a,
               price:b,
               seller:c,
               status:d,
               userId:e,
            })
        }
        catch(error)
        {
            console.error(error);
        }
    }

    return (
        <div>
            <div class="container" style={{ paddingTop: 50 + 'px' }}>
                {medicinesList.map(medicine => (
                    <div class="card" >
                        <div class="row g-0" style={{ paddingBottom: 5 + 'px' }}>
                            <div class="col-md-4">
                                <img src={medicine.image} class="card-img" alt="Card Image" style={{ height: 200 + 'px', width: 250 + 'px', paddingTop: 10 + 'px' }} />
                                <h5 class="card-title">{medicine.medicineName}</h5>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <div><p class="btn btn-info btn-sm" style={{marginBottom:5+'px'}} >Description : </p>{medicine.description}</div>
                                    <div><br></br>
                                    <div><p class="btn btn-secondary btn-sm" style={{marginBottom:5+'px'}}>Manufactured By : </p><b>{medicine.seller}</b></div>
                                    </div><br></br>
                                    <div>
                                        <p class="btn btn-danger btn-sm" style={{marginBottom:5+'px'}}>Price : <b>{medicine.price}</b></p>
                                    </div>
                                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <p style={{paddingRight: 110 + 'px',color:'darkgreen'}}>Available in Stock</p>
                                        <p style={{paddingRight: 80 + 'px',}}>Faster Delivery</p>
                                        <Link to='/viewmedicinedetailsuser' className="btn btn-info" onClick={() => handleDetails(medicine.id)} >Details</Link> &nbsp;
                                        <button class="btn btn-secondary" key={medicine.id} onClick={() => handleCart(medicine.medicineName,medicine.price,medicine.seller,"Pending",localStorage.getItem("LoginId"))} type="button">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default ViewMedicines;