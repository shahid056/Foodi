import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigation = useNavigate();
  return (
    <>
      <div className="w-full">
        <table className="w-full">
          <tbody>
            <tr className="w-full">
              <td className="w-1/6 text-center border-solid border-t-0 border-2 border-black  ">
                <a
                  href=""
                  onClick={() => {
                    navigation("/");
                  }}
                >
                  Home
                </a>
              </td>
              <td className=" text-center border-t-0 border-solid-black border-2 border-black">
                About Us
              </td>
              <td className="text-center border-t-0 border-solid  border-2 border-black">
                <a
                  href=""
                  onClick={() => {
                    navigation("/");
                  }}
                >
                  Menu
                </a>
              </td>
              <td className="text-center border-t-0 border-solid  border-2 border-black">
                Frenchies
              </td>
              <td className="w-1/5 text-center border-t-0 border-solid  border-2 border-black">
                Order
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Navbar;
