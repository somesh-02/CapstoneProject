import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DefaultPage = () => {
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

    return (
        <>
        <div class="text-center">
        <p style={{fontSize:20+'px',backgroundColor:'antiquewhite',padding:5+'px'}} >Access the wide variety of Medicines...</p>
    </div>
    <div class="album py-5 bg-body-tertiary">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {medicinesList.map(item => (
                    <div class="col">
                        <div class="card shadow-sm .hover-shadow">
                            <img src={item.image} width="100%" height="225" />
                            <div class="card-body">
                                <p class="card-text">{item.medicineName}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </>
    )
}

export default DefaultPage;

