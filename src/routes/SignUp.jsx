import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/userReducer";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [reference, setReference] = useState("");
  const [phone, setPhone] = useState("");

  const [saveDataButton, setSaveDataButton] = useState(true);
  const [formError, setFormError] = useState("");

  const handleFirstname = (event) => {
    const value = event.target.value;
    setFirstname(value);
  };

  const handleLastname = (event) => {
    const value = event.target.value;
    setLastname(value);
  };

  const handlePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handlePhone = (event) => {
    const value = event.target.value;
    setPhone(value);
  };

  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleCountry = (event) => {
    const value = event.target.value;
    setCountry(value);
  };

  const handleState = (event) => {
    const value = event.target.value;
    setState(value);
  };

  const handleCity = (event) => {
    const value = event.target.value;
    setCity(value);
  };

  const handleStreet = (event) => {
    const value = event.target.value;
    setStreet(value);
  };

  const handleReference = (event) => {
    const value = event.target.value;
    setReference(value);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Form validation
    if (!firstname || !lastname || !password || !email) {
      setFormError("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/users", {
        firstname,
        lastname,
        password,
        email,
        country,
        state,
        city,
        street,
        reference,
        phone,
      });
      dispatch(login(response.data.user));
      setSaveDataButton(false);
      setFormError("");
      navigate("/");
    } catch (error) {
      setFormError("An error occurred while submitting the form.");
    }
  };

  return (
    <>
      <div className="grid justify-center pt-[100px] pb-[80px]">
        <div>
          <form
            className="max-w-[700px] mx-5  border-bgFourthColor border rounded font-terciaryFont text-[#737373]"
            onSubmit={handleSubmit}
          >
            <div className="w-full flex justify-center pt-5">
              <h1 className="text-xl font-teciaryFont">Sign Up User</h1>
            </div>
            <div className="px-6 pb-5 py-3">
              <h1 className="text-xl font-teciaryFont">User Data</h1>
              <hr className="mt-2" />
              <div className="">
                <div className="mt-1">
                  <label className="text-xs inline" htmlFor="firstname">
                    Firstname
                  </label>
                  <input
                    className="py-1 mt-1 pl-2 w-full"
                    type="text"
                    name="firstname"
                    placeholder="Enter firstname"
                    value={firstname}
                    onChange={handleFirstname}
                  />
                </div>
                <div className="mt-1">
                  <label className="text-xs inline" htmlFor="lastname">
                    Lastname
                  </label>
                  <input
                    className="py-1 mt-1 pl-2 w-full"
                    type="text"
                    name="lastName"
                    placeholder="Enter lastname"
                    value={lastname}
                    onChange={handleLastname}
                  />
                </div>
                <label className="text-xs inline" htmlFor="email">
                  Email
                </label>
                <input
                  className="py-1 mt-1 pl-2 w-full"
                  type="text"
                  name="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmail}
                />
                <label className="text-xs inline" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="py-1 mt-1 pl-2 w-full"
                  type="text"
                  name="phone"
                  placeholder="Enter phone"
                  value={phone}
                  onChange={handlePhone}
                />
                <label className="text-xs inline" htmlFor="password">
                  Password
                </label>
                <input
                  className="py-1 border rounded mt-1 pl-2 w-full"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={handlePassword}
                />
              </div>
              <div className="mt-5">
                <h1 className="text-xl font-teciaryFont">Shipping Data</h1>
                <hr className="mt-2" />
                <label className="text-xs inline" htmlFor="country">
                  Country
                </label>
                <input
                  className="py-1 mt-1 pl-2 w-full"
                  type="text"
                  name="country"
                  placeholder="Enter country"
                  value={country}
                  onChange={handleCountry}
                />
                <label className="text-xs inline" htmlFor="state">
                  State
                </label>
                <input
                  className="py-1 mt-1 pl-2 w-full"
                  type="text"
                  name="state"
                  placeholder="Enter state"
                  value={state}
                  onChange={handleState}
                />
                <label className="text-xs inline" htmlFor="city">
                  City
                </label>
                <input
                  className="py-1 mt-1 pl-2 w-full"
                  type="text"
                  name="city"
                  placeholder="Enter city"
                  value={city}
                  onChange={handleCity}
                />
                <label className="text-xs inline" htmlFor="street">
                  Street
                </label>
                <input
                  className="py-1 mt-1 pl-2 w-full"
                  type="text"
                  name="street"
                  placeholder="Enter street"
                  value={street}
                  onChange={handleStreet}
                />
                <label className="text-xs inline" htmlFor="reference">
                  Reference
                </label>
                <input
                  className="py-1 mt-1 pl-2 w-full"
                  type="text"
                  name="reference"
                  placeholder="Enter reference"
                  value={reference}
                  onChange={handleReference}
                />
              </div>
              <button className="bg-bgTertiaryColor text-textPrimary p-2   mt-4 font-primaryFont">
                SAVE DATA
              </button>
            </div>
            {formError && <div className="text-red-600">{formError}</div>}
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
