import React, { Suspense, useState } from "react";
import Search from "../components/Search";
const Card = React.lazy(() => import("../components/Card"));

// css
const homeContainer =
  "w-full flex flex-col shadow-sm md:w-[75%] m-auto md:mt-2";

const Home = () => {
  const [text, setText] = useState("");

  const searchUser = (val) => {
    setText(val);
  };

  return (
    <div className={homeContainer}>
      <Search searchUser={searchUser} />
      <Suspense fallback={<div>Loading...</div>}>
        <Card text={text} />
      </Suspense>
    </div>
  );
};

export default Home;
