import Navbar from "@/components/shared/Navbar";
import { Separator } from "@/components/ui/separator";
import React, { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="container max-md:px-2">
      <Navbar />
      <Separator className="bg-color-gray mb-10 " />
      {children}
    </div>
  );
};

export default layout;
