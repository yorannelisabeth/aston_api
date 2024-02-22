import React from "react";
import { Link } from "react-router-dom";

const Errorpage = ({ error})=>{
    return (
        <div className="errorContainer">
            <h2 style={{marginBottom:"30px"}}>{error}</h2>
            <link to="/">Go Home</link>

        </div>
    );
};
export default Errorpage;
