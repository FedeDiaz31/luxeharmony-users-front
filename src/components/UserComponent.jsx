import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../redux/userReducer";
import { Link } from "react-router-dom";

function UserComponent({ setShowUser }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleCloseLogin = () => {
    setShowUser(false);
  };

  return (
    <>
      {user && (
        <>
          <div className="w-full tablet:w-[300px] bg-bgPrimaryColor border border-bgFourthColor rounded-b mb-10 pb-3 px-5 pt-12 grid gap-2">
            <div className=" flex flex-col gap-3">
              <div className="flex justify-between w-full items-center">
                <h3 className="font-light text-2xl">
                  {user.firstname} {user.lastname}
                </h3>
              </div>
            </div>
            <div className="mt-5">
              <Link
                onClick={handleCloseLogin}
                to={`/orders`}
                className="bg-bgPrimaryColor w-full flex justify-center text-center border border-bgFourthColor py-1"
              >
                Your Orders
              </Link>
            </div>
            <div className="">
              <Link
                onClick={handleCloseLogin}
                to={`/profile`}
                className="bg-bgPrimaryColor w-full flex justify-center text-center border border-bgFourthColor py-1"
              >
                Profile
              </Link>
            </div>
            <div className="w-full">
              <button
                className="bg-bgTertiaryColor flex justify-center w-full text-textPrimary  py-1"
                onClick={() => dispatch(logOut())}
              >
                Log out
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default UserComponent;
