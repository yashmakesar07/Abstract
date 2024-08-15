import logo from "../assets/abstract_logo_icon_145529.png";
import menu from "../assets/icons8-menu-50.png"

const Navbar = () => {
  return (
    <>
      <div className=" bg-black flex justify-between items-center h-[100px] w-full border-b-2 px-[5vw] py-0 mb:flex">
        <div className=" h-full flex justify-center items-center max-sm :flex justify-center items-center">
          <img src={logo} alt="Logo" className=" h-[50%] bg-white rounder-[100%] " />
          <h3 className="text-white font-bold m-3 text-3xl">
            Abstract
          </h3>
        </div>

        <div className="flex items-center gap-[3vw]  max-sm:hidden  ">
          <button className="border-2 border-wite   text-white p-5 rounded-[20%]  font-semibold">
            Submit a Request{" "} 
          </button>
          <button className="border-2  bg-blue-700 p-5 rounded-[20%] text-white  font-semibold">
            Signin{" "}
          </button>
        </div>
        <img
          src={menu}
          alt="Menu"  
          className="h-[30%]  bg-white flex items-center mb:visible md:hidden"/>
      </div>
    </>
  );
};

export default Navbar;
