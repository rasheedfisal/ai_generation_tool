"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("4400b615-a245-4b56-a3e9-0e14236c88d0");
  }, []);

  return null;
};
