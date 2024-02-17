import Title from "../Title/Title";
import logo from "../../assets/logo.png";
import Navbar from "./Navbar";

function Nav() {
  const title = "Foodi";
  return (
    <>
      <div className="w-full p-10 cursor-pointer">
        <table className="w-full border-solid border-2 border-black">
          <tbody>
            <tr className="">
              <td className="w-1/6 text-end border-solid border-2 border-black  ">
                <img className="w-[6vw] mr-auto ml-auto" src={logo} />
              </td>
              <td className="border-solid-black border-2 border-black">
                <Title className="w-1/2" title={title} />
              </td>
              <td className="w-1/5 text-center border-solid  border-2 border-black">
                data
              </td>
            </tr>
          </tbody>
        </table>
        <Navbar />
      </div>
    </>
  );
}

export default Nav;
