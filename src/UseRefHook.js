
//it is a useEffect hook example not a example of userRefhooks 

import React, {  useEffect, useState } from "react";
const UseRefHook=()=>{
    const [count,setCount]=useState(0);
    useEffect(()=>
    console.log("mounted"))
    function handleclick(){
        setCount(count+1);
    }
    return(
        <>
        <h1>my count value{count}</h1>
        <button onClick={handleclick}>increment</button>
        </>
    )
}
export {UseRefHook}