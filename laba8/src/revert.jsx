import React, { useEffect, useState } from "react";

const Revert = ({ s }) => {
  const [reversed, setReversed] = useState(s);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setReversed((prev) => prev.slice(1) + prev[0]);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [s]);

  return <div>{reversed}</div>;
};

export default Revert;