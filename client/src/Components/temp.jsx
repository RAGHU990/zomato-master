import React from 'react';
import { useLocation } from 'react-router-dom';


const Temp = () => {
const loc = useLocation();
    return (
        <div>
            <h1>Hello this is temp component { loc.pathname }</h1>
        </div>
    )
}

export default Temp;
