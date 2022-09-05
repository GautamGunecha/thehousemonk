import React from "react";
import Repository from "./Repository";

const ProfileCard = ({ bio, company, followers, repos, username }) => {
  return (
    <div className="w-full h-[35em] overflow-y-auto tracking-widest overflow-x-hidden p-4 px-8 bg-white">
      {bio ? (
        <div className="flex flex-col gap-2 mb-4">
          <h1 className="text-lg font-medium text-slate-500">Bio</h1>
          <p className="text-sm font-medium text-justify">{bio}</p>
        </div>
      ) : (
        ""
      )}

      {company ? (
        <div className="flex flex-col gap-2 mb-4">
          <h1 className="text-lg font-medium text-slate-500">Works at</h1>
          <p className="text-sm font-medium text-justify">{company}</p>
        </div>
      ) : (
        ""
      )}

      <div className="flex items-center justify-between mb-4">
        <section>
          <h1 className="text-lg font-medium text-slate-500">Repositories</h1>
          <p className="text-xl font-medium text-justify">{repos}</p>
        </section>
        <section>
          <h1 className="text-lg font-medium text-slate-500">Followers</h1>
          <p className="text-xl font-medium text-justify">{followers}</p>
        </section>
      </div>

      <div>
        <h1 className="text-lg font-medium text-slate-500">
          Pinned Repositories
        </h1>
        <Repository username={username} />
      </div>
    </div>
  );
};

export default ProfileCard;
