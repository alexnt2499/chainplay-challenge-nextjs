import React, { useEffect, useState } from "react";
import CustomIcon from "../icons";
import CustomButton from "./button";
import { ISelectObject } from "./select";

interface IMultiSelect {
  label: string;
  error?: string;
  placeholder?: string;
  listMenuSelects: Array<ISelectObject>;
  listSelectedDefault: Array<ISelectObject>;
  onSelected: (selected: Array<ISelectObject>) => void;
}

const MultiSelect: React.FC<IMultiSelect> = ({
  label,
  error,
  placeholder,
  listMenuSelects,
  listSelectedDefault,
  onSelected,
}) => {
  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);
  const [listSelected, setListSelected] = useState<Array<ISelectObject>>([]);

  useEffect(() => {
    setListSelected(listSelectedDefault);
  }, [listSelectedDefault]);

  const _onSelected = (item: ISelectObject) => {
    let checkIsSelected = listSelected.filter(
      (value) => value.Code === item.Code
    );
    if (checkIsSelected.length !== 0) {
      onSelected(listSelected.filter((value) => value.Code !== item.Code));
      setListSelected(listSelected.filter((value) => value.Code !== item.Code));
      return;
    }
    onSelected([...listSelected, item]);
    setListSelected([...listSelected, item]);
  };

  const _renderDropdown = () => {
    return toggleDropdown ? (
      <div
        id="dropdown-menu"
        className="absolute h-56 w-full z-50  bg-[#F1F5F9] top-[80px] left-0 rounded overflow-auto"
      >
        {listMenuSelects.map((value, index) => {
          let checkIsSelected = listSelected.filter(
            (item) => item.Code === value.Code
          );
          return index === 0 ? (
            <div key={value.Code}> </div>
          ) : (
            <CustomButton
              key={value.Code}
              className={
                checkIsSelected.length !== 0
                  ? "w-full items-center flex p-2 text-white bg-[#D71C5D] border  hover:text-white hover:bg-gradient-to-r from-[#D71C5D] to-[#FF9017] text-[15px] leading-6"
                  : "w-full items-center flex p-2  hover:text-white hover:bg-gradient-to-r from-[#D71C5D] to-[#FF9017] text-[15px] leading-6"
              }
              text={value.Name}
              iconLeft={
                value.ExtendValue ? (
                  <img
                    className="w-5 h-5 rounded-full mr-2"
                    alt="chain"
                    src={value.ExtendValue}
                  />
                ) : (
                  <div></div>
                )
              }
              onClick={() => _onSelected(value)}
            />
          );
        })}
      </div>
    ) : (
      <div> </div>
    );
  };

  const _renderBlockchains = () => {
    return listSelected.map((value: ISelectObject, index) => {
      return (
        <div key={value.Code + index} className="flex items-center">
          {value.ExtendValue ? (
            <img
              className="w-5 h-5 rounded-full mr-2"
              alt="chain"
              src={value.ExtendValue}
            />
          ) : (
            <p className="text-[12px]">{value.Name},</p>
          )}
        </div>
      );
    });
  };

  return (
    <div>
      <div className="relative">
        <label htmlFor={""} className="ml-2 mb-2 font-semibold">
          {label}
        </label>
        <button
          onClick={() => setToggleDropdown(!toggleDropdown)}
          className="cursor-pointer  w-80 h-12  mt-2 bg-[#F1F5F9] rounded-[10px] flex justify-between items-center"
        >
          <div className="flex items-center pl-2 overflow-hidden">
            {listSelected.length === 0 ? (
              <p className="text-gray-400">{placeholder}</p>
            ) : (
              _renderBlockchains()
            )}
          </div>
          <CustomIcon.ArrowDown className="absolute right-2" />
        </button>
        {error ? <p className="text-red-700 mt-1">{error}</p> : <div> </div>}
        {_renderDropdown()}
      </div>
      {toggleDropdown ? (
        <div
          onClick={() => setToggleDropdown(false)}
          className="absolute w-[100vw] h-[100vh]  left-0 top-0 z-40 opacity-0"
        ></div>
      ) : null}
    </div>
  );
};

export default MultiSelect;
