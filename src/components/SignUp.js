import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {

    //set the state of input text of form
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
    
    //for confirming password
    const [confirmPWD, setConfirmPWD] = useState("");

    // usenavigate to redirect the pages
    let navigate = useNavigate();

    // console.log(credentials.password)
    // console.log(credentials.cpassword)
    //POST request to sign up which takes the updated(state) values of our state/credentails
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (credentials.password !== credentials.cpassword) {
            setConfirmPWD("Password does not match");
        }
        else {
            const { name, email, password } = credentials;
            // console.log(credentials);
            const response = await fetch("http://localhost:5000/api/auth/createuser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password })
            });
            const json = await response.json();
        

        //set a variable success=true OR false in backend  //after making the post request a Auth-Token will be generated and the token would be sent as response
        //if error occurs in backend var success would be false and error would be shown // if request is successful, AuthToken and var success =True would be sent in response
        //if success is True in the response save the AuthToken to localstorage and redirect to Home 
        if (json.success) {
            //save authtoken and redirect
            localStorage.setItem('authToken', json.authToken);
            navigate("/");
            props.showAlert("Account created successfully", "success");
        }
        else {
            props.showAlert("Invalid credentials", "danger");
        }
    }
    }

    //to update the state of text as user types
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <div className="container mt-3" style={{ "width": "40vw", "height": "75vh", "backgroundColor" : "#292929", "color" : "white" , "paddingTop" : "20px","marginTop": "50px"}}>
            <h2 style={{"margin" :"5px", "textAlign" : "center"}}>Sign Up here</h2>
            <form className='d-flex flex-column gap-2 align-items-center mt-4' onSubmit={handleSubmit} style={{"margin" : "10px" , "paddingTop" : "15px"}}>
                <div className="mb-1">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" style={{"width": "300px"}} className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" minLength={3} required />
                </div>
                <div className="mb-2">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" style={{"width": "300px"}} className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" required />
                    <div id="emailHelp"  className="form-text" style={{"color" : "white"}}>We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-1">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" style={{"width": "300px"}} className="form-control" onChange={onChange} name="password" id="password" minLength={5} required />
                    <div id="emailHelp" className="form-text">Password must be atleast 5 characters</div>
                </div>
                <div className="mb-1">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" style={{"width": "300px"}} className="form-control" onChange={onChange} id="cpassword" name="cpassword" minLength={5} required />
                    <div id="confirmPWD" name="confirmPWD" className="form-text" style={{color: 'red'}} >{confirmPWD}</div>
                </div>
                <button disabled={credentials.password.length < 5 || credentials.cpassword.length < 5} type="submit" className="btn btn-secondary" style={{"marginTop" : "25px"}}>Submit</button>
            </form>
        </div>
    )
}

export default Signup;