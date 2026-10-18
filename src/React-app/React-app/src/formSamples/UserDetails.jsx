import { useState } from "react"



export const UserDetails = () => {
  
    const[userName,setUserName] = useState("Kaarthik");
    const[userAge, setUserAge] = useState(19); 
  
    const updateUserName = () =>{
        userName == "Karthi" ? setUserName("Kaarthik") : setUserName("Karthi");
    };

    const updateUserAge = () =>{
        userAge == 19 ? setUserAge(25) : setUserAge(19)
    };




    return (
    <>
        <h1>User Details</h1>
        <h3>Name : {userName}</h3>
        <h3>Age : {userAge}</h3>
        <button onClick={updateUserName}>Update User Name</button>
        <button onClick={updateUserAge}>Update User Age</button>
    </>

)
}
