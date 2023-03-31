/* import {GoogleLogin,GoogleLogout, useGoogleLogout} from "react-google-login";
 */
import { useEffect, useState } from "react";
/* import { gapi } from "gapi-script"; */
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/userReducer";

function SignUp() {
  /*   const clientId =
    "638266393217-8c04a7uddur82gh6brr823e0d91746hv.apps.googleusercontent.com";
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
 */
  /* useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientId,
      });
    };
    gapi.load("client:auth2", start);
  }, []);
 */
  /*   async function onSuccess(response) {
    const res = await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/users`,
      data: response.profileObj,
    });
    console.log(res);
    dispatch(login(res.data.user));
    navigate("/");
  } */

  /*   function onFailure() {
    console.log("no funciono");
  } */

  return (
    <div className="w-full h-full absolute flex items-center justify-center">
      {/* <GoogleLogin clientId={clientId} onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={'single_host_policy'} isSignedIn={true} /> */}
    </div>
  );
}

export default SignUp;
