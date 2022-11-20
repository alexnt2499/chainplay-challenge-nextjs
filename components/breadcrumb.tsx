import React from "react";
import CustomIcon from "../icons";

interface IBreadcrumb {
  listText: Array<string>;
}

export const Breadcrumb: React.FC<IBreadcrumb> = ({ listText }) => {
  return (
    <div className="flex justify-start items-center">
      {listText.map((value, index) => {
        if (index == 0)
          return (
            <p key={index.toString()} className="font-light text-sm text-[#334155] leading-5">{value}</p>
          );
        return (
          <div className="flex justify-start items-center" key={index.toString()}>
            <CustomIcon.ArrowLeft className="mx-2" />
            <p className="font-light text-sm text-[#334155] leading-5">{value}</p>
          </div>
        );
      })}
    </div>
  );
};
