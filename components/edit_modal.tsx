import React, { useContext, useEffect, useState } from "react";
import {
  EditModalContext,
  IEditModalContext,
} from "../contexts/useEditModalContext";
import {
  IProjectContext,
  ProjectsContext,
} from "../contexts/useProjectsContext";
import { ProjectData } from "../interface/project_data";
import {
  listSelectBlockchain,
  listSelectGenres,
  listSelectPlatform,
} from "../utils/select_items";
import CustomButton from "./button";
import CustomInput from "./input";
import MultiSelect from "./multi_select";
import { ISelectObject } from "./select";

const EditModal = () => {
  const editModalContext = useContext<IEditModalContext>(EditModalContext);
  const projectsContext = useContext<IProjectContext>(ProjectsContext);

  const [formData, setFormData] = useState<ProjectData>({
    Index: -1,
    Code: "",
    Name: "",
    ImageUrl: "",
    Symbol: "",
    BlockChains: [],
    Genres: [],
    Platforms: [],
    Price: 0,
  });

  const [formValidate, setFormValidate] = useState({
    Code: "",
    Name: "",
    ImageUrl: "",
    Symbol: "",
    BlockChains: "",
    Genres: "",
    Platforms: "",
    Price: "",
  });

  useEffect(() => {
    if (editModalContext.data) setFormData(editModalContext.data);
  }, [editModalContext.data]);

  const _onClose = () => {
    editModalContext.onToggleModal();
  };

  const _onChangeText = (e: React.FormEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
    setFormValidate({ ...formValidate, [e.currentTarget.name]: "" });

  };

  const _onSelected = (selected: any, name: string) => {
    setFormData({ ...formData, [name]: selected });
    setFormValidate({ ...formValidate, [name]: "" });
  };

  const _onSave = () => {
    let flag = true;
    if (!formData.Name) {
      setFormValidate({
        ...formValidate,
        Name: "The Name field cannot be left blank.",
      });
      flag = false;
    }
    if (!formData.Symbol) {
      setFormValidate({
        ...formValidate,
        Symbol: "The Symbol field cannot be left blank.",
      });
      flag = false;
    }
    if (!formData.Price) {
      setFormValidate({
        ...formValidate,
        Price: "The Price field cannot be left blank.",
      });
      flag = false;
    }
    if (formData.BlockChains.length === 0) {
      setFormValidate({
        ...formValidate,
        BlockChains: "You must choose at least 1 Blockchain.",
      });
      flag = false;
    }
    if (formData.Genres.length === 0) {
      setFormValidate({
        ...formValidate,
        Genres: "You must choose at least 1 Genre.",
      });
      flag = false;
    }
    if (formData.Platforms.length === 0) {
      setFormValidate({
        ...formValidate,
        Platforms: "You must choose at least 1 Platform.",
      });
      flag = false;
    }
    if (flag) projectsContext.onEditData(formData);
  };

  return editModalContext.isShown ? (
    <div className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center overflow-y-scroll scrollbar-hide">
      <div className="bg-white py-6 px-5 rounded-[10px] relative">
        <CustomButton
          onClick={_onClose}
          text="X Close"
          className="absolute right-5 top-4 lg:block hidden"
        />

        <p className="text-center mb-6 text-[30px] uppercase font-bold text-[#64748B]">
          #{formData?.Code}
        </p>
        <div className="flex justify-center lg:mb-8 mb-1">
          <img
            src={formData?.ImageUrl}
            className={"rounded-full lg:w-28 lg:h-28 w-10 h-10"}
            alt="logo project"
          />
        </div>
        <div className="grid lg:grid-rows-3 grid-rows-6 grid-flow-col gap-8">
          <CustomInput
            label="Name Project"
            className="w-80 h-12 px-2 bg-[#F1F5F9] rounded-[10px]"
            placeholder="Enter name project"
            id="name"
            name="Name"
            value={formData?.Name}
            error={formValidate.Name}
            onChange={_onChangeText}
          />
          <CustomInput
            label="Symbol"
            className="w-80 h-12 px-2 bg-[#F1F5F9] rounded-[10px]"
            placeholder="Enter symbol project"
            id="symbol"
            name="Symbol"
            value={formData?.Symbol}
            error={formValidate.Symbol}
            onChange={_onChangeText}
          />

          <CustomInput
            label="Price"
            className="w-80 h-12 px-2 bg-[#F1F5F9] rounded-[10px]"
            placeholder="Enter price project"
            type={"number"}
            id="price"
            name="Price"
            value={formData?.Price}
            error={formValidate.Price}
            onChange={_onChangeText}
          />

          <MultiSelect
            label="Blockchains"
            placeholder="Select blockchains"
            listMenuSelects={listSelectBlockchain}
            listSelectedDefault={formData?.BlockChains as Array<ISelectObject>}
            error={formValidate.BlockChains}
            onSelected={(selected) => {
              _onSelected(selected, "BlockChains");
            }}
          />

          <MultiSelect
            label="Genres"
            placeholder="Select Genres"
            listMenuSelects={listSelectGenres}
            listSelectedDefault={formData?.Genres as Array<ISelectObject>}
            error={formValidate.Genres}
            onSelected={(selected) => {
              _onSelected(selected, "Genres");
            }}
          />

          <MultiSelect
            label="Platforms"
            placeholder="Select Platforms"
            listMenuSelects={listSelectPlatform}
            listSelectedDefault={formData?.Platforms as Array<ISelectObject>}
            error={formValidate.Platforms}
            onSelected={(selected) => {
              _onSelected(selected, "Platforms");
            }}
          />
        </div>
        <div className="flex mt-6 justify-end">
          <CustomButton
            onClick={_onClose}
            text="X Close"
            className=" right-5 top-4 mr-4"
          />
          <CustomButton
            onClick={_onSave}
            className="bg-gradient-to-r from-[#D71C5D] to-[#FF9017] text-sm w-56 px-3 py-4 text-white text-[20px] rounded-[10px]"
            text="Save"
          />
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default EditModal;
