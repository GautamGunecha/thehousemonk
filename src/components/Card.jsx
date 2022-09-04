import React, { useEffect, useRef, useState } from "react";
import server from "../apis/server";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Card = ({ text }) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [prevY, setPrevY] = useState(0);

  let loadingRef = useRef(null);
  let prevYRef = useRef({});

  prevYRef.current = prevY;

  useEffect(() => {
    setUsers([]);
  }, [text]);

  useEffect(() => {
    // fetching api data part set
    const fetchUsers = async () => {
      setLoading(true);
      setErr(false);
      try {
        const response = await server.get("/search/users", {
          params: {
            q: text,
            order: "desc",
            page,
            per_page: 10,
          },
        });
        setUsers((prevData) => {
          return [
            ...new Set([
              ...prevData,
              ...response.data.items?.map((content) => content),
            ]),
          ];
        });
        setLoading(false);
      } catch (error) {
        setErr(true);
      }
    };

    const timer = setTimeout(() => {
      if (text) fetchUsers();
    }, 700);

    // dom for scroll
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const handleObserver = (entities, observer) => {
      const y = entities[0].boundingClientRect.y;
      if (prevYRef.current > y) {
        setPage((val) => val + 1);
      }
      setPrevY(y);
    };

    const observer = new IntersectionObserver(handleObserver, options);
    observer.observe(loadingRef.current);

    return () => clearTimeout(timer);
  }, [text, page, prevY]);

  return (
    <div className="w-full h-auto max-h-[30em] overflow-y-auto overflow-x-hidden p-4 px-8 bg-white">
      <div className="w-full grid grid-cols-2 items-center gap-2 md:gap-4 justify-between">
        {users?.map((data) => (
          <div className="flex gap-2 p-2 shadow-sm border" key={uuidv4()}>
            <img
              className="rounded-full w-[20%]"
              src={data.avatar_url}
              alt={data.login}
            />
            <section>
              <Link to={`/user/${data.login}`}>
                <p className="text-sm md:text-md md:font-semibold cursor-pointer">
                  {data.login}
                </p>
              </Link>

              <p className="text-xs font-light">{data.type}</p>
            </section>
          </div>
        ))}
      </div>

      <div
        className="w-full flex items-center justify-center  h-20"
        ref={loadingRef}
      >
        {!err && loading && (
          <h1 className="md:text-2xl font-semibold text-center">Loading...</h1>
        )}

        {err && (
          <h1 className="md:text-2xl font-semibold text-center">
            Max Limit Reached!
          </h1>
        )}
      </div>
    </div>
  );
};

export default Card;
