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
                                    <p>Description : <small>{medicine.description}</small></p>
                                    <div>
                                    <p>Manufactured By : <small>{medicine.seller}</small></p>
                                    </div>
                                    <div>
                                        <p>Price : {medicine.price}</p>
                                    </div>
                                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <p style={{paddingRight: 110 + 'px'}}>Available in Stock</p>
                                        <p style={{paddingRight: 80 + 'px'}}>Faster Delivery</p>
                                        <button class="btn btn-primary me-md-2" type="button">View Details</button>
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