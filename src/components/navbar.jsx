import { Link } from "react-router-dom";
import K from "../constants";
import logo from "../assets/images/logo.jpeg";

const NavBar = () => {
  return (
    <div className="flex justify-between px-56 py-4 fixed w-full left-0 top-0 text-[#221f1b]  items-center z-50 bg-slate-200">
      <img src={logo} alt="Description" className="h-14 w-20"/>
      
      <div className="flex gap-x-16">
        {
          K.NAVLINKS.map(
            (item,index) => {
              return <Link key={index} to={item.path} className="hover:text-[#C58940]">{item.name}</Link>
            }
          )
        }
      </div>
     
    </div>
  )
};

export default NavBar;