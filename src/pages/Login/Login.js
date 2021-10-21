import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
const URL = "https://superhero-api1.herokuapp.com/";

function Login({ setIsAuth }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const config = {
      url: URL,
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      data: JSON.stringify({ email: email, password: password }),
    };
    const response = await axios(config).catch((err) => err);
    if (response.data.error) {
      alert(response.data.error);
    } else {
      localStorage.setItem("token", response.token);
      setIsAuth(true);
    }
  }

  return (
    <div className="containerlogin">
      <form className="box login p-5 formcontainer" onSubmit={handleSubmit}>
        <h2 className="formcontainerh2">Welcome to a posts blog</h2>
        <div className="field py-3">
          <p className="control">
            <input
              className="input"
              type="email"
              placeholder="challenge@alkemy.org"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </p>
        </div>
        <div className="field py-3">
          <p className="control">
            <input
              className="input"
              type="password"
              placeholder="Password: react"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </p>
        </div>
        <div className="field py-3">
          <p className="control">
            <button
              variant="contained"
              color="primary"
              type="submit"
              className="btn btn-success"
            >
              Login
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
export default Login;
