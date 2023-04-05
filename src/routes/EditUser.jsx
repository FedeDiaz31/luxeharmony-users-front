import { useEffect, useState } from "react";
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
        data: { firstname, lastname, email },
      });
      navigate("/profile");
      dispatch(edit(response.data));
    } catch (error) {
      setFormError("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="pl-6 pt-[70px] w-[100vw] h-[100vh] mb-10 bg-bgSecondaryColor text-bgPrimaryColor m-auto flex items-center justify-center">
      <form className=" text-center" onSubmit={handleSubmit}>
        <div>
          <h1 className="text-[35px] mb-3 mt-6 font-primaryFont">
            Changing user information
          </h1>
          <label className="text-sm block" htmlFor="firstname">
            Firstname
          </label>
          <input
            className="py-2 pl-2 bg-bgPrimaryColor text-bgSecondaryColor "
            type="text"
            name="firstname"
            value={firstname}
            placeholder="Enter firstname"
            onChange={handleFirstname}
          />

          <label className="text-sm block" htmlFor="lastname">
            Lastname
          </label>
          <input
            className="py-2 pl-2 bg-bgPrimaryColor text-bgSecondaryColor "
            type="text"
            name="lastName"
            value={lastname}
            placeholder="Enter lastname"
            onChange={handleLastname}
          />

          <label className="text-sm block" htmlFor="email">
            Email
          </label>
          <input
            className="py-2 pl-2 bg-bgPrimaryColor text-bgSecondaryColor "
            type="text"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={handleEmail}
          />
        </div>
        <button
          className="bg-bgTertiaryColor ml-4 text-textPrimary p-2 my-1 mr-8 mt-8 font-primaryFont"
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
