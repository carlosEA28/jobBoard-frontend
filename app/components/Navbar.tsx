import { Link, NavLink } from "react-router";
import logo from "../../app/assets/logo.svg";

export default function Navbar() {
  return (
    <header className="w-full px-36 py-9 bg-[#F5F3EA] flex items-center justify-between">
      <div>
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <nav className="gap-8 w-[466px] h-7 flex text-base leading-7 text-[#574F4A]">
        <NavLink to={"/latestjobs"}>Latest Jobs</NavLink>
        <NavLink to={"/uploadcv"}>Upload CV</NavLink>
        <NavLink to={"/postajob"}>Post a Job</NavLink>
        <NavLink to={"/reset-password"}>Reset Password</NavLink>
      </nav>
      <div className="flex w-48 h-7 justify-between">
        <Link to={"/signin"} className="text-base font-bold text-[#110B08]">
          Sign In
        </Link>
        <Link to={"/signup"} className="flex items-center">
          <button className="text-white bg-[#110B08] w-[108px] h-11 rounded">
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
}
