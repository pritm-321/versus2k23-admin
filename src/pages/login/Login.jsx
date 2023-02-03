import { useState } from "react";
import "./login.scss";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section>
      <div className="box">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>

        <div className="container">
          <div className="form">
            <h2 style={{textAlign:"center"}}>LOGIN</h2>
            <form action="">
              <div className="inputBx">
                <input type="text" required="required" />
                <span>Login</span>
                <i className="bi bi-person-circle fas"></i>
              </div>
              <div className="inputBx password">
                <input
                  id="password-input"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required="required"
                />
                <span>Password</span>
                <a
                  href="#"
                  className={showPassword ? "password-control hide" : "password-control view"}
                  onClick={() => setShowPassword(!showPassword)}
                ></a>
                <i className="bi bi-key-fill fas"></i>
              </div>
              <div className="inputBx">
                <div className="sub-btn">                <input type="submit" value="Log in" disabled /></div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
