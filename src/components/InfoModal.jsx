import { React, useState } from "react";
import { Link } from "react-router-dom";
import cross from "../assets/icons/closeIcon.svg";

function InfoModal({ state }) {
  const [isOpen, setIsOpen] = useState(true);

  if (isOpen) {
    return (
      <div className="w-full h-full fixed z-[200] top-0 left-0  bg-[rgba(0,0,0,0.8)]">
        <div className=" bg-bgPrimaryColor text-bgSecondaryColor fixed w-[80vw] top-10 left-9 desktop:w-[auto] desktop:top-[30vh] desktop:left-[30vw] py-8 px-5">
          <div className="w-[100%] flex justify-between items-start">
            <h1 className="my-2 font-primaryFont text-[26px]">About this project</h1>
            <img
              onClick={() => setIsOpen(false)}
              className="cursor-pointer w-[25px]"
              src={cross}
              alt=""
            />
          </div>
          <p className="mb-5">
            this e-commerce site is a final project developed by students from
            the Hack Academy Coding Bootcamp.
          </p>
          <Link to={'/about'} onClick={()=>setIsOpen(false)} className="p-2 bg-bgTertiaryColor text-textPrimary">About us</Link>
          <hr className="my-7" />
          <h2 className="my-2 font-primaryFont text-[26px]">User to test</h2>
          <p>To simplify the access to the app , you can use the next user:</p>
          <ul className="my-3">
            <li>E-mail: dolores_alvarez@gmail.com</li>
            <li>Password: 1234</li>
          </ul>
          <Link onClick={()=>setIsOpen(false)} className="p-2 bg-bgTertiaryColor text-textPrimary">Login</Link>
        </div>
      </div>
    );
  } else {
    return (
      <button
        className="fixed bottom-10 right-10 bg-bgTertiaryColor p-3 rounded-3xl text-textPrimary"
        onClick={() => setIsOpen(true)}
      >
        Example proyect data
      </button>
    );
  }
}

export default InfoModal;
