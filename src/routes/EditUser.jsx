import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function EditUser() {
  const user = useSelector((state) => state.user);

  const [firstname, setFirstname] = useState(user.firstname);
  const [lastname, setLastname] = useState(user.lastname);
  const [email, setEmail] = useState(user.email);
  const [changeInfoButton, setChangeInfoButton] = useState(false);

  const [processingStatus, setProcessingStatus] = useState(0);
  const [sendStatus, setSendStatus] = useState(0);
  const [deliveredStatus, setDeliveredStatus] = useState(0);

  console.log(user);

  useEffect(() => {
    for (let order of user.orders) {
      order.status.name === "Processing" &&
        setProcessingStatus(processingStatus + 1);
      order.status.name === "Send" && setSendStatus(sendStatus + 1);
      order.status.name === "Delivered" &&
        setDeliveredStatus(deliveredStatus + 1);
    }
  }, []);

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
      <>
        <div className="bg-bgSecondaryColor pt-[100px] pl-10 tablet:px-40 pb-10">
          <h2 className="text-textPrimary font-light text-3xl">
            Hi {firstname ? firstname : "loading"}!
          </h2>
        </div>

        <div className="py-10 w-full bg-bgPrimaryColor text-bgSecondaryColor gap-4 grid grid-cols-1 tablet:flex items-center justify-center">
          <div className="flex flex-col gap-2 items-center tablet:items-end tablet:text-end w-full">
            <span className="font-light font-primaryFont text-xl mb-2">
              Your Orders
            </span>
            <div className="flex justify-end w-[130px] gap-5">
              <span className="font-light">Processing:</span>
              <h2 className="text-xl bg-bgFourthColor px-2">
                {processingStatus}
              </h2>
            </div>
            <div className="flex justify-end w-[130px]  gap-5">
              <span className="font-light">Send:</span>
              <h2 className="text-xl bg-bgFourthColor px-2">{sendStatus}</h2>
            </div>
            <div className="flex justify-end w-[130px]  gap-5">
              <span className="font-light">Delivered:</span>
              <h2 className="text-xl bg-bgFourthColor px-2">
                {deliveredStatus}
              </h2>
            </div>
            <Link
              className="bg-bgTertiaryColor w-[200px] text-textPrimary p-2 mt-3 tablet:mt-8 text-center font-primaryFont"
              to={"/orders"}
            >
              VIEW ALL
            </Link>
          </div>

          <div className="hidden justify-center px-10 tablet:flex">
            <div className="h-[200px] w-[1px] bg-bgSecondaryColor"></div>
          </div>

          <div className="flex flex-col items-center tablet:items-start gap-1 w-full">
            <span className="font-light font-primaryFont text-xl">
              BASIC INFO
            </span>
            <div className="flex">
              <span className="mr-3 font-light">Name:</span>
              <h2 className="font-semibold">
                {firstname} {lastname}
              </h2>
            </div>
            <div className="flex">
              <span className="mr-3 font-light">E-Mail:</span>
              <h2 className="max-w-[180px] tablet:max-w-full font-semibold overflow-hidden text-ellipsis">
                {email}
              </h2>
            </div>
            <button
              className="bg-bgTertiaryColor w-[200px] text-textPrimary p-2 mt-5 font-primaryFont"
              onClick={() => setChangeInfoButton(true)}
            >
              CHANGE BASIC INFO
            </button>
            <span className="font-light font-primaryFont mt-4 text-xl">
              ADDRESS INFO
            </span>
            <div className="flex">
              <span className="mr-3 font-light">Street:</span>
              <h2 className="font-semibold">{user.address.street}</h2>
            </div>
            <div className="flex">
              <span className="mr-3 font-light">City:</span>
              <h2 className="font-semibold">{user.address.city}</h2>
            </div>
            <div className="flex">
              <span className="mr-3 font-light">State:</span>
              <h2 className="font-semibold">{user.address.state}</h2>
            </div>
            <div className="flex">
              <span className="mr-3 font-light">Country:</span>
              <h2 className="font-semibold">{user.address.country}</h2>
            </div>
            <button
              className="bg-bgTertiaryColor w-[200px] text-textPrimary p-2 mt-5 font-primaryFont"
              onClick={() => setChangeInfoButton(true)}
            >
              CHANGE MAIN ADDRESS
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default EditUser;
