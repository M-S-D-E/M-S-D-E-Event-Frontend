import { Link } from "react-router-dom";
import K from "../constants";
import logo from "../assets/images/logo.jpeg";

const NavBar = () => {
  return (
    <div className="flex justify-between px-56 py-4 fixed w-full left-0 top-0 text-black   items-center z-50">
      <img src={logo} alt="Description" className="h-10 w-20"/>
      
      <div className="flex gap-x-16">
        {
          K.NAVLINKS.map(
            (item,index) => {
              return <Link key={index} to={item.path} className="hover:text-[#E0A75E]">{item.name}</Link>
            }
          )
        }
      </div>
     
    </div>
  )
};

export default NavBar;