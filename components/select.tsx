import React, { useEffect, useState } from "react";
import CustomIcon from "../icons";
import CustomButton from "./button";

export interface ISelectObject {
  Name: string;
  Code: string;
  ExtendValue?: string;
}

export interface ICustomSelect {
  selectedProp?: ISelectObject;
  defaultSelect?: ISelectObject;
  listSelects: Array<ISelectObject>;
  icon: React.ReactNode;
  onSelected: (selected: ISelectObject) => void;
}

const CustomSelect: React.FC<ICustomSelect> = ({
  selectedProp,
  defaultSelect,
  listSelects,
  icon,
  onSelected,
}) => {
  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);
  const [selected, setSelected] = useState<ISelectObject | undefined>({
    Name: "",
    Code: "",
  });

  useEffect(() => {
    setSelected(selectedProp ? selectedProp : defaultSelect);
  }, [selectedProp]);

  useEffect(() => {
    onSelected(
      selected ?? {
        Name: "",
        Code: "",
      }
    );
  }, [selected]);

  const _onSelected = (_setSelected: any) => {
    setSelected(_setSelected);
    setToggleDropdown(false);
  };

  return (
    <div className="flex justify-center items-center px-2 py-[6px]  lg:mr-3 bg-[#F1F5F9] rounded-[10px] mt-3 relative">
      <button
        onClick={() => setToggleDropdown(!toggleDropdown)}
        className="flex justify-center items-center px-2 w-full cursor-pointer"
      >
        {icon}
        <p className="text-[13px] leading-6 mx-2">
          {selected ? selected?.Name : defaultSelect?.Name}
        </p>
        <CustomIcon.ArrowDown />
      </button>

      {toggleDropdown ? (
        <div
          id="dropdown-menu"
          className="absolute h-56 w-full z-50 lg:w-[200px] bg-[#F1F5F9] top-[36px] left-0 rounded overflow-auto"
        >
          {listSelects.map((value) => (
            <CustomButton
              key={value.Code}
              className="w-full flex p-2 hover:text-white hover:bg-gradient-to-r from-[#D71C5D] to-[#FF9017] text-[15px] leading-6"
              text={value.Name}
              onClick={() => _onSelected(value)}
            />
          ))}
        </div>
      ) : (
        <div> </div>
      )}
    </div>
  );
};

export default CustomSelect;
