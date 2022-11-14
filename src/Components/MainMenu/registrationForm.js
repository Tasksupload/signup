import React, {useState,setState} from 'react';
import './style.css'
function RegistrationForm() {
    
    const [data,setdata]=useState({
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        confirmPassword:''
    
    })

    const {firstname,lastname,email,password,confirmPassword}=data;
    const changeHandler=e=>
    {
    setdata({...data,[e.target.name]:[e.target.value]})
    }

    const submitHandler=e=>{
    e.preventDefault()
    console.log(data)

    // const [firstName, setFirstName] = useState(null);
    // const [lastName, setLastName] = useState(null);
    // const [email, setEmail] = useState(null);
    // const [password,setPassword] = useState(null);
    // const [confirmPassword,setConfirmPassword] = useState(null);
    // const [number,setnumber] = useState(null);

   
    // const handleInputChange = (e) => {
    //     const {id , value} = e.target;
    //     if(id === "firstName"){
    //         setFirstName(value);
    //     }
    //     if(id === "lastName"){
    //         setLastName(value);
    //     }
    //     if(id === "email"){
    //         setEmail(value);
    //     }
    //     if(id === "password"){
    //         setPassword(value);
    //     }
    //     if(id === "confirmPassword"){
    //         setConfirmPassword(value);
    //     }
    //     if(id === "number"){
    //         setnumber(value);
    //     }

    // }

    // const handleSubmit  = () => {
    //     console.log(firstName,lastName,email,password,confirmPassword,number);
    //         }

    return(
        
        <div className="form">
            
                <div className="username">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" name='firstname' value={firstname} onChange = {changeHandler}  placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  type="text" name="lastName" value={lastname}  className="form__input" onChange = {changeHandler} placeholder="LastName"/>
                </div>
                <div className="dob">
                <label className="form__label" for="dob">Date of birth </label>
                        <input type="date" />
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" name="email" className="form__input" value={email} onChange = {changeHandler} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  name="password" value={password} onChange = {changeHandler} placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {changeHandler} placeholder="Confirm Password"/>
                </div>
                {/* <div className="number">
                    <label className="form__label" for="number">number </label>
                    <input className="form__input" type="number" id="number" value={number} onChange = {changeHandler} placeholder="number"/>
                </div> */}
        
            {/* <div class="footer">
                <button onClick={changeHandler} type="submit" class="btn">Register</button>
            </div> */}
        </div>
       
    )       
}
}
export default RegistrationForm;