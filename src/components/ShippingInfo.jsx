import { useState, useEffect } from "react";
import axios from "axios";

const FormCheckOut = ({ handleProcess, user, handleData }) => {
  // REGEX EXPRESSIONS FOR FORM FIELDS VALIDATION
  const regexFirstName = /^[A-Za-z]+$/;
  const regexLastName = /^[a-zA-Z'-]+$/;
  const regexEmail = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;
  const regexPhoneNumber = /^\+?\d{7,15}$/;
  const regexStreetAddress =
    /^[a-zA-Z0-9\s.,#-]+(\s[a-zA-ZñÑáéíóúÁÉÍÓÚ]+\s)?\d{1,}[a-zA-Z]*$/;
  const regexCity = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
  const regexCountry = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
  const regexProvince = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;

  // FORM STATES

  // VALUES

  const [firstName, setFirstName] = useState(user.firstname);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [reference, setReference] = useState("");
  const [city, setCity] = useState("");
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

  // SELECT COUNTRYS AND STATES

  const [states, setStates] = useState(null);
  const [countryId, setCountryId] = useState(null);
  const [countrys, setCountrys] = useState(null);

  // FORM STYLES

  const classToAddAlert = [
    "border-[red]",
    "border-1",
    "active:border-[red]",
    "bg-[red]",
    "text-textPrimary",
    "focus-visible:border-0",
  ];
  const spanClasses = "bg-[#F91C20] text-textPrimary text-sm px-2 block my-2";

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

  // HANDLE FIRSTNAME
  const handleFirstName = (e) => {
    if (regexFirstName.test(e.target.value)) {
      setFirstName(e.target.value);
      setFirstNameError(false);
      for (let classToAdd of classToAddAlert) {
        e.target.classList.toggle(classToAdd);
      }
    } else {
      setFirstName(e.target.value);
      setFirstNameError(true);

      for (let classToAdd of classToAddAlert) {
        e.target.classList.toggle(classToAdd);
      }
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
    } else {
      setLastName(e.target.value);

      for (let classToAdd of classToAddAlert) {
        e.target.classList.add(classToAdd);
        setLastNameError(true);
      }
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
    } else {
      setEmail(e.target.value);
      setEmailError(true);

      for (let classToAdd of classToAddAlert) {
        e.target.classList.add(classToAdd);
      }
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
    } else {
      setPhoneNumber(e.target.value);
      setPhoneNumberError(true);

      for (let classToAdd of classToAddAlert) {
        e.target.classList.add(classToAdd);
      }
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
    } else {
      setStreetAddress(e.target.value);
      setStreetAddressError(true);

      for (let classToAdd of classToAddAlert) {
        e.target.classList.add(classToAdd);
      }
    }
  };

  // HANDLE REFERENCE
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

  // HANDLE PROVINCE
  const handleProvince = (e) => {
    if (regexProvince.test(e.target.value)) {
      setProvince(e.target.value);
      setProvinceError(false);
      for (let classToAdd of classToAddAlert) {
        e.target.classList.remove(classToAdd);
      }
    } else {
      setProvince(e.target.value);
      setProvinceError(true);

      for (let classToAdd of classToAddAlert) {
        e.target.classList.add(classToAdd);
      }
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
    } else {
      setCity(e.target.value);
      setCityError(true);

      for (let classToAdd of classToAddAlert) {
        e.target.classList.add(classToAdd);
      }
    }
  };

  // HANDLE COUNTRY

  const handleCountry = (e) => {
    console.log(e.target.value);
    if (regexCountry.test(e.target.value)) {
      setCountry((prevState) => e.target.value.trim());
      setCountryError(false);

      for (let classToAdd of classToAddAlert) {
        e.target.classList.remove(classToAdd);
      }
    } else {
      setCountry((prevState) => e.target.value);
      setCountryError(true);

      for (let classToAdd of classToAddAlert) {
        e.target.classList.add(classToAdd);
      }
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
      <form
        method="post"
        className="pt-12  mx-auto font-terciaryFont text-[#737373]"
      >
        <h2 className="mb-2  text-xl font-terciaryFont">Contact Information</h2>
        <div className="columns-1">
          <div className="grid-cols-2 grid gap-2">
            <div>
              <label className="text-xs" htmlFor="firstname">
                First Name
              </label>{" "}
              {firstNameError ? (
                <span className={spanClasses}>Error</span>
              ) : null}
              <input
                className="py-2 pl-2"
                type="text"
                name="firstname"
                placeholder={firstName}
                value={firstName}
                onChange={(e) => handleFirstName(e)}
                required
              />
            </div>
            <div>
              <label className="text-xs" htmlFor="firstname">
                Last Name
              </label>{" "}
              {lastNameError ? (
                <span className={spanClasses}>Error</span>
              ) : null}
              <input
                className="py-2 pl-2"
                type="text"
                name="lastname"
                placeholder={lastName}
                onChange={(e) => handleLastname(e)}
                required
              />
            </div>
          </div>
          <div>
            <label className="text-xs block" htmlFor="email">
              Email
            </label>
            {emailError ? <span className={spanClasses}>Error</span> : null}
            <input
              className="py-2 pl-2 w-full"
              type="text"
              name="email"
              placeholder={email}
              value={email}
              onChange={(e) => handleEmail(e)}
              required
            />
          </div>
          <div>
            <label className="block text-xs " htmlFor="phoneNumber">
              Phone Number
            </label>
            {phoneNumber ? <span className={spanClasses}>Error</span> : null}
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
            {streetAddressError ? (
              <span className={spanClasses}>Error</span>
            ) : null}
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
            {cityError ? <span className={spanClasses}>Error</span> : null}
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
            {countryError ? <span className={spanClasses}>Error</span> : null}
            <select
              className="py-2 w-11/12"
              name="country"
              placeholder="Country"
              onChange={(e) => handleCountry(e)}
              required
            >
              {countrys?.map((country) => (
                <option value={country.name} id={country.id} key={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs block" htmlFor="state">
              State/Province
            </label>
            {provinceError ? <span className={spanClasses}>Error</span> : null}
            <select
              onChange={(e) => handleProvince(e)}
              className="py-2 w-11/12"
              name="state"
              placeholder="state"
              value={province}
              required
            >
              {states?.map((state) => {
                return <option>{state.name}</option>;
              })}
            </select>
          </div>
          <div className="my-2">
            <input
              type="checkbox"
              name="newsletter"
              onChange={(e) => handleNewsletter(e)}
              checked={newsletter}
              required
              className="scale-150 mx-2"
            />
            <label htmlFor="newsletter" className="text-textSecondary px-2">
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
