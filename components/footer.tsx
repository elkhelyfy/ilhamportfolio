"use client";
// import { House, FlaskConical, BriefcaseBusiness, Link } from "lucide-react";
const Footer = () => {
  return (
    <nav className="mt-4">
      <div className="mx-auto flex items-center justify-around">
        <div className="flex items-center space-x-3">
            <span className="font-semibold text-base">ilhamouhammi.me</span>
        </div>
        {/* <ul className="flex space-x-8">
          <li className="flex flex-col items-center cursor-pointer">
            <House />
            <span className="font-semibold text-xs">Home</span>
          </li>
          <li className="flex flex-col items-center cursor-pointer">
            <FlaskConical />
            <span className="font-semibold text-xs">Experience</span>
          </li>
          <li className="flex flex-col items-center cursor-pointer">
            <BriefcaseBusiness />
            <span className="font-semibold text-xs">Work</span>
          </li>
          <li className="flex flex-col items-center cursor-pointer">
            <Link />
            <span className="font-semibold text-xs">Links</span>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default Footer;


