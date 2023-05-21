import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () =>{
    const [query,setQuery] = useState("");
    const [result,setResult] = useState([]);

    const handleSearch = async (e) =>{
        e.preventDefault();
        try
        {
            const res = await axios.get(`http://localhost:5185/api/Medicine/Search?query=${query}`);
            setResult(res.data);
        }
        catch(error)
        {
            console.log(error);
        }
    };
    return(
        <>
        <div>
            <h1>Welcome to dashboard</h1>
        </div>
        <form onSubmit={handleSearch}>
            <input
            style={{textAlign:'center'}}
            type="text"
            value={query}
            id="form3Example3c"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-success btn-sm" type="submit">Search</button>
        </form>
        {result.map(item =>(
            <div key={item.id}>
                <div class="card" >
                        <div class="row g-0" style={{ paddingBottom: 5 + 'px' }}>
                            <div class="col-md-4">
                                <img src={item.image} class="card-img" alt="Card Image" style={{ height: 200 + 'px', width: 250 + 'px', paddingTop: 10 + 'px' }} />
                                <h5 class="card-title">{item.medicineName}</h5>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                <div><p class="btn btn-info btn-sm" style={{marginBottom:5+'px'}} >Description : </p>{item.description}</div>
                                    <div><br></br>
                                    <div><p class="btn btn-secondary btn-sm" style={{marginBottom:5+'px'}}>Manufactured By : </p><b>{item.seller}</b></div>
                                    </div><br></br>
                                    <div>
                                        <p class="btn btn-danger btn-sm" style={{marginBottom:5+'px'}}>Price : <b>{item.price}</b></p>
                                    </div>
                                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <p style={{paddingRight: 110 + 'px',color:'darkgreen'}}>Available in Stock</p>
                                        <p style={{paddingRight: 80 + 'px',}}>Faster Delivery</p>
                                        <Link to='/viewmedicinedetailsuser' className="btn btn-info" >View Details</Link> &nbsp;
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        ))}
        </>
    );
}

export default Dashboard;