import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

// https://gh-pinned-repos.egoist.sh/?username=gautamgunecha

const Repository = ({ username }) => {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchPinnedRepos = async () => {
      try {
        const response = await axios.get("https://gh-pinned-repos.egoist.sh", {
          params: {
            username,
          },
        });
        setRepos(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPinnedRepos();
  }, [username]);
  return (
    <div className="mt-4 tracking-widest md:h-72 overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col gap-4">
        {repos?.map((content) => (
          <div className="border md:flex gap-4 p-2 shadow-lg" key={uuidv4()}>
            <img
              className="w-full object-contain md:w-[20%]"
              src={content.image}
              alt={content.owner}
            />
            <section>
              <p className="text-md font-semibold">
                {content.owner}/{content.repo}
              </p>
              <p className="text-justify mt-2">{content.description}</p>
            </section>
          </div>
        ))}
        {loading && (
          <h1 className="text-xl text-center font-semibold">Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Repository;
