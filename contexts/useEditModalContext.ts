import React, { useState } from "react";
import { ProjectData } from "../interface/project_data";

export interface IEditModalContext {
  isShown: boolean;
  data: ProjectData | null;
  onToggleModal: void | any;
  onInitData: void | any;
  onSave: void | any;
}

export const EditModalContext = React.createContext<IEditModalContext>({
  isShown: false,
  data: null,
  onToggleModal: () => {},
  onInitData: () => {},
  onSave: () => {},
});

export const useEditModalContext = (): [
  boolean,
  ProjectData | null,
  () => void,
  (dataParam: ProjectData) => void,
  () => void
] => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [data, setData] = useState<ProjectData | null>(null);

  const onToggleModal = () => setIsShown(!isShown);
  const onInitData = (dataParam: ProjectData) => setData(dataParam);
  const onSave = () => {};

  return [isShown, data, onToggleModal, onInitData, onSave];
};
