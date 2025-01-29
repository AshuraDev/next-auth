"use client";

import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export const Social = () => {
  return (
    <div className="w-full flex items-center gap-x-2">
      <Button
        variant={"outline"}
        size={"lg"}
        className="w-full"
        onClick={() => {}}
      >
        <FcGoogle className="w-5 h-5" />
      </Button>
      <Button
        variant={"outline"}
        size={"lg"}
        className="w-full"
        onClick={() => {}}
      >
        <FaGithub className="w-5 h-5" />
      </Button>
    </div>
  );
};
