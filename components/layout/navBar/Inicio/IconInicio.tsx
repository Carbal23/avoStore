import Avocado from "components/SVGicons/Avocado";
import Link from "next/link";
import React from "react";
import styled from "./iconInicio.module.css"

const IconInicio = ()=>{
    return (
        <Link href="/" className={styled.container}>
            <Avocado/>
            <p>AVO STORE</p>
        </Link>
        
    )
}

export default IconInicio;