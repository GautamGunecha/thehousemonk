import React from "react";
import { useParams } from "react-router-dom";
import ProfileHeader from "../components/profilePage/ProfileHeader";

// css
const homeContainer =
  "w-full flex flex-col shadow-sm md:w-[75%] m-auto md:mt-2";

const Profile = () => {
  const { username } = useParams();

  return (
    <div className={homeContainer}>
      <ProfileHeader username={username} />
    </div>
  );
};

export default Profile;
