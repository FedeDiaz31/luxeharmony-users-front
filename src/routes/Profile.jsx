import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user);
  return (
    <div className="bg-bgSecondaryColor pt-[100px] px-40 pb-10">
      <h3 className="text-textPrimary font-light text-3xl">
        Your Profile, {user.firstname} {user.lastname}
      </h3>
    </div>
  );
}

export default Profile;
