import React, { FC, useEffect, useState } from "react";

import Header from "components/Header";
import Home from "components/Home";

const HomePage: FC = () => {
  const [mount, setMount] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMount(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const routerChangeEvent = (): void => {
    setMount(false);
  };

  return (
    <>
      <Header routerChangeEvent={routerChangeEvent} />
      <Home mount={mount} />
    </>
  );
};

export default HomePage;
