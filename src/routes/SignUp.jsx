import { useState } from "react";
import axios from "axios";

function SignUp() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

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

  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Form validation
    if (!firstname || !lastname || !password || !email) {
      setFormError("Please fill in all fields.");
      return;
    }

    try {
      await axios.post("http://localhost:8000/users", {
        firstname,
        lastname,
        password,
        email,
      });

      setSaveDataButton(false);
      setFormError("");
    } catch (error) {
      setFormError("An error occurred while submitting the form.");
    }
  };

  if (saveDataButton) {
    return (
      <div className="pl-6 pt-[70px] w-[70vw] h-[100vh] mb-10 bg-bgSecondaryColor text-bgPrimaryColor m-auto flex items-center justify-center">
        <form className=" text-center" onSubmit={handleSubmit}>
          <div>
            <h1 className="text-[35px] mb-3 mt-6 font-primaryFont">Sign Up</h1>
            <label className="text-sm block" htmlFor="firstname">
              Firstname
            </label>
            <input
              className="py-2 pl-2 bg-bgPrimaryColor text-bgSecondaryColor "
              type="text"
              name="firstname"
              placeholder="Enter firstname"
              value={firstname}
              onChange={handleFirstname}
            />

            <label className="text-sm block" htmlFor="lastname">
              Lastname
            </label>
            <input
              className="py-2 pl-2 bg-bgPrimaryColor text-bgSecondaryColor "
              type="text"
              name="lastName"
              placeholder="Enter lastname"
              value={lastname}
              onChange={handleLastname}
            />

            <label className="text-sm block" htmlFor="email">
              Email
            </label>
            <input
              className="py-2 pl-2 bg-bgPrimaryColor text-bgSecondaryColor "
              type="text"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmail}
            />
            <label className="text-sm block" htmlFor="password">
              Password
            </label>
            <input
              className="py-2 pl-2 bg-bgPrimaryColor text-bgSecondaryColor "
              type="password"
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={handlePassword}
            />
          </div>
          {formError && <div className="text-red-600">{formError}</div>}
          <button className="bg-bgTertiaryColor ml-4 text-textPrimary p-2 my-1 mr-8 mt-8 font-primaryFont">
            SAVE DATA
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h2>FALSE</h2>
      </div>
    );
  }
}

export default SignUp;
