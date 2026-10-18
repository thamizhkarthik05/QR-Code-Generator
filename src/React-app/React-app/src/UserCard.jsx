
const data = [
{
    name : "K R Keerthiswaran",
    city : "Vaaniyambadi",
    description : "Full Stack Developer",
    skill : ["C#", "Blazor" , "HTML" ,
        "CSS" , "JavaScript" , "MongoDB", "SQL"],
    online : false,
    profile : "images/Keerthiswaran.png",    
},


{
    name : "B Harshith",
    city : "Palakkad",
    description : "App Developer",
    skill : ["Flutter", "BackEnd Developer" , "HTML" ,
        "CSS" , "JavaScript" , "Node Js", "Express"],
    online : true,
    profile : "images/Harshith.jpg",    
},

{
    name : "M Kaarthik",
    city : "Chennai",
    description : "Front-end developer",
    skill : ["HTML" ,"CSS" , "JavaScript" , "React", "Radio Jockey"],
    online : false,
    profile : "images/Karthik.png",
},



]



function User(props){
    return (

        <>
        <div className="card-container">
            <span className={props.online ? "pro online" : "pro offline" }>{props.online ? "ONLINE" : "OFFLINE"}</span>
            <img src={props.profile}  className="img"  alt="Image" />
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.description}</p>

            <div className="button">
                <button className="primary">Message</button>
                <button className="primary outline">Following</button>
            </div>   

            <div className="skills">
                <h6>Skills</h6>
                <ul>
                    {props.skills.map((skill,index) => (
                        <li key={index}>{skill}</li>

                    ))}
                </ul>
            </div>         
        </div>
        </>
    );
}


export const UserCard = () => {
  return (
        <>
            {
                data.map((user,index) => (

                    <User key={index} name = {user.name} city = {user.city} description={user.description} online={user.online} profile={user.profile} skills={user.skill}/>
                ))
            }
        </>
    
)
}
