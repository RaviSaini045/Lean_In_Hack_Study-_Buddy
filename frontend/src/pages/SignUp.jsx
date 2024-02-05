import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SIGNUP_URL } from "../utils/constants";
const SignUp = () => {
    const name = useRef("");
    const email = useRef("");
    const username = useRef("");
    const password = useRef("");
    const [avatar, setAvatar] = useState(null);
    const [data, setData] = useState(null);
    const navigate = useNavigate()
    const signupHandler = async () => {
        const inputData = await fetch( SIGNUP_URL, {
          method: "POST",
          body: {
            username,
            email,
            name,
            avatar,
            password,
          },
        });
        const parsedData = await inputData.json();
        setData(parsedData);
    }

    return (
      <>
        <label>Sign Up Now </label>
        <label>Full-Name:</label>
        <input type="text" placeholder="FullName" ref={name} />
        <label>Email-Id:</label>
        <input type="email" placeholder="EmailId" ref={email} />
        <label>UserName:</label>
        <input type="text" placeholder="UserName" ref={username} />
        <input
          type="file"
          placeholder="Profile Picture"
          accept="image/png, image/jpeg, image/jpg"
          onChange={function (e) {
            setAvatar(URL.createObjectURL(e.target.files[0]));
          }}
        />
        <label>Password:</label>
        <input type="password" placeholder="Password" ref={password} />
        <button onClick={signupHandler}>SignUp</button>
        {data !== null && data.statusCode === 200 ? (
          navigate("/login")
        ) : (
          <p>{data?.message}</p>
        )}
        <p>
          {" "}
          Already have an Account?{" "}
          <Link relative="path"  to={"login"}>
            Login
          </Link>
        </p>
      </>
    );
}

export default SignUp;