import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { edit } from "../redux/userReducer";
import chevronBack from "../assets/img/chevronBack.svg";

function EditUser() {
  const user = useSelector((state) => state.user);
  const [firstname, setFirstname] = useState(user.firstname);
  const [lastname, setLastname] = useState(user.lastname);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
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

  const handlePhone = (event) => {
    const value = event.target.value;
    setPhone(value);
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
          phone,
        },
      });
      navigate("/profile");
      dispatch(edit(response.data));
    } catch (error) {
      setFormError("An error occurred while submitting the form.");
    }
  };

  return (
    <>
      {" "}
      <div className="w-full flex items-center gap-10 bg-bgSecondaryColor pt-[100px] pl-10 tablet:px-40 pb-10">
        <img
          className="chevron-back-category w-6 h-6 pt-1 cursor-pointer"
          onClick={() => navigate(-1)}
          src={chevronBack}
          alt=""
        />
        <h2 className="text-textPrimary font-light text-3xl">
          Edit your Profile, {firstname ? firstname : "loading"}
        </h2>
      </div>
      <div className="py-[30px] bg-bgPrimaryColor text-textSecondary m-auto tablet:flex items-center justify-center">
        <form className=" text-center" onSubmit={handleSubmit}>
          <div className="grid laptop:flex gap-10 laptop:gap-12">
            <div className="flex  items-center flex-col gap-3">
              <h1 className="text-2xl  font-primaryFont">Change user data</h1>
              <div className="mr-20 gap-3 grid">
                <div className="flex items-center gap-3">
                  <h3
                    className="text-sm  w-[80px] semi-bold font-secondaryFont"
                    htmlFor="firstname"
                  >
                    Firstname
                  </h3>
                  <input
                    className="py-2 pl-2 w-60 text-bgSecondaryColor "
                    type="text"
                    name="firstname"
                    value={firstname}
                    placeholder="Enter firstname"
                    onChange={handleFirstname}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <h3
                    className="text-sm  w-[80px] semi-bold font-secondaryFont"
                    htmlFor="lastname"
                  >
                    Lastname
                  </h3>
                  <input
                    className="py-2 pl-2 w-60 bg-bgPrimaryColor text-bgSecondaryColor "
                    type="text"
                    name="lastName"
                    value={lastname}
                    placeholder="Enter lastname"
                    onChange={handleLastname}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <h3
                    className="text-sm  w-[80px] semi-bold font-secondaryFont"
                    htmlFor="email"
                  >
                    Email
                  </h3>
                  <input
                    className="py-2 pl-2 w-60 bg-bgPrimaryColor text-bgSecondaryColor "
                    type="text"
                    name="email"
                    value={email}
                    placeholder="Enter email"
                    onChange={handleEmail}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <h3
                    className="text-sm w-[80px] semi-bold font-secondaryFont"
                    htmlFor="email"
                  >
                    Phone
                  </h3>
                  <input
                    className="py-2 pl-2 w-60 bg-bgPrimaryColor text-bgSecondaryColor "
                    type="number"
                    name="phone"
                    value={phone}
                    placeholder="Enter number of phone"
                    onChange={handlePhone}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center flex-col gap-3">
              <h1 className="text-2xl font-primaryFont">
                Change shipping data
              </h1>
              <div className="mr-20 gap-3 grid">
                <div className="flex items-center gap-3">
                  <h3
                    className="text-sm w-[80px] semi-bold font-secondaryFont"
                    htmlFor="country"
                  >
                    Country
                  </h3>
                  <input
                    className="py-2 pl-2 w-60 bg-bgPrimaryColor text-bgSecondaryColor "
                    type="text"
                    name="country"
                    value={country}
                    placeholder="Enter country"
                    onChange={handleCountry}
                  />
                </div>
                <div className="flex items-center  gap-3">
                  <h3
                    className="text-sm w-[80px] semi-bold font-secondaryFont"
                    htmlFor="state"
                  >
                    State
                  </h3>
                  <input
                    className="py-2 pl-2 w-60 bg-bgPrimaryColor text-bgSecondaryColor "
                    type="text"
                    name="state"
                    value={state}
                    placeholder="Enter state"
                    onChange={handleState}
                  />
                </div>
                <div className="flex items-center  gap-3">
                  <h3
                    className="text-sm w-[80px] semi-bold font-secondaryFont"
                    htmlFor="city"
                  >
                    City
                  </h3>
                  <input
                    className="py-2 pl-2 w-60 bg-bgPrimaryColor text-bgSecondaryColor "
                    type="text"
                    name="city"
                    value={city}
                    placeholder="Enter city"
                    onChange={handleCity}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <h3
                    className="text-sm w-[80px] semi-bold font-secondaryFont"
                    htmlFor="Street"
                  >
                    Street
                  </h3>
                  <input
                    className="py-2 pl-2 w-60 bg-bgPrimaryColor text-bgSecondaryColor "
                    type="text"
                    name="street"
                    value={street}
                    placeholder="Enter street"
                    onChange={handleStreet}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <h3
                    className="text-sm w-[80px] semi-bold font-secondaryFont"
                    htmlFor="referece"
                  >
                    Reference
                  </h3>
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
            </div>
          </div>
          <button
            className="bg-bgTertiaryColor w-[200px] text-textPrimary p-2 mt-10 text-center font-primaryFont"
            // type="submit"
            onClick={() => setChangeInfoButton(false)}
          >
            SAVE DATA
          </button>
        </form>
      </div>
    </>
  );
}

export default EditUser;
