import React, { useContext, useEffect, useState } from "react";
import { Breadcrumb } from "../components/breadcrumb";
import EditModal from "../components/edit_modal";
import Layout from "../components/layout";
import CustomTable from "../components/table";
import {
  IProjectContext,
  ProjectsContext,
} from "../contexts/useProjectsContext";
import { ProjectData } from "../interface/project_data";
import { base_url } from "../utils/config";

function Home() {
  const projectsContext = useContext<IProjectContext>(ProjectsContext);

  useEffect(() => {
    getListProject();
  }, []);

  async function getListProject() {
    try {
      const res: any = await fetch(`${base_url}/api/example`);
      const data: Array<ProjectData> = await res.json();
      projectsContext.onInitData(
        data.map((value, index) => ({ ...value, Index: index }))
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout>
      <main className="flex-1">
        <div className="w-full flex justify-center">
          <div className="container lg:min-w-[1364px] px-5">
            <div className="mt-8">
              <Breadcrumb
                listText={["Home", "Games", "Best Free P2E NFT Games in 2022"]}
              />
            </div>
            <p className="mt-8 text-3xl font-medium leading-10">
              Best Free P2E NFT Games in 2022
            </p>
            <p className="mt-1 text-sm font-normal leading-6">
              Are you looking for Games that Free-to-play? Here are the best F2P
              NFT games available.
            </p>
            ​
            <CustomTable />
          </div>
        </div>
      </main>
      <EditModal />
    </Layout>
  );
}

export default Home;
