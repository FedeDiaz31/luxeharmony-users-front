import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Profile() {
  const user = useSelector((state) => state.user);

  const firstname = user.firstname;
  const lastname = user.lastname;
  const email = user.email;
  const [address] = useState(user.address);
  const [processingStatus, setProcessingStatus] = useState(0);
  const [sendStatus, setSendStatus] = useState(0);
  const [deliveredStatus, setDeliveredStatus] = useState(0);

  useEffect(() => {
    for (let order of user.orders) {
      if (order.status.name === "Processing") {
        setProcessingStatus(processingStatus + 1);
      } else if (order.status.name === "Send") {
        setSendStatus(sendStatus + 1);
      } else if (order.status.name === "Delivered") {
        setDeliveredStatus(deliveredStatus + 1);
      }
    }
  }, []);

  return (
    <>
      <div className="bg-bgSecondaryColor pt-[100px] pl-10 tablet:px-40 pb-10">
        <h2 className="text-textPrimary font-light text-3xl">
          Hi {firstname ? firstname : "loading"}!
        </h2>
      </div>

      <div className="py-10 w-full bg-bgPrimaryColor text-bgSecondaryColor gap-4 grid grid-cols-1 tablet:flex  justify-center">
        <div className="flex flex-col gap-2 items-center tablet:items-end tablet:text-end w-full">
          <span className="font-light font-primaryFont text-xl mb-2">
            Your Orders
          </span>
          <div className="flex justify-end w-[130px] gap-5">
            <span className="font-light flex">Processing:</span>
            <h2 className="text-xl bg-bgFourthColor px-2">
              {processingStatus}
            </h2>
          </div>
          <div className="flex justify-end w-[130px]  gap-5">
            <span className="font-light flex">Send:</span>
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
          <span className="font-light font-primaryFont text-xl ">
            USER DATA
          </span>
          <div className="flex flex-col">
            <div className="flex gap-5 justify-start items-center">
              <span className="text-sm semi-bold font-secondaryFont  w-[80px]">
                Name:
              </span>
              <div className="mb-1">
                <h2 className="font-semibold ">
                  {firstname} {lastname}
                </h2>
              </div>
            </div>
            <div className="flex gap-5 justify-start items-center">
              <span className="text-sm semi-bold font-secondaryFont  w-[80px]">
                E-Mail:
              </span>
              <h2 className="font-semibold  ">{email}</h2>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-light text-center tablet:text-start font-primaryFont mt-4 text-xl">
              SHIPPING DATA
            </span>
            <div className="mb-1 gap-5 flex justify-center tablet:justify-start items-center">
              <span className="text-sm semi-bold font-secondaryFont  w-[80px]">
                Country:
              </span>
              <h2 className="font-semibold">{address.country}</h2>
            </div>
            <div className="mb-1 gap-5 flex justify-center tablet:justify-start items-center">
              <span className="text-sm semi-bold font-secondaryFont  w-[80px]">
                State:
              </span>
              <h2 className="font-semibold">{address.state}</h2>
            </div>
            <div className="mb-1 gap-5 flex justify-center tablet:justify-start items-center">
              <span className="text-sm semi-bold font-secondaryFont  w-[80px]">
                City:
              </span>
              <h2 className="font-semibold">{address.city}</h2>
            </div>
            <div className="mb-1 gap-5 flex justify-center tablet:justify-start items-center">
              <span className="text-sm semi-bold font-secondaryFont  w-[80px]">
                Street:
              </span>
              <h2 className="font-semibold">{address.street}</h2>
            </div>
            <div className="mb-1 gap-5 flex justify-center tablet:justify-start">
              <span className="text-sm semi-bold font-secondaryFont w-[80px]">
                Reference:
              </span>
              <h2 className="font-semibold  max-w-[150px] tablet:max-w-[250px]">
                {address.reference}
              </h2>
            </div>
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
