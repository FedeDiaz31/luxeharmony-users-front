import { useState, useEffect } from "react";

const FormCheckOut = ({ handleProcess, user, handleData }) => {
  const [isDataOk, setIsDataOk] = useState(false);

  // FORM STATES

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [reference, setReference] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [newsletter, setNewsletter] = useState(true);

  // CHECK DATA FROM DE FORM - IF SOME FIELD IS NOT VALID THIS FUNCTION PREVENT THE USER TO CONTINUE
  const checkData = () => {
    // CREATE AN OBJECT WITH THE ACTUAL FORM VALUES
    let data = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      phoneNumber: phoneNumber,
      streetAddress: streetAddress,
      city: city,
      country: country,
      province: province,
    };

    // REGEX EXPRESSIONS FOR FORM FIELDS VALIDATION
    const regexFirstName = /^[A-Za-z]+$/;
    const regexLastName = /^[a-zA-Z'-]+$/;
    const regexEmail = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;
    const regexPhoneNumber = /^\+?\d{7,15}$/;
    const regexStreetAddress =
      /^[a-zA-Z0-9\s.,#-]+(\s[a-zA-ZñÑáéíóúÁÉÍÓÚ]+\s)?\d{1,}[a-zA-Z]*$/;
    const regexCity = /^[a-zA-Z]{3,}$/;
    const regexCountry = /^[a-zA-Z]{3,}$/;
    const regexProvince = /^[a-zA-Z]{3,}$/;

    let checkFirstname = regexFirstName.test(data.firstname);
    let checkLastName = regexLastName.test(data.lastname);
    let checkEmail = regexEmail.test(data.email);
    let checkPhoneNumber = regexPhoneNumber.test(data.phoneNumber);
    let checkStreetAddress = regexStreetAddress.test(data.streetAddress);
    let checkCity = regexCity.test(data.city);
    let checkCountry = regexCountry.test(data.country);
    let checkProvince = regexProvince.test(data.province);

    if (
      checkFirstname &&
      checkLastName &&
      checkEmail &&
      checkPhoneNumber &&
      checkStreetAddress &&
      checkCity &&
      checkCountry &&
      checkProvince
    ) {
      setIsDataOk(true);
      handleData(data);
      handleProcess("shippingOptions");
    }
  };

  // FORM STATES HANDLES

  const handleFirstname = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastname = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleStreetAddress = (e) => {
    setStreetAddress(e.target.value);
  };

  const handleReference = (e) => {
    setReference(e.target.value);
  };

  const handleProvince = (e) => {
    setProvince(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleNewsletter = (e) => {
    setNewsletter(e.target.checked);
  };

  // useEffect(() => {
  //   async function fetchCountrys() {
  //     const response = await axios({
  //       url: "https://api.countrystatecity.in/v1/countries",
  //       headers: {
  //         "X-CSCAPI-KEY": "API_KEY",
  //       },
  //       method: "get",
  //     });

  //     console.log(response);
  //   }
  //   fetchCountrys();
  // }, []);

  // SHIPPING BUTTON

  return (
    <>
      <form method="post" className="pt-12  mx-auto">
        <h2 className="mb-2">Contact Information</h2>
        <div className="columns-1">
          <div className="grid-cols-2 grid gap-2">
            <div>
              <label className="text-xs" htmlFor="firstname">
                First Name
              </label>
              <input
                className="py-2 pl-2"
                type="text"
                name="firstname"
                placeholder={user ? user.firstname : firstName}
                value={firstName}
                onChange={(e) => handleFirstname(e)}
                required
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
                placeholder={user ? user.lastname : lastName}
                onChange={(e) => handleLastname(e)}
                required
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
              placeholder={user ? user.email : email}
              onChange={(e) => handleEmail(e)}
              required
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
              value={phoneNumber}
              onChange={(e) => handlePhoneNumber(e)}
              handlePhoneNumber
              required
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
              value={streetAddress}
              onChange={(e) => handleStreetAddress(e)}
              required
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
              value={reference}
              onChange={(e) => handleReference(e)}
              required
            />
          </div>
          <div>
            <label className="text-xs block" htmlFor="city">
              City
            </label>
            <input
              className="py-2 pl-2 w-full"
              type="select"
              name="city"
              placeholder="City"
              value={city}
              onChange={(e) => handleCity(e)}
              required
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
              value={country}
              onChange={(e) => handleCountry(e)}
              required
            >
              <option value="Country 1">Country 1</option>
              <option value="Country 2">Country 2</option>

              <option value="Country 3">Country 3</option>
            </select>
          </div>
          <div>
            <label className="text-xs block" htmlFor="state">
              State/Province
            </label>
            <select
              onChange={(e) => handleProvince(e)}
              className="py-2 w-11/12"
              name="state"
              placeholder="state"
              value={province}
              required
            >
              <option value="State 1">State 1</option>
              <option value="State 2">State 2</option>

              <option value="State 3">State 3</option>
            </select>
          </div>
          <div>
            <input
              type="checkbox"
              name="newsletter"
              onChange={(e) => handleNewsletter(e)}
              checked={newsletter}
              required
            />
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
              checkData();
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
