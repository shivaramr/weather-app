"use client";

import React from "react";
import Home from "./components/home";
import { ApiProvider } from "./context/apiContext";

const Page = () => {
  return (
    <ApiProvider>
      <Home />
    </ApiProvider>
  );
};

export default Page;
