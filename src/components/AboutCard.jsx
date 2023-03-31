import React, { useState } from "react";
import { Link } from "react-router-dom";
import chevron from "../assets/img/chevronUp.png";
import chevronDown from "../assets/img/chevronDown.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function AboutCard({ linkedin, img, title, paragraph, github }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative overflow-hidden" target={"blank"}>
      <img className="w-[250px] h-[350px] object-cover" src={img} alt="" />
      <div
        className={
          open
            ? "absolute w-full h-[200px] bottom-0  bg-bgSecondaryColor text-textPrimary py-3 transition-all duration-200"
            : "absolute w-full h-[200px] bottom-[-130px] bg-bgSecondaryColor text-textPrimary py-3 transition-all duration-200"
        }
      >
        <div className="flex items-center justify-between px-3">
          <h2 className="category-title text-left text-ellipsis overflow-hidden">
            {title}
          </h2>
          {!open ? (
            <div
              onClick={() => setOpen(!open)}
              className="w-10 h-16 flex items-center justify-center cursor-pointer"
            >
              <img className="fill-[#fff] scale-50" src={chevron} alt="" />
            </div>
          ) : (
            <div
              onClick={() => setOpen(!open)}
              className="w-10 h-16 flex items-center justify-center cursor-pointer"
            >
              <img className="fill-[#fff] scale-50" src={chevronDown} alt="" />
            </div>
          )}
        </div>
        <p className="text-left px-3 text-sm">{paragraph}</p>
        <div className="mt-6 flex justify-around">
          <div>
            <Link
              className="  "
              to={`https://www.linkedin.com/in/${linkedin}`}
              target="_blank"
            >
              Linked
            </Link>
            <LinkedInIcon className="mt-[-4px]" />
          </div>

          <div>
            <Link to={`https://www.github.com/${github}`} target="_blank">
              Github
            </Link>
            <GitHubIcon className="mt-[-4px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
