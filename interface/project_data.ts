export interface BlockChain {
  Name: string;
  Code: string;
  ExtendValue: string;
}

export interface Genre {
  Name: string;
  Code: string;
}

export interface Platform {
  Name: string;
  Code: string;
}

export interface ProjectData {
  Index: number;
  Code: string;
  Name: string;
  ImageUrl: string;
  Symbol: string;
  BlockChains: BlockChain[];
  Genres: Genre[];
  Platforms: Platform[];
  Price: number;
}
