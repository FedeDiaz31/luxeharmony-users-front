import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function EditUser() {
  const user = useSelector((state) => state.user);

  const [firstname, setFirstname] = useState(user.firstname);
  const [lastname, setLastname] = useState(user.lastname);
  const [email, setEmail] = useState(user.email);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setUser({ ...user, [name]: value });
  // };

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
  return (
    <div className="pl-6 pt-[70px]">
      <form onSubmit={handleSubmit}>
        <div>
          <h2 className="text-[35px] mb-3 mt-6">User Data</h2>
          <label className="text-sm block" htmlFor="firstname">
            Firstname
          </label>
          <input
            className="py-2 pl-2 w-[25%]"
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
            className="py-2 pl-2 w-[25%]"
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
            className="py-2 pl-2 w-[25%]"
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
          className="bg-bgTertiaryColor w-[20%] ml-4 text-textPrimary py-1 my-1 mr-8 mt-8"
          type="submit"
        >
          SAVE DATA
        </button>
      </form>
    </div>
  );
}

export default EditUser;
