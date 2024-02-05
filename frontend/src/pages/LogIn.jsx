import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_URL } from "../utils/constants";


const LogIn = () => {
    const username = useRef("");
    const password = useRef("");
    const [data, setData] = useState(null);
    const navigate = useNavigate();
    const loginHandler = async () => {
        const inputData = await fetch(LOGIN_URL, {
          method: "POST",
          body: {
            username,
            password,
          },
        });
        const parsedData = await inputData.json();
        setData(parsedData);
    }

    return (
        <>
            <h1>Login Now</h1>
            <label>UserName</label>
            <input type="text" placeholder="username" ref={username}/>
            <label>Password</label>
            <input type="passsword" placeholder="password" ref={password} />
            <button onClick={loginHandler}>SignIn</button>
            {(data !== null && data.statusCode === 200) ? navigate("/home") : <p>{data.message}</p> } 
            <p>Didn't have an Account? <Link to={"signup"}>Signup</Link> </p>
        </>
    )
}

export default LogIn;