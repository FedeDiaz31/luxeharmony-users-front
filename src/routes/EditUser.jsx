import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function EditUser() {
  const user = useSelector((state) => state.user);

  const [firstname, setFirstname] = useState(user.firstname);
  const [lastname, setLastname] = useState(user.lastname);
  const [email, setEmail] = useState(user.email);
  const [changeInfoButton, setChangeInfoButton] = useState(false);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setUser({ ...user, [name]: value });
  // };

  console.log(user);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}/users/${user.id}`,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      data: { firstname, lastname, email },
    });
  };

  if (changeInfoButton) {
    return (
      <div className="pl-6 pt-[70px] w-[70vw] h-[100vh] mb-10 bg-bgSecondaryColor text-bgPrimaryColor m-auto flex items-center justify-center">
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

          {/* <div>
          <h2>Shipping Data</h2>
          <label htmlFor="street"></label>
          <input
            type="text"
            name="reference"
            value={userFields.addresses[0].street}
            onChange={(event) =>
              setUser({ ...user, addresses: event.target.value })
            }
          />

          <label htmlFor="reference"></label>
          <input type="text" name="reference" value={userFields.addresses[0].reference} />

          <label htmlFor="city"></label>
          <input type="city" name="city" value={userFields[0].addresses.city} />

          <label htmlFor="state"></label>
          <input type="text" name="state" value={userField[0].addresses.state} />

          <label htmlFor="country"></label>
          <input type="text" name="country" value={userField[0].addresses.country} />
        </div> */}
          <button
            className="bg-bgTertiaryColor ml-4 text-textPrimary p-2 my-1 mr-8 mt-8 font-primaryFont"
            type="submit"
            onClick={() => setChangeInfoButton(false)}
          >
            SAVE DATA
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="background-profile w-[100vw] h-[100vh] pt-[200px]">
        {" "}
        <div className="pl-6 pb-10 pt-[70px] w-[400px] mb-10 bg-bgPrimaryColor text-bgSecondaryColor m-auto flex flex-col items-center justify-center shadow-lg rounded">
          <h2 className="text-[35px] mb-3 mt-6 font-primaryFont">
            Hi {firstname ? firstname : "loading"}!
          </h2>
          <div className="flex flex-col text-center">
            <div className="flex">
              <span className="mr-3">Name:</span>
              <h2>{firstname}</h2>
            </div>
            <div className="flex">
              <span className="mr-3">Lastname:</span>
              <h2>{lastname}</h2>
            </div>
            <div className="flex">
              <span className="mr-3">E-Mail:</span>
              <h2>{email}</h2>
            </div>
            <button
              className="bg-bgTertiaryColor ml-4 text-textPrimary p-2 my-1 mr-8 mt-8 font-primaryFont"
              onClick={() => setChangeInfoButton(true)}
            >
              CHANGE DATA
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditUser;
