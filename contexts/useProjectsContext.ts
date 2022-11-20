import React, { useEffect, useState } from "react";
import { ISelectObject } from "../components/select";
import { ProjectData } from "../interface/project_data";

export interface IPagination {
  totalPage: number;
  currentPage: number;
  limit: number;
}

export interface IProjectContext {
  listProjects: Array<ProjectData>;
  listProjectsSearch: Array<ProjectData>;
  listProjectsShow: Array<ProjectData>;
  pagination: IPagination;
  sortToggle: boolean;
  onInitData: void | any;
  onSearch: void | any;
  onSortPrice: void | any;
  onChangePage: void | any;
  onFilter: void | any;
  onEditData: void | any;
}

export interface HashProjects {
  [Code: string]: number;
}

export const ProjectsContext = React.createContext<IProjectContext>({
  listProjects: [],
  listProjectsSearch: [],
  listProjectsShow: [],
  pagination: {
    totalPage: 0,
    currentPage: 0,
    limit: 50,
  },
  sortToggle: false,
  onInitData: () => {},
  onSearch: () => {},
  onSortPrice: () => {},
  onChangePage: () => {},
  onFilter: () => {},
  onEditData: () => {},
});

export const useProjectsContext = (): [
  ProjectData[],
  ProjectData[],
  ProjectData[],
  IPagination,
  boolean,
  (listProjectParams: Array<ProjectData>) => void,
  (keyword: string) => void,
  () => void,
  (currentPage: number) => void,
  (
    _selectedGenres?: ISelectObject,
    _selectedBlockchain?: ISelectObject,
    _selectedPlatform?: ISelectObject
  ) => void,
  (newData: ProjectData) => void
] => {
  const [listProjects, setListProjects] = useState<Array<ProjectData>>([]);
  const [listProjectsSearch, setListProjectsSearch] = useState<
    Array<ProjectData>
  >([]);
  const [listProjectsShow, setListProjectsShow] = useState<Array<ProjectData>>(
    []
  );
  const [pagination, setPagination] = useState<IPagination>({
    totalPage: 0,
    currentPage: 0,
    limit: 50,
  });
  const [sortToggle, setSortToggle] = useState<boolean>(false);
  const [selectedGenres, setSelectedGenres] = useState<
    ISelectObject | undefined
  >();
  const [selectedBlockchain, setSelectedBlockchain] = useState<
    ISelectObject | undefined
  >();
  const [selectedPlatform, setSelectedPlatform] = useState<
    ISelectObject | undefined
  >();
  const [hashProducts, setHashProducts] = useState<HashProjects>({});
  const [hashProductsSearch, setHashProductsSearch] = useState<HashProjects>(
    {}
  );

  useEffect(() => {
    _onPagination(listProjectsSearch);
  }, [pagination.currentPage]);

  useEffect(() => {
    _onFilter();
  }, [selectedGenres, selectedBlockchain, selectedPlatform]);

  const onInitData = (listProjectParams: Array<ProjectData>) => {
    setListProjects(listProjectParams);
    setListProjectsSearch(listProjectParams);
    _onInitPagination(listProjectParams);
    _onPagination(listProjectParams);
    listProjectParams.forEach((value, index) => {
      hashProducts[value.Code] = index;
    });
  };

  const _onPagination = (listProjectParams: Array<ProjectData>) => {
    let listProjectsPagination: Array<ProjectData> = [];
    let startNode = pagination.currentPage * pagination.limit;

    if (listProjectParams.length == 0) {
      setListProjectsShow(listProjectsPagination);
      return;
    }

    for (let i = startNode; i < listProjectParams.length; i++) {
      const element = listProjectParams[i];
      if (i < startNode + pagination.limit) {
        listProjectsPagination.push(element);
      } else {
        setListProjectsShow(listProjectsPagination);
        return;
      }

      if (i === listProjectParams.length - 1) {
        setListProjectsShow(listProjectsPagination);
        return;
      }
    }
  };

  const _onInitPagination = (listProjectParams: Array<ProjectData>) => {
    let totalPage = Math.ceil(listProjectParams.length / pagination.limit);

    setPagination({
      ...pagination,
      totalPage,
      currentPage: 0,
    });
  };

  const onChangePage = (currentPage: number) => {
    setPagination({
      ...pagination,
      currentPage,
    });
  };

  const onSearch = (keyword: string) => {
    let listSearchByKeyword: Array<ProjectData> = listProjects.filter(
      (value, index) => {
        let sumSearchString: string = value.Name + value.Symbol;

        return (
          sumSearchString.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
        );
      }
    );

    setListProjectsSearch(listSearchByKeyword);
    _onInitPagination(listSearchByKeyword);
    _onPagination(listSearchByKeyword);
    _updateHashSearchProject(listSearchByKeyword);
  };

  const _updateHashSearchProject = (listProjectParams: Array<ProjectData>) => {
    listProjectParams.forEach((value, index) => {
      hashProductsSearch[value.Code] = index;
    });
  };

  const onSortPrice = () => {
    setSortToggle(!sortToggle);
    _onSortPrice();
  };

  const _onSortPrice = () => {
    let listProductsSort = listProjectsShow.sort((a, b) => {
      if (a.Price > b.Price) return sortToggle ? 1 : -1;
      if (a.Price < b.Price) return sortToggle ? -1 : 1;
      return 0;
    });

    setListProjectsShow(listProductsSort);
  };

  const onFilter = (
    _selectedGenres?: ISelectObject,
    _selectedBlockchain?: ISelectObject,
    _selectedPlatform?: ISelectObject
  ) => {
    if (_selectedGenres) setSelectedGenres(_selectedGenres);
    if (_selectedBlockchain) setSelectedBlockchain(_selectedBlockchain);
    if (_selectedPlatform) setSelectedPlatform(_selectedPlatform);
  };

  const _onFilter = () => {
    let listProjectsFilter = listProjects.filter((value, index) => {
      let checkGenres = true;
      let checkBlockchain = true;
      let checkPlatform = true;

      if (selectedGenres) {
        let filterGenres = value.Genres.filter(
          (value) => value.Code == selectedGenres.Code
        );
        if (filterGenres.length === 0) checkGenres = false;
        if (selectedGenres.Code === "") checkGenres = true;
      }

      if (selectedBlockchain) {
        let filterBlockchain = value.BlockChains.filter(
          (value) => value.Code == selectedBlockchain.Code
        );
        if (filterBlockchain.length === 0) checkBlockchain = false;
        if (selectedBlockchain.Code === "") checkBlockchain = true;
      }

      if (selectedPlatform) {
        let filterPlatform = value.Platforms.filter(
          (value) => value.Code == selectedPlatform.Code
        );
        if (filterPlatform.length === 0) checkPlatform = false;
        if (selectedPlatform.Code === "") checkPlatform = true;
      }

      return checkGenres && checkBlockchain && checkPlatform;
    });

    setListProjectsSearch(listProjectsFilter);
    _onInitPagination(listProjectsFilter);
    _onPagination(listProjectsFilter);
    _updateHashSearchProject(listProjectsFilter);
  };

  const onEditData = (newData: ProjectData) => {
    listProjects[hashProducts[newData.Code]] = newData;
    listProjectsSearch[hashProductsSearch[newData.Code]] = newData;

    let newUpdateListShow = listProjectsShow.map((value) => {
      if (value.Code === newData.Code) {
        return newData;
      }
      return value;
    });

    setListProjects(listProjects);
    setListProjectsSearch(listProjectsSearch);
    setListProjectsShow(newUpdateListShow);
  };

  return [
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
  ];
};
