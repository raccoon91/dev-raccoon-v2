import React, { FC, useState, useEffect } from "react";

import Header from "components/Header";
import About from "components/About";

const AboutPage: FC = () => {
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
      <About mount={mount} />
    </>
  );
};

export default AboutPage;
