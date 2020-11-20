import React, {useState} from "react"

export const Counter = () => {

    const[value, setCounter] = useState(0);

    return(
        <>hi
            {value}
        </>
    );
}