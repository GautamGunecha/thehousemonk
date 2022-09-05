import React, { Fragment, Suspense, useEffect, useState } from "react";
import server from "../../apis/server";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";

const ProfileCard = React.lazy(() => import("./ProfileCard"));

const ProfileHeader = ({ username }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await server.get(`/users/${username}`);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [username]);
  return (
    <Fragment>
      <div className="w-full p-4 tracking-widest bg-gray-200 px-8">
        <Link to="/">
          <div className="flex items-center gap-4 mt-4">
            <TiArrowBack size={30} />
            <h1 className="text-xl font-semibold">Back</h1>
          </div>
        </Link>

        <div className="flex mt-6 mb-4 gap-8">
          <img
            className="w-[12%] object-contain border-2 border-black"
            src={user.avatar_url}
            alt={user.login}
          />
          <section>
            <p className="text-lg font-semibold">{user.name}</p>
            <p className="text-sm font-light">@{user.login}</p>
          </section>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <ProfileCard
          bio={user.bio}
          company={user.company}
          followers={user.followers}
          repos={user.public_repos}
          username={username}
        />
      </Suspense>
    </Fragment>
  );
};

export default ProfileHeader;
