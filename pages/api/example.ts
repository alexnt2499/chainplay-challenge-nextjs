// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
// Fetching data from the JSON file
import fsPromises from "fs/promises";
import path from "path";
import { ProjectData } from "../../interface/project_data";
import NextCors from "nextjs-cors";

async function getProjectsData() {
  const filePath = path.join(process.cwd(), "_mock/data.json");
  const jsonData: Buffer = await fsPromises.readFile(filePath);
  const objectData: Array<ProjectData> = JSON.parse(jsonData.toString());

  return objectData;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<ProjectData>>
) {
  // Run the cors middleware
  // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  // Rest of the API logic

  let listProjects: Array<ProjectData> = await getProjectsData();
  res.status(200).json(listProjects);
}
