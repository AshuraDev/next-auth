"use client";

import React from "react";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "redirect" | "modal";
  asChild?: boolean;
}

const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const onClick = () => {
    console.log("Le button à été cliquer");
  };

  if (mode === "modal") {
    return <div>TODO:Implemente modal</div>;
  }
  return <span onClick={onClick}>{children}</span>;
};

export default LoginButton;
