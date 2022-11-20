import React from "react";
import { BlockChain } from "../interface/project_data";

export interface IInfoProject {
  logoUrl: string;
  name: string;
  symbol: string;
  blockchains: Array<BlockChain>;
}

const InfoProject: React.FC<IInfoProject> = ({
  logoUrl,
  name,
  symbol,
  blockchains,
}) => {
  const _renderBlockchains = () => {
    return blockchains.map((value: BlockChain) => (
      <div key={value.Code} className="mt-1 flex items-center mr-3">
        <img className="w-5 h-5 rounded-full" alt="chain" src={value.ExtendValue} />
        <span className="text-[#64748B] text-[13px] ml-1 ">{value.Name}</span>
      </div>
    ));
  };

  return (
    <div className="flex row-auto">
      <img
        src={logoUrl}
        className={"rounded-full w-10 h-10"}
        alt="logo project"
      />

      <div className="ml-4">
        <p className="text-[15px] leading-4">
          {name} <span className="text-[#64748B]">{symbol}</span>
        </p>

        <div className="flex">{_renderBlockchains()}</div>
      </div>
    </div>
  );
};

export default InfoProject;
