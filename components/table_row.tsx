import React, { useContext, useEffect } from "react";
import {
  EditModalContext,
  IEditModalContext,
} from "../contexts/useEditModalContext";
import CustomIcon from "../icons";
import { Genre, Platform, ProjectData } from "../interface/project_data";
import CustomButton from "./button";
import InfoProject, { IInfoProject } from "./info_project";

interface ITableRow {
  id: number;
  price: number;
  infoProject: IInfoProject;
  genre: Array<Genre>;
  platform: Array<Platform>;
  data: ProjectData;
}

const TableRow: React.FC<ITableRow> = ({
  id,
  price,
  infoProject,
  genre,
  platform,
  data,
}) => {
  const editModalContext = useContext<IEditModalContext>(EditModalContext);

  const _renderPlatform = (platformCode: string, index: number) => {
    switch (platformCode) {
      case "windows":
        return (
          <CustomIcon.WindowIcon key={platformCode + index} className="mr-1" />
        );
      case "browser":
        return (
          <CustomIcon.BrowserIcon key={platformCode + index} className="mr-1" />
        );
      case "android":
        return (
          <CustomIcon.AndroidIcon key={platformCode + index} className="mr-1" />
        );
      case "ios":
        return (
          <CustomIcon.AppleIcon key={platformCode + index} className="mr-1" />
        );
      default:
        return <div key={platformCode + index}></div>;
    }
  };

  const onOpenEditModal = () => {
    editModalContext.onInitData(data);
    editModalContext.onToggleModal();
  };

  return (
    <tr className="border-b-[1px] py-2 border-[#EDF2F7] hover:bg-[#EDF2F7]">
      <td className="p-4">
        <p>{id}</p>
      </td>
      <td className="p-4">
        <InfoProject {...infoProject} />
      </td>
      <td className="p-4 ">{price.toString()}$</td>
      <td className="p-4">
        {genre.map((value, index) => {
          if (index === genre.length - 1) {
            return <span key={value.Name + index}>{value.Name}</span>;
          }
          return <span key={value.Name + index}>{value.Name} | </span>;
        })}
      </td>
      <td className="p-4 text-center">
        <div className="flex justify-center items-center">
          {platform.map((value: Platform, index) =>
            _renderPlatform(value.Code, index)
          )}
        </div>
      </td>

      <td className="p-4 text-center">
        <div className="flex justify-center items-center">
          <CustomButton onClick={onOpenEditModal} text="Edit" />
        </div>
      </td>
    </tr>
  );
};

function areEqual(prevProps: ITableRow, nextProps: ITableRow) {
  
  if (JSON.stringify(prevProps) === JSON.stringify(nextProps)) return true;
  return false;
}

export default React.memo(TableRow, areEqual);
