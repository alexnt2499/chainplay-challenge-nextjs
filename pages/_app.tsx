import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  ProjectsContext,
  useProjectsContext,
} from "../contexts/useProjectsContext";
import {
  EditModalContext,
  useEditModalContext,
} from "../contexts/useEditModalContext";

export default function App({ Component, pageProps }: AppProps) {
  const [
    listProjects,
    listProjectsSearch,
    listProjectsShow,
    pagination,
    sortToggle,
    onInitData,
    onSearch,
    onSortPrice,
    onChangePage,
    onFilter,
    onEditData,
  ] = useProjectsContext();

  const [isShown, data, onToggleModal, onInitDataEditModal, onSave] =
    useEditModalContext();

  return (
    <ProjectsContext.Provider
      value={{
        listProjects,
        listProjectsSearch,
        listProjectsShow,
        pagination,
        sortToggle,
        onInitData,
        onSearch,
        onSortPrice,
        onChangePage,
        onFilter,
        onEditData,
      }}
    >
      <EditModalContext.Provider
        value={{
          isShown,
          data,
          onToggleModal,
          onInitData: onInitDataEditModal,
          onSave,
        }}
      >
        <Component {...pageProps} />
      </EditModalContext.Provider>
    </ProjectsContext.Provider>
  );
}
