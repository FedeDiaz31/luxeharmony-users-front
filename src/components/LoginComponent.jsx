import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/userReducer";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function LoginComponent({ setShowLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await axios({
      url: `${process.env.REACT_APP_API_URL}/users/token`,
      data: { password, email },
      method: "post",
    });
    dispatch(login(response.data.user));
    handleCloseLogin();
    navigate("/");
  };

  return (
    <>
      <div className="w-full tablet:w-[300px] bg-bgPrimaryColor border border-bgFourthColor rounded-b mb-10 pb-3 px-5 pt-12 grid gap-2">
        <div className="flex justify-between w-full items-center">
          <h3 className="font-light text-2xl">Your credentials</h3>
          <div>
            <a
              href="http://localhost:3001"
              target={"_blank"}
              className="text-textPrimary bg-bgFourthColor px-2"
            >
              Admin
            </a>
          </div>
        </div>

        <div className=" flex flex-col gap-3 mt-3">
          <div className="w-full">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full border border-bgFourthColor  h-10 py-1 px-2"
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
            />
          </div>
          <div className="w-full">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-bgFourthColor  h-10 py-1 px-2"
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
            />
          </div>
        </div>
        <div className="mt-5">
          <button className="w-full" onClick={handleCloseLogin}>
            <button
              onClick={handleLogin}
              className="bg-bgPrimaryColor w-full flex justify-center text-center border border-bgFourthColor  py-1"
            >
              Login
            </button>
          </button>
        </div>
        <div className="w-full">
          <Link
            className="bg-bgTertiaryColor flex justify-center w-full text-textPrimary  py-1"
            onClick={handleCloseLogin}
            to={"/signup"}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
}

export default LoginComponent;
