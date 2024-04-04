import {React,useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Login = (props) => {

    //set the state of input text of form
    const [credentials, setCredentials] = useState({email:"", password:""});

    //to redirect
    let navigate = useNavigate();

    //POST request to login which takes the updated(state) values of our state/credentails
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login",{
          method: 'POST',
          headers : {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email:credentials.email, password:credentials.password})
        });
        const json = await response.json();
        // console.log(json);
        if (json.success){
            //save authtoken and redirect
            localStorage.setItem('authToken',json.authToken);
            navigate("/");
            props.showAlert("Logged in successfully","success");
        }
        else{
            props.showAlert("Invalid credentials","danger");
        }
    }

    //to update the state of text as user types
    const onChange= (e) =>{
        setCredentials({...credentials,[e.target.name]: e.target.value});  
    }

    return <div className="container" style={{ "width": "40vw", "height": "55vh", "backgroundColor" : "#292929", "color" : "white" , "paddingTop" : "30px","marginTop": "50px"}}>
        <h2  style={{"margin" :"10px", "textAlign" : "center"}}>Login to continue</h2>
    
        <form onSubmit={handleSubmit} style={{"margin" : "10px" , "paddingTop" : "15px"}} className='d-flex flex-column gap-2 align-items-center mt-4' >
          
            <div className="mb-1">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" value={credentials.email} style={{"width": "300px"}} name="email" onChange={onChange} className="form-control" id="email" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-1">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" value={credentials.password} style={{"width": "300px"}} name="password" onChange={onChange} className="form-control" id="password" />
            </div>
            <button type="submit" disabled={credentials.email.length === 0 || credentials.password.length < 5} className="btn btn-secondary mt-4">Submit</button>

        </form>
    </div>;
};

export default Login;