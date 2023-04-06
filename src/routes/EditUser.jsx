import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { edit } from "../redux/userReducer";

function EditUser() {
  const user = useSelector((state) => state.user);
  const [firstname, setFirstname] = useState(user.firstname);
  const [lastname, setLastname] = useState(user.lastname);
  const [email, setEmail] = useState(user.email);
  const [country, setCountry] = useState(user.address.country);
  const [state, setState] = useState(user.address.state);
  const [city, setCity] = useState(user.address.city);
  const [street, setStreet] = useState(user.address.street);
  const [reference, setReference] = useState(user.address.reference);
  const [changeInfoButton, setChangeInfoButton] = useState(false);

  const [formError, setFormError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFirstname = (event) => {
    const value = event.target.value;
    setFirstname(value);
  };

  const handleLastname = (event) => {
    const value = event.target.value;
    setLastname(value);
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
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!firstname || !lastname || !email) {
      setFormError("Please fill in all fields.");
      return;
    }
    try {
      const response = await axios({
        method: "put",
        url: `${process.env.REACT_APP_API_URL}/users/${user.id}`,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        data: {
          firstname,
          lastname,
          email,
          country,
          state,
          city,
          street,
          reference,
        },
      });
      navigate("/profile");
      dispatch(edit(response.data));
      console.log("response" + response.data);
    } catch (error) {
      setFormError("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="pl-6 pt-[70px] w-[100vw] h-[100vh]  bg-bgSecondaryColor text-bgPrimaryColor m-auto flex items-center justify-center">
      <form className=" text-center" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-40">
          <div>
            <h1 className="text-[35px] mb-3 mt-6 font-primaryFont">
              Change user data
            </h1>
            <label className="text-sm semi-bold block mb-2" htmlFor="firstname">
              Firstname
            </label>
            <input
              className="py-2 pl-2 w-60 bg-bgPrimaryColor text-bgSecondaryColor "
              type="text"
              name="firstname"
              value={firstname}
              placeholder="Enter firstname"
              onChange={handleFirstname}
            />

            <label className="text-sm semi-bold block mb-2" htmlFor="lastname">
              Lastname
            </label>
            <input
              className="py-2 pl-2 w-60 bg-bgPrimaryColor text-bgSecondaryColor "
              type="text"
              name="lastName"
              value={lastname}
              placeholder="Enter lastname"
              onChange={handleLastname}
            />

            <label className="text-sm semi-bold block mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="py-2 pl-2 w-60 bg-bgPrimaryColor text-bgSecondaryColor "
              type="text"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={handleEmail}
            />
          </div>
          <div>
            <h1 className="text-[35px] mb-3 mt-6 font-primaryFont">
              Change shipping data
            </h1>
            <label className="text-sm semi-bold block mb-2" htmlFor="country">
              Country
            </label>
            <input
              className="py-2 pl-2 w-60 bg-bgPrimaryColor text-bgSecondaryColor "
              type="text"
              name="country"
              value={country}
              placeholder="Enter country"
              onChange={handleCountry}
            />

            <label className="text-sm semi-bold block mb-2" htmlFor="state">
              State
            </label>
            <input
              className="py-2 pl-2 w-60 bg-bgPrimaryColor text-bgSecondaryColor "
              type="text"
              name="state"
              value={state}
              placeholder="Enter state"
              onChange={handleState}
            />

            <label className="text-sm semi-bold block mb-2" htmlFor="city">
              City
            </label>
            <input
              className="py-2 pl-2 w-60 bg-bgPrimaryColor text-bgSecondaryColor "
              type="text"
              name="city"
              value={city}
              placeholder="Enter city"
              onChange={handleCity}
            />

            <label className="text-sm semi-bold block mb-2" htmlFor="Street">
              Street
            </label>
            <input
              className="py-2 pl-2 w-60 bg-bgPrimaryColor text-bgSecondaryColor "
              type="text"
              name="street"
              value={street}
              placeholder="Enter street"
              onChange={handleStreet}
            />

            <label className="text-sm semi-bold block mb-2" htmlFor="referece">
              Reference
            </label>
            <input
              className="py-2 pl-2 w-60  bg-bgPrimaryColor text-bgSecondaryColor "
              type="text"
              name="reference"
              value={reference}
              placeholder="Enter reference"
              onChange={handleReference}
            />
          </div>
        </div>
        <button
          className="bg-bgTertiaryColor w-[200px] text-textPrimary p-2 mt-3 tablet:mt-8 text-center font-primaryFont"
          // type="submit"
          onClick={() => setChangeInfoButton(false)}
        >
          SAVE DATA
        </button>
      </form>
    </div>
  );
}

export default EditUser;
