import React, { FC } from "react";

interface TemplateProps {
  children: React.ReactNode;
}

const Template: FC<TemplateProps> = ({ children }) => {
  return (
    <div className="sm:w-[380px] flex items-center w-full justify-center h-screen m-auto">
      {children}
    </div>
  );
};

export default Template;
