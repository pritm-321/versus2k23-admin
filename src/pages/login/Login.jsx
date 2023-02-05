import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/userActions";
import "./login.scss";
import { Bars } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

const userLogin =useSelector((state) => state.userLogin);
const {loading, error, userInfo} = userLogin;

useEffect(()=>{
  if(userInfo){
    navigate('/home')
  }
  if(error){
    toast.error(
      error,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme:"dark",
      }
    )
  }
},[userInfo, navigate, error])

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(username, password);
    dispatch(login(username, password));
  };



  return (
    <section>
      <div className="box">
      <ToastContainer />
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="container">
        {loading ? (
          <Bars
            height="80"
            width="80"
            color="#268dcd"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : (
          <div className="form">
            <h2 style={{ textAlign: "center" }}>LOGIN</h2>
            <form action=""  onSubmit={submitHandler}>
              <div className="inputBx">
                <input type="text" name="username" onChange={(e)=> setUsername(e.target.value)} required="required" />
                <span>Login</span>
                <i className="bi bi-person-circle fas"></i>
              </div>
              <div className="inputBx password">
                <input
                  id="password-input"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required="required"
                  onChange={(e)=> setPassword(e.target.value)}
                />
                <span>Password</span>
                <a
                  href="#"
                  className={
                    showPassword
                      ? "password-control hide"
                      : "password-control view"
                  }
                  onClick={() => setShowPassword(!showPassword)}
                ></a>
                <i className="bi bi-key-fill fas"></i>
              </div>
              <div className="inputBx">
                <div className="sub-btn">
                  {" "}
                  <input type="submit"   />
                </div>
              </div>
            </form>
          </div>)}
        </div>
      </div>
    </section>
  );
};

export default Login;
