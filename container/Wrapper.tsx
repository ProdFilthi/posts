import React, { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

const Wrapper = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-center px-24 flex-col border-l border-gray-800 border-r min-h-screen mx-auto w-[700px]">
      {children}
    </div>
  );
};

export default Wrapper;
