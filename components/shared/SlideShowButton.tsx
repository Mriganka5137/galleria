import React, { PropsWithChildren } from "react";

const SlideShowButton = ({ children }: PropsWithChildren) => {
  return (
    <button className=" uppercase font-libre-baskerville text-color-gray-dark tracking-[2.571px]">
      {children}
    </button>
  );
};

export default SlideShowButton;
