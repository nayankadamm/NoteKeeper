import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Login = () => {
    let navigate= useNavigate() 
    const [creds,setcreds] = useState({
        email:"",
        password:"",
    })
    const handelchange =(e)=>{
        const{name,value} = e.target
        setcreds({...creds,[name]:value})
    }
    const handlesubmit = async(e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:5000/api/auth/login",{
            method:"post",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({email:creds.email,password:creds.password})
        }
        )
       
        const json = await response.json()
        if(json.success)
        {
            localStorage.setItem("token",json.authtoken)
        
            navigate("/")
            alert("logged in Succesfully")
            
        }
        else{
            alert("invalid creds")
        }
        window.location.reload(true)
    }
    
   
    return (
        <div>

        <h2 className="m-3">Enter Login Details</h2>
            <form onSubmit={handlesubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={handelchange} type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={creds.email}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onChange={handelchange} type="password" className="form-control" id="password" name="password"  value={creds.password}/>
                </div>
                <div className="mb-3 form-check">

                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}
export default Login