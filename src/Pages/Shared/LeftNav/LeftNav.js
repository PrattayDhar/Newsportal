import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const LeftNav = () => {
    const [cetagory,setCetagory]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/news-cetagory')
        .then(res=>res.json())
        .then(data=>setCetagory(data))
    },[])
    return (
        <div>
            <h5>All Cetagory:{cetagory.length}</h5>
            <div>
                {
                    cetagory.map(perCat=> <p key={perCat.id}>
                        <Link to={`/cetagory/${perCat.id}`}>{perCat.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;