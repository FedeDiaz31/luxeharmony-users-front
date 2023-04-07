import { useState, useEffect } from "react";
import axios from "axios";

const FormCheckOut = ({ handleProcess }) => {
  const [countrys, setCountrys] = useState(null);

  const handleShippingButton = () => {
    handleProcess("shippingOptions");
  };

  useEffect(() => {
    async function fetchCountrys() {
      const response = await axios({
        url: "https://api.countrystatecity.in/v1/countries",
        headers: {
          "X-CSCAPI-KEY": "API_KEY",
        },
        method: "get",
      });
    }
    fetchCountrys();
  }, []);

  return (
    <>
      <form method="post" className="pt-12  mx-auto">
        <h2 className="mb-2">Contact Information</h2>
        <div className="columns-1">
          <div className="grid-cols-2 grid gap-2">
            <div>
              <label className="text-xs" htmlFor="firstname">
                Frist Name
              </label>
              <input
                className="py-2 pl-2"
                type="text"
                name="firstname"
                placeholder="First Name"
              />
            </div>
            <div>
              <label className="text-xs" htmlFor="firstname">
                Last Name
              </label>
              <input
                className="py-2 pl-2"
                type="text"
                name="lastname"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div>
            <label className="text-xs block" htmlFor="email">
              Email
            </label>
            <input
              className="py-2 pl-2 w-full"
              type="text"
              name="email"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="block text-xs" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              className="py-2 pl-2 w-full"
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
            />
          </div>
          <h2 className="mb-2">Shipping Address</h2>
          <div>
            <label className="text-xs block" htmlFor="streetAddres">
              Street Address
            </label>
            <input
              className="py-2 pl-2 w-full"
              type="text"
              name="streetAddress"
              placeholder="Street Adress"
            />
          </div>
          <div>
            <label className="text-xs block" htmlFor="reference">
              Reference
            </label>
            <input
              className="py-2 pl-2 w-full"
              type="text"
              name="reference"
              placeholder="Reference"
            />
          </div>
          <div>
            <label className="text-xs block" htmlFor="country">
              City
            </label>
            <input
              className="py-2 pl-2 w-full"
              type="select"
              name="countr"
              placeholder="City"
            />
          </div>
          <div>
            <label className="text-xs block" htmlFor="country">
              Country
            </label>
            <select
              className="py-2 w-11/12"
              name="country"
              placeholder="Country"
            >
              <option value="olaa">asd</option>
            </select>
          </div>
          <div>
            <label className="text-xs block" htmlFor="state">
              State/Province
            </label>
            <select className="py-2 w-11/12" name="state" placeholder="state">
              <option value="olaa">asd</option>
            </select>
          </div>
          <div>
            <input type="checkbox" name="newsletter" />
            <label htmlFor="newsletter">
              Get updates about new products and other exciting news from Gibson
              Brands.
            </label>
          </div>
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleShippingButton();
            }}
            className="bg-bgTertiaryColor w-full text-textPrimary py-1 my-2"
          >
            Continue to Shipping Options
          </button>
        </div>
      </form>
    </>
  );
};

export default FormCheckOut;
