import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const SignUp = () => {
    const navigate = useNavigate()
    const [creds, setcreds] = useState({
        name:"",
        email: "",
        password: ""
    })


    const handlechange = (e) => {
        const { name, value } = e.target

        setcreds({ ...creds, [name]: value })

    }
    const handlesubmit = async (e) => {
        e.preventDefault()

        const response = await fetch("http://localhost:5000/api/auth/createuser",{
            method:"Post",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify({name:creds.name,email:creds.email,password:creds.password})
        
        }
        )
        const json =  await response.json()
        console.log(json);
        if(json.success===true)
        {
            navigate("/login")
            alert("Signed up succesfully")
        }
        else{
            alert("Invalid Details")
        }




    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
            <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Enter Name</label>
                    <input onChange={handlechange} type="text" className="form-control" id="email" aria-describedby="emailHelp" name="name" value={creds.name}  />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={handlechange} type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onChange={handlechange} type="password" className="form-control" id="password" name="password" />
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )

}
export default SignUp