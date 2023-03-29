import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Profile = ({ handleProcess, handleData }) => {
  const user = useSelector((state) => state.user);
  // REGEX EXPRESSIONS FOR FORM FIELDS VALIDATION
  const regexFirstName = /^[A-Za-z]+$/;
  const regexLastName = /^[a-zA-Z'-]+$/;
  const regexEmail = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;
  const regexPassword = /^\+?\d{7,15}$/;
  const regexStreetAddress =
    /^[a-zA-Z0-9\s.,#-]+(\s[a-zA-ZñÑáéíóúÁÉÍÓÚ]+\s)?\d{1,}[a-zA-Z]*$/;
  const regexCity = /^[a-zA-Z]{3,}$/;
  const regexCountry = /^[a-zA-Z]{3,}$/;
  const regexProvince = /^[a-zA-Z]{3,}$/;

  // FORM STATES

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [reference, setReference] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");

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
      password: password,
      streetAddress: streetAddress,
      city: city,
      country: country,
      province: province,
    };

    let checkFirstname = regexFirstName.test(data.firstname);
    let checkLastName = regexLastName.test(data.lastname);
    let checkEmail = regexEmail.test(data.email);
    let checkPassword = regexPassword.test(data.password);
    let checkStreetAddress = regexStreetAddress.test(data.streetAddress);
    let checkCity = regexCity.test(data.city);
    let checkCountry = regexCountry.test(data.country);
    let checkProvince = regexProvince.test(data.province);

    if (
      checkFirstname &&
      checkLastName &&
      checkEmail &&
      checkPassword &&
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

  const handlePassword = (e) => {
    if (regexPassword.test(e.target.value)) {
      setPassword(e.target.value);
      for (let classToAdd of classToAddAlert) {
        e.target.classList.remove(classToAdd);
      }
    } else {
      setPassword(e.target.value);

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
      <div className="pl-6 pt-[70px] ">
        <form method="post" className="mx-auto font-primaryFont px-40">
          <h2 className="text-[35px] mt-6">Welcome to your profile,</h2>
          <h3 className="text-[35px]">
            {user.firstname} {user.lastname}!
          </h3>
          <div className="grid laptop:grid-cols-2 tablet:grid-cols-1">
            <div>
              <h2 className=" text-[20px] my-4">USER DATA</h2>
              <div>
                <label className="text-xs block" htmlFor="firstname">
                  First Name
                </label>
                <input
                  className="py-2 pl-2 w-[80%]"
                  type="text"
                  name="firstname"
                  placeholder={user ? user.firstname : firstName}
                  value={firstName}
                  onChange={(e) => handleFirstName(e)}
                  required
                />
              </div>
              <div>
                <label className="text-xs block" htmlFor="firstname">
                  Last Name
                </label>
                <input
                  className="py-2 pl-2 w-[80%]"
                  type="text"
                  name="lastname"
                  placeholder={user ? user.lastname : lastName}
                  onChange={(e) => handleLastname(e)}
                  required
                />
              </div>

              <div>
                <label className="text-xs block" htmlFor="email">
                  Email
                </label>
                <input
                  className="py-2 pl-2 w-[80%]"
                  type="text"
                  name="email"
                  placeholder={user ? user.email : email}
                  onChange={(e) => handleEmail(e)}
                  required
                />
              </div>
              <div>
                <label className="block text-xs" htmlFor="Password">
                  Password
                </label>
                <input
                  className="py-2 pl-2 w-[80%]"
                  type="number"
                  name="Password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => handlePassword(e)}
                  handlePassword
                  required
                />
              </div>
            </div>
            <div>
              <h2 className=" text-[20px] my-4">SHIPPING DATA</h2>
              <div>
                <label className="text-xs block" htmlFor="streetAddres">
                  Street Address
                </label>
                <input
                  className="py-2 pl-2 w-[80%]"
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
                  className="py-2 pl-2 w-[80%] block"
                  type="text"
                  name="reference"
                  placeholder="Specify
                  apartment number"
                  value={reference}
                  onChange={(e) => handleReference(e)}
                  required
                />
              </div>
              <div>
                <label className="text-xs block" htmlFor="country">
                  Country
                </label>
                <select
                  className="py-2 pl-2 w-[80%]"
                  name="country"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => handleCountry(e)}
                  required
                >
                  <option value="Uruguay">Uruguay </option>
                  <option value="Argentina">Argentina </option>

                  <option value="Brasil">Brasil</option>
                </select>
              </div>
              <div>
                <label className="text-xs block" htmlFor="state">
                  State/Province
                </label>
                <select
                  onChange={(e) => handleProvince(e)}
                  className="py-2 pl-2 w-[80%]"
                  name="state"
                  placeholder="state"
                  value={province}
                  required
                >
                  <option value="Montevideo">MONTEVIDEO </option>
                  <option value="Canelones">Canelones </option>

                  <option value="Maldonado">Maldonado </option>
                </select>
              </div>
              <div className="mt-2">
                <label className="text-xs block" htmlFor="city">
                  City
                </label>
                <input
                  className="py-2 pl-2 w-[80%]"
                  type="select"
                  name="city"
                  placeholder="City"
                  value={city}
                  onChange={(e) => handleCity(e)}
                  required
                />
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  checkData();
                }}
                className="bg-bgTertiaryColor w-[80%] ml-10 text-textPrimary py-1 my-1 mr-8 mt-8"
              >
                EDIT USER DATA
              </button>
            </div>
            <div></div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
