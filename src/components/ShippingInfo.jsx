import { useState, useEffect } from "react";

const FormCheckOut = ({ handleProcess, user, handleData }) => {
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

  // FORM STYLES

  const classToAddAlert = [
    "border-[red]",
    "border-2",
    "active:border-[red]",
    'active:border-2"',
  ];

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
      handleData(data);
      handleProcess("shippingOptions");
    }
  };

  // FORM STATES HANDLES
  const handleFirstName = (e) => {
    if (regexFirstName.test(e.target.value)) {
      setFirstName(e.target.value);
      for (let classToAdd of classToAddAlert) {
        e.target.classList.remove(classToAdd);
      }
    } else {
      setFirstName(e.target.value);

      for (let classToAdd of classToAddAlert) {
        e.target.classList.add(classToAdd);
      }
    }
  };

  const handleLastname = (e) => {
    if (regexLastName.test(e.target.value)) {
      setLastName(e.target.value);
      for (let classToAdd of classToAddAlert) {
        e.target.classList.remove(classToAdd);
      }
    } else {
      setLastName(e.target.value);

      for (let classToAdd of classToAddAlert) {
        e.target.classList.add(classToAdd);
      }
    }
  };

  const handleEmail = (e) => {
    if (regexEmail.test(e.target.value)) {
      setEmail(e.target.value);
      for (let classToAdd of classToAddAlert) {
        e.target.classList.remove(classToAdd);
      }
    } else {
      setEmail(e.target.value);

      for (let classToAdd of classToAddAlert) {
        e.target.classList.add(classToAdd);
      }
    }
  };

  const handlePhoneNumber = (e) => {
    if (regexPhoneNumber.test(e.target.value)) {
      setPhoneNumber(e.target.value);
      for (let classToAdd of classToAddAlert) {
        e.target.classList.remove(classToAdd);
      }
    } else {
      setPhoneNumber(e.target.value);

      for (let classToAdd of classToAddAlert) {
        e.target.classList.add(classToAdd);
      }
    }
  };

  const handleStreetAddress = (e) => {
    if (regexStreetAddress.test(e.target.value)) {
      setStreetAddress(e.target.value);
      for (let classToAdd of classToAddAlert) {
        e.target.classList.remove(classToAdd);
      }
    } else {
      setStreetAddress(e.target.value);

      for (let classToAdd of classToAddAlert) {
        e.target.classList.add(classToAdd);
      }
    }
  };

  const handleReference = (e) => {
    if (regexFirstName.test(e.target.value)) {
      setReference(e.target.value);
      for (let classToAdd of classToAddAlert) {
        e.target.classList.remove(classToAdd);
      }
    } else {
      setReference(e.target.value);

      for (let classToAdd of classToAddAlert) {
        e.target.classList.add(classToAdd);
      }
    }
  };

  const handleProvince = (e) => {
    if (regexProvince.test(e.target.value)) {
      setProvince(e.target.value);
      for (let classToAdd of classToAddAlert) {
        e.target.classList.remove(classToAdd);
      }
    } else {
      setProvince(e.target.value);

      for (let classToAdd of classToAddAlert) {
        e.target.classList.add(classToAdd);
      }
    }
  };

  const handleCity = (e) => {
    if (regexCity.test(e.target.value)) {
      setCity(e.target.value);
      for (let classToAdd of classToAddAlert) {
        e.target.classList.remove(classToAdd);
      }
    } else {
      setCity(e.target.value);

      for (let classToAdd of classToAddAlert) {
        e.target.classList.add(classToAdd);
      }
    }
  };

  const handleCountry = (e) => {
    if (regexCountry.test(e.target.value)) {
      setCountry(e.target.value);
      for (let classToAdd of classToAddAlert) {
        e.target.classList.remove(classToAdd);
      }
    } else {
      setCountry(e.target.value);

      for (let classToAdd of classToAddAlert) {
        e.target.classList.add(classToAdd);
      }
    }
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
      <form method="post" className="pt-12  mx-auto font-primaryFont">
        <h2 className="mb-2  text-xl font-primaryFont">Contact Information</h2>
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
                onChange={(e) => handleFirstName(e)}
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
          <h2 className="mb-2 text-xl font-primaryFont">Shipping Address</h2>
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
              <option value="KameHouse">KameHouse </option>
              <option value="PuebloPaleta">Pueblo Paleta </option>

              <option value="LaComarca">La Comarca</option>
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
              <option value="Canelones">Canelones </option>
              <option value="USA">USA </option>

              <option value="Provincia">Provincia </option>
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
