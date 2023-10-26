import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const GetDomain = () => {
  //   const navigate = useNavigate();
  useEffect(() => {
    const domain = window.location.hostname;
    console.log(domain);
    //   setStartUpFunction;
  });
  return <>{/* <h1>Page Not Found</h1> */}</>;
};
export default GetDomain;
