import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Profile() {
  const user = useSelector((state) => state.user);

  const [firstname, setFirstname] = useState(user.firstname);
  const [lastname, setLastname] = useState(user.lastname);
  const [email, setEmail] = useState(user.email);
  const [processingStatus, setProcessingStatus] = useState(0);
  const [sendStatus, setSendStatus] = useState(0);
  const [deliveredStatus, setDeliveredStatus] = useState(0);

  // useEffect(() => {
  //   for (let order of user.orders) {
  //     order.status.name === "Processing" &&
  //       setProcessingStatus(processingStatus + 1);
  //     order.status.name === "Send" && setSendStatus(sendStatus + 1);
  //     order.status.name === "Delivered" &&
  //       setDeliveredStatus(deliveredStatus + 1);
  //   }
  // }, []);

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
            <h2 className="text-xl bg-bgFourthColor px-2">{deliveredStatus}</h2>
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
          <button className="bg-bgTertiaryColor w-[200px] text-textPrimary p-2 mt-3 tablet:mt-8 text-center font-primaryFont">
            <Link to="/edit"> Edit user data </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Profile;
