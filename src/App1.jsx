// import React,{useState} from 'react';

// const App1 =()=>{

// const [myname,setmyname] = useState();
// const LetsChange = (event) =>{
// setmyname(event.target.value)

// }
// const [mylastname,setmylastname] = useState();
// const LetsChangelastname = (event) =>{
//     setmylastname(event.target.value)
// }
// const[myfulllastname,setmyfulllastname] = useState();

// const [myfullname,setmyfullname] = useState();
// const Submit = () =>{
//     setmyfullname(myname)
//     setmyfulllastname(mylastname)
// }
//     return (
//         <>
// <h1>Hello {myfullname} {myfulllastname}</h1>
// <input type='text' placeholder = 'Enter first name' name = 'firstname' onChange = {LetsChange} />
// <input type='text' placeholder = 'Enter last  name' name = 'lastname' onChange = {LetsChangelastname} />

// <button onClick = {Submit}> Submit</button>
//         </>
//     )
// }
// export default App1;




import React,{useState} from 'react';


const App1  = () => {
const [fullName,setFullName] = useState({
    fname:'',
    lname:'',
    email:'',
    phone:'',
})

const inputEvent = (event)=>{
// console.log(event.target.value);//returns value inside the  input filed => Gouse
// console.log(event.target.placeholder);//returns value inside the place holder => enter your first name
// console.log(event.target.name);//returns value inside the name => fname


//  const name = event.target.name;
//  const value = event.target.value;
//inspite of writting the above two lines we can write this singe line

// const{value,name} = event.target;


//  setFullName((anyValue) => {



// inspite of writing this all if else  code with the help of spreacd operator i can write this whole code in two lines

const {name, value} = event.target;
setFullName((anyValue) => {
    return{
        ...anyValue,
        [name]:value,
    }
})





    //    console.log(anyValue)//it stotres the previous data like this fname='',lname=''  '' which are passed inside the usestate as the obbject"
  //if i write "anyValue.fname" then i get the value inside the fname
  //if i write "anyValue.lname" tthe i get the value of lname 
// if(name === 'fname'){
//     return{
//         fname:value,
//         lname:anyValue.lname,
//         email:anyValue.email,
//         phone:anyValue.phone,
//     }
// }
// else if(name === 'lname'){
//     return{
//         fname:anyValue.fname,
//         lname: value,
//         email:anyValue.email,
//         phone:anyValue.phone,
//     }
// }
// else if(name === 'email'){
//     return{
//         fname:anyValue.fname,
//         lname: anyValue.lname,
//         email: value,
//         phone:anyValue.phone,
//     }
// }
// else if(name === 'phone'){
//     return{
//         fname:anyValue.fname,
//         lname: anyValue.lname,
//         email: anyValue.email,
//         phone:value,
//     }
// }
// })
 
}


const onSubmits = (event) => {
    event.preventDefault();
    alert("form Submitted")
};


    return(
        <>
        <div className = 'main-div'>
        <form onSubmit = {onSubmits}>
        <div>
        <h1>
          Helllo {fullName.fname}  {fullName.lname}
        </h1>,

        <p>{fullName.email} </p>
        <p>{fullName.phone} </p>
        
        <input
            type='text'
            placeholder ="Enter your first name"
            name = "fname"
            onChange = {inputEvent}
            value = {fullName.fname}
        />
        <br/>
        <input
            type='text'
            placeholder ="Enter your last name"
            name = "lname"
            onChange = {inputEvent}
            value = {fullName.lname}
        />
         <input
            type='email'
            placeholder ="Enter your email"
            name = "email"
            onChange = {inputEvent}
            value = {fullName.email}
            autoComplete= 'on'
        />
         <input
            type='number'
            placeholder ="Enter your mobile number"
            name = "phone"
            onChange = {inputEvent}
            value = {fullName.phone}
        />
        <br/>
        <button type='submit' >Click Me</button>
      </div>
        </form>
        </div>
        </>
    )
}
export default App1;





























