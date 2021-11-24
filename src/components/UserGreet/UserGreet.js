import React, { useState } from 'react';

//! Условный рендеринг 

const UserGreet = () => {
    const [isLogged, setLogged] = useState(true)  

    //! fourth way to use if/else in React - We use this one more than others 
    return (
        <div>
            {
                isLogged && <h1> Welcome Kani!</h1> 
            }
        </div>
    )

    //!third way to use if/else in React
    // return (
    //     <div>
    //         {
    //             isLogged ?  <h1> Welcome Kani!</h1> : <h1> Welcome User!</h1>
    //         }
    //     </div>
    // )
    
    //!first way to use if/else in React
    // let welcome 

    // if(isLogged){
    //     welcome =  <h1> Welcome Kani!</h1>
    // }else{
    //     welcome =  <h1> Welcome User!</h1>
    // }

    //!second way to use uf/else in React
    // return (
    //     <div>{welcome}</div>
    // )
    // if(isLogged){
    //     return (
    //         <div>
    //            <h1> Welcome Kani!</h1>
    //         </div>
    //     );
    // }else{
    //     return (
    //         <div>
    //            <h1> Welcome User!</h1>
    //         </div>
    //     );
    // }

};

export default UserGreet; 