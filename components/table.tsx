import React, { useContext } from "react";
import {
  IProjectContext,
  ProjectsContext,
} from "../contexts/useProjectsContext";
import CustomIcon from "../icons";
import { ProjectData } from "../interface/project_data";
import {
  listSelectBlockchain,
  listSelectGenres,
  listSelectPlatform,
} from "../utils/select_items";
import CustomButton from "./button";
import CustomSelect, { ISelectObject } from "./select";
import TableRow from "./table_row";

const CustomTable = () => {
  const projectsContext = useContext<IProjectContext>(ProjectsContext);

  const _renderOutOfText = () => {
    let limitInPage =
      projectsContext.pagination.currentPage *
        projectsContext.pagination.limit +
      projectsContext.pagination.limit;
    let outOfText =
      projectsContext.listProjectsSearch.length < limitInPage
        ? projectsContext.listProjectsSearch.length
        : limitInPage;
    return (
      <p className="text-[#64748B] text-[15px] mt-2">
        Showing{" "}
        {projectsContext.pagination.currentPage *
          projectsContext.pagination.limit +
          (projectsContext.listProjectsSearch.length !== 0 ? 1 : 0)}{" "}
        - {outOfText} out of {projectsContext.listProjectsSearch.length}
      </p>
    );
  };

  const _renderListProject = () => {
    return projectsContext.listProjectsShow.map(
      (value: ProjectData, index: number) => (
        <TableRow
          key={value.Code + value.Index}
          id={value.Index + 1}
          price={value.Price}
          infoProject={{
            name: value.Name,
            symbol: value.Symbol,
            logoUrl: value.ImageUrl,
            blockchains: value.BlockChains,
          }}
          genre={value.Genres}
          platform={value.Platforms}
          data={value}
        />
      )
    );
  };

  const _renderPagination = () => {
    return Array(projectsContext.pagination.totalPage)
      .fill(0)
      .map((value, index) => {
        return (
          <CustomButton
            key={value + index}
            onClick={() => projectsContext.onChangePage(index)}
            text={`${index + 1}`}
            className={`w-8 h-8 ${
              index === projectsContext.pagination.currentPage
                ? "bg-[#D71C5D] text-white "
                : "hover:bg-[#edf2f7]"
            } rounded-lg mr-1`}
          />
        );
      });
  };

  const _onChangeSearch = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    projectsContext.onSearch(e.currentTarget.value);
  };

  const _onSelectedGenres = (selected: ISelectObject) => {
    projectsContext.onFilter(selected, null, null);
  };

  const _onSelectedBlockchain = (selected: ISelectObject) => {
    projectsContext.onFilter(null, selected, null);
  };

  const _onSelectedPlatform = (selected: ISelectObject) => {
    projectsContext.onFilter(null, null, selected);
  };

  return (
    <div>
      <div className="flex justify-between items-center mt-6 flex-col lg:flex-row">
        <div className="flex flex-col w-full lg:w-auto lg:flex-row">
          <CustomSelect
            listSelects={listSelectGenres}
            icon={<CustomIcon.GameIcon />}
            defaultSelect={listSelectGenres[0]}
            onSelected={_onSelectedGenres}
          />

          <CustomSelect
            listSelects={listSelectBlockchain}
            icon={<CustomIcon.BoxIcon />}
            defaultSelect={listSelectBlockchain[0]}
            onSelected={_onSelectedBlockchain}
          />

          <CustomSelect
            listSelects={listSelectPlatform}
            icon={<CustomIcon.PhoneIcon />}
            defaultSelect={listSelectPlatform[0]}
            onSelected={_onSelectedPlatform}
          />
        </div>

        <div className="flex justify-center items-center relative mt-3  w-full lg:w-auto">
          <CustomIcon.SearchIcon className="absolute left-4" />
          <input
            className="flex justify-center items-center w-full h-[38px] pl-12 pr-3 text-[13px] bg-[#F1F5F9] rounded-[10px]"
            placeholder="Name, Symbol"
            onChange={_onChangeSearch}
          />
        </div>
      </div>
      <div className="mt-9 overflow-auto ">
        <table className="w-full min-w-[1200px]">
          <thead className="border-b-[1px] py-2 border-[#738194]">
            <tr>
              <th className="w-10 text-center p-2">
                <span className="uppercase font-normal text-sm">#</span>
              </th>
              <th className="w-[451px] text-start p-2">
                <span className="uppercase font-normal text-sm">Name</span>
              </th>
              <th className="w-[244px] text-start p-2">
                <div
                  onClick={() => projectsContext.onSortPrice()}
                  className="flex items-center cursor-pointer"
                >
                  <span className="uppercase font-normal text-sm">Price</span>
                  <CustomIcon.ArrowDown
                    className={
                      projectsContext.sortToggle ? "ml-1" : "ml-1 rotate-180"
                    }
                  />
                </div>
              </th>
              <th className="w-[470px] text-start p-2">
                <span className="uppercase font-normal text-sm">Genre</span>
              </th>
              <th className="w-[122px] text-center p-2">
                <span className="uppercase font-normal text-sm">Platform</span>
              </th>
              <th className="w-[100px] text-center p-2">
                <span className="uppercase font-normal text-sm">Action</span>
              </th>
            </tr>
          </thead>
          <tbody>{_renderListProject()}</tbody>
        </table>
      </div>
      <div className="pt-5 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
        {_renderOutOfText()}
        <div className="order-first md:order-none">
          <nav className="flex items-center space-x-0.5 font-medium">
            {_renderPagination()}
          </nav>
        </div>
        <div className="w-56"></div>
      </div>
    </div>
  );
};

export default CustomTable;
