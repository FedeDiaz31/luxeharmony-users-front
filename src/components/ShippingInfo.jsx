import { useState, useEffect } from "react";
import axios from "axios";

const FormCheckOut = ({ handleProcess, user, handleData }) => {
  // REGEX EXPRESSIONS FOR FORM FIELDS VALIDATION
  const regexFirstName = /^[A-Za-záéíóúñÁÉÍÓÚÑ]+([ ]?[A-Za-záéíóúñÁÉÍÓÚÑ]+)*$/;
  const regexLastName = /^[A-Za-záéíóúñÁÉÍÓÚÑ]+([ ]?[A-Za-záéíóúñÁÉÍÓÚÑ]+)*$/;
  const regexEmail = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;
  const regexPhoneNumber = /^\+?\d{7,15}$/;
  const regexStreetAddress = /^[a-zA-ZñÑ\d]+(?:\s[a-zA-ZñÑ\d]+)*$/;
  const regexCity = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
  const regexCountry = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
  const regexProvince = /^([a-zA-ZáéíóúÁÉÍÓÚñÑ]+\s)*[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/;

  // FORM STATES

  // VALUES

  const [firstName, setFirstName] = useState(user.firstname);
  const [lastName, setLastName] = useState(user.lastname);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetAddress, setStreetAddress] = useState(user.address.street);
  const [reference, setReference] = useState(user.address.reference);
  const [city, setCity] = useState(user.address.city);
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [newsletter, setNewsletter] = useState(true);

  // ERROR STATES

  const [firstNameError, setFirstNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [phoneNumberError, setPhoneNumberError] = useState(null);
  const [streetAddressError, setStreetAddressError] = useState(null);
  const [cityError, setCityError] = useState(null);
  const [countryError, setCountryError] = useState(null);
  const [provinceError, setProvinceError] = useState(null);

  const [disabled, setDisabled] = useState(false);

  // SELECT COUNTRYS AND STATES

  const [states, setStates] = useState(null);
  const [countryId, setCountryId] = useState(null);
  const [countrys, setCountrys] = useState(null);

  // FORM STYLES

  const classToAddAlert = [
    "bg-[#fcc2c2]",
    "border-2",
    "border[red]",
    "transition-all",
    "text-[black]",
  ];
  const spanClasses =
    "bg-[#F91C20] text-textPrimary text-xs mx-2 px-2 py-1 inline-block duration-300 whitespace-nowrap";
  const spanClassesDefault =
    "bg-[#fff] text-textPrimary text-xs mx-2 px-2 py-1 inline-block   duration-300 whitespace-nowrap";

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
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  document.addEventListener("wheel", function (event) {
    if (document.activeElement.type === "number") {
      document.activeElement.blur();
    }
  });

  // FORM STATES HANDLES

  // HANDLE FIRSTNAME
  const handleFirstName = (e) => {
    if (regexFirstName.test(e.target.value)) {
      setFirstName(e.target.value);
      setFirstNameError(false);
      for (let classToAdd of classToAddAlert) {
        e.target.classList.remove(classToAdd);
      }
      return true;
    } else {
      setFirstName(e.target.value);
      setFirstNameError(true);

      for (let classToAdd of classToAddAlert) {
        e.target.classList.add(classToAdd);
      }
      return false;
    }
  };

  // HANDLE LASTNAME

  const handleLastname = (e) => {
    if (regexLastName.test(e.target.value)) {
      setLastName(e.target.value);
      setLastNameError(false);

      for (let classToAdd of classToAddAlert) {
        e.target.classList.remove(classToAdd);
      }
      return true;
    } else {
      setLastName(e.target.value);

      for (let classToAdd of classToAddAlert) {
        e.target.classList.add(classToAdd);
        setLastNameError(true);
      }
      return false;
    }
  };

  // HANDLE EMAIL
  const handleEmail = (e) => {
    if (regexEmail.test(e.target.value)) {
      setEmail(e.target.value);
      setEmailError(false);

      for (let classToAdd of classToAddAlert) {
        e.target.classList.remove(classToAdd);
      }
      return true;
    } else {
      setEmail(e.target.value);
      setEmailError(true);

      for (let classToAdd of classToAddAlert) {
        e.target.classList.add(classToAdd);
      }
      return false;
    }
  };

  // HANDLE PHONE NUMBER
  const handlePhoneNumber = (e) => {
    if (regexPhoneNumber.test(e.target.value)) {
      setPhoneNumber(e.target.value);
      setPhoneNumberError(false);
      for (let classToAdd of classToAddAlert) {
        e.target.classList.remove(classToAdd);
      }
      return true;
    } else {
      setPhoneNumber(e.target.value);
      setPhoneNumberError(true);

      for (let classToAdd of classToAddAlert) {
        e.target.classList.add(classToAdd);
      }
      return false;
    }
  };

  // HANDLE STREET ADDRESS
  const handleStreetAddress = (e) => {
    if (regexStreetAddress.test(e.target.value)) {
      setStreetAddress(e.target.value);
      setStreetAddressError(false);
      for (let classToAdd of classToAddAlert) {
        e.target.classList.remove(classToAdd);
      }
      return true;
    } else {
      setStreetAddress(e.target.value);
      setStreetAddressError(true);

      for (let classToAdd of classToAddAlert) {
        e.target.classList.add(classToAdd);
      }
      return false;
    }
  };

  // HANDLE REFERENCE
  const handleReference = (e) => {
    if (regexFirstName.test(e.target.value)) {
      setReference(e.target.value);
      for (let classToAdd of classToAddAlert) {
        e.target.classList.remove(classToAdd);
      }
      return true;
    } else {
      setReference(e.target.value);

      for (let classToAdd of classToAddAlert) {
        e.target.classList.add(classToAdd);
      }
      return false;
    }
  };

  // HANDLE PROVINCE
  const handleProvince = (e) => {
    if (regexProvince.test(e.target.value)) {
      setProvince(e.target.value);
      setProvinceError(false);
      for (let classToAdd of classToAddAlert) {
        e.target.classList.remove(classToAdd);
      }
      return true;
    } else {
      setProvince(e.target.value);
      setProvinceError(true);

      for (let classToAdd of classToAddAlert) {
        e.target.classList.add(classToAdd);
      }
      return false;
    }
  };

  // HANDLE CITY

  const handleCity = (e) => {
    if (regexCity.test(e.target.value)) {
      setCity(e.target.value);
      setCityError(false);
      for (let classToAdd of classToAddAlert) {
        e.target.classList.remove(classToAdd);
      }
      return true;
    } else {
      setCity(e.target.value);
      setCityError(true);

      for (let classToAdd of classToAddAlert) {
        e.target.classList.add(classToAdd);
      }
      return false;
    }
  };

  // HANDLE COUNTRY

  const handleCountry = (e) => {
    if (regexCountry.test(e.target.value)) {
      setCountry((prevState) => e.target.value.trim());
      setCountryError(false);

      for (let classToAdd of classToAddAlert) {
        e.target.classList.remove(classToAdd);
      }
      return true;
    } else {
      setCountry((prevState) => e.target.value);
      setCountryError(true);

      for (let classToAdd of classToAddAlert) {
        e.target.classList.add(classToAdd);
      }
      return false;
    }
  };

  // HANDLE NEWSLETTER
  const handleNewsletter = (e) => {
    setNewsletter(e.target.checked);
  };

  useEffect(() => {
    async function fetchCountrys() {
      const response = await axios({
        url: "https://api.countrystatecity.in/v1/countries",
        headers: {
          "X-CSCAPI-KEY":
            "dElxYkhKS3I1dlpXc2padkVJUXBtZ2EwcWlPSG12aVdGWDZhdjhQeA==",
        },
        method: "get",
      });

      setCountrys(response.data);
    }
    fetchCountrys();
  }, []);

  useEffect(() => {
    if (countrys) {
      countrys.find((element) => {
        if (country === element.name) {
          return setCountryId(element.iso2);
        }
        return false;
      });
    }
    async function fetchStates() {
      if (countryId) {
        const response = await axios({
          url: `https://api.countrystatecity.in/v1/countries/${countryId}/states`,
          headers: {
            "X-CSCAPI-KEY":
              "dElxYkhKS3I1dlpXc2padkVJUXBtZ2EwcWlPSG12aVdGWDZhdjhQeA==",
          },
          method: "get",
        });
        setStates(response.data);
      }
    }
    fetchStates();
  }, [country, countrys, countryId]);

  return (
    <>
      <form method="post" className=" mx-auto font-terciaryFont text-[#737373]">
        <div className="columns-1 px-1">
          <h2 className="mb-2  text-xl font-terciaryFont">
            Contact Information
          </h2>
          <hr />
          <div className="grid-cols-2 grid gap-2 ">
            <div className="mt-1">
              <label className="text-xs inline" htmlFor="firstname">
                First Name
              </label>
              <span
                className={firstNameError ? spanClasses : spanClassesDefault}
              >
                Invalid entry.
              </span>
              <input
                className="py-1 mt-1 pl-2 w-full"
                type="text"
                name="firstname"
                placeholder={firstName}
                value={firstName}
                onChange={(e) => handleFirstName(e)}
                required
              />
            </div>
            <div className="mt-1">
              <label className="text-xs" htmlFor="firstname">
                Last Name
              </label>
              <span
                className={lastNameError ? spanClasses : spanClassesDefault}
              >
                Invalid entry.
              </span>
              <input
                className="py-1 mt-1 pl-2 w-full"
                type="text"
                name="lastname"
                placeholder={lastName}
                value={lastName}
                onChange={(e) => handleLastname(e)}
                required
              />
            </div>
          </div>
          <div className="mt-1">
            <label className="text-xs " htmlFor="email">
              Email
            </label>
            <span className={emailError ? spanClasses : spanClassesDefault}>
              Invalid entry.
            </span>
            <input
              className="py-1 mt-1 pl-2 w-full"
              type="text"
              name="email"
              placeholder={email}
              value={email}
              onChange={(e) => handleEmail(e)}
              required
            />
          </div>
          <div className="mt-1">
            <label className=" text-xs " htmlFor="phoneNumber">
              Phone Number
            </label>
            <span
              className={phoneNumberError ? spanClasses : spanClassesDefault}
            >
              Invalid entry.
            </span>
            <input
              className="py-2 mt-1 pl-2 w-full"
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => handlePhoneNumber(e)}
              handlePhoneNumber
              required
            />
          </div>
          <h2 className="my-2  text-xl font-terciaryFont">Shipping Address</h2>
          <hr />

          <div className="mt-1">
            <label className="text-xs " htmlFor="streetAddres">
              Street Address
            </label>
            <span
              className={streetAddressError ? spanClasses : spanClassesDefault}
            >
              Invalid entry.
            </span>
            <input
              className="py-2 mt-1 pl-2 w-full"
              type="text"
              name="streetAddress"
              placeholder="Street Adress"
              value={streetAddress}
              onChange={(e) => handleStreetAddress(e)}
              required
            />
          </div>
          <div className="mt-1">
            <label className="text-xs " htmlFor="reference">
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
            <div className="h-[12px]"></div>
          </div>
          <div className="mt-1">
            <label className="text-xs " htmlFor="city">
              City
            </label>
            <span className={cityError ? spanClasses : spanClassesDefault}>
              Invalid entry.
            </span>
            <input
              className="py-2 pl-2 w-full"
              type="text"
              name="city"
              placeholder="City"
              value={city}
              onChange={(e) => handleCity(e)}
              required
            />
          </div>
          <div className="mt-1">
            <label className="text-xs " htmlFor="country">
              Country
            </label>
            <span className={countryError ? spanClasses : spanClassesDefault}>
              Invalid entry.
            </span>
            <select
              className="py-2 w-full"
              name="country"
              placeholder="Country"
              onChange={(e) => handleCountry(e)}
              required
            >
              <option disabled selected>
                -- SELECT AN OPTION --
              </option>
              {countrys?.map((country) => (
                <option value={country.name} id={country.id} key={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-1">
            <label className="text-xs " htmlFor="state">
              State/Province
            </label>
            <span className={provinceError ? spanClasses : spanClassesDefault}>
              Invalid entry.
            </span>
            <select
              onChange={(e) => handleProvince(e)}
              className="py-2 w-full"
              name="state"
              placeholder="state"
              value={province}
              required
            >
              <option disabled selected>
                -- SELECT AN OPTION --
              </option>
              {states?.map((state) => {
                return <option>{state.name}</option>;
              })}
            </select>
          </div>
          <div className="mt-1 tablet:mt-3 flex columns-2 itemx-center justify-center">
            <input
              type="checkbox"
              name="newsletter"
              onChange={(e) => handleNewsletter(e)}
              checked={newsletter}
              required
              className="scale-150 mx-2 w-full max-w-[24px]"
            />
            <label
              htmlFor="newsletter"
              className="text-textSecondary px-2 text-left my-0"
            >
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
            className="bg-bgTertiaryColor w-full tablet:py-2  text-textPrimary py-1 my-2 font-terciaryFont"
          >
            Continue to Shipping Options
          </button>
          {disabled ? (
            <span className="text-[red]">Please check all the fields.</span>
          ) : null}
        </div>
      </form>
    </>
  );
};

export default FormCheckOut;
