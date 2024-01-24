import React, { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <h1>Galleria</h1>
      {children}
    </div>
  );
};

export default layout;
