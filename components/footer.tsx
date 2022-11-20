import Image from "next/image";
import React from "react";
import { logoTextWhite } from "../utils/images";

interface IMenuFooterItem {
  id: string;
  url: string;
  text: string;
}

const Footer = () => {
  const listMenu: Array<IMenuFooterItem> = [
    {
      id: "1",
      url: "#",
      text: "FAQ",
    },
    {
      id: "2",
      url: "#",
      text: "Newsletter",
    },
    {
      id: "3",
      url: "#",
      text: "Advertise",
    },
    {
      id: "4",
      url: "#",
      text: "Contact Us",
    },
    {
      id: "5",
      url: "#",
      text: "Press Kit",
    },
    {
      id: "6",
      url: "#",
      text: "Privacy",
    },
    {
      id: "7",
      url: "#",
      text: "Terms",
    },
  ];

  const _renderFooterMenu = () =>
    listMenu.map((value, index) => (
      <a key={value.id} href={value.url} className="mr-1 text-white leading-[22px]">
        {value.text} {index === listMenu.length - 1 ? "" : "|"}
      </a>
    ));

  return (
    <footer className="mt-[154px] bg-gradient-to-t from-[#D71C5D] to-[#FF9017] ">
      <div className="flex flex-col justify-center items-center py-6">
        <a href="#">
          <Image
            src={logoTextWhite}
            width={192}
            height={32}
            alt="Your company"
          />
        </a>

        <div className="flex flex-wrap mt-8 mb-6 max-w-[600px] justify-center items-center">{_renderFooterMenu()}</div>

        <p className="text-white mb-1">
          © 2021 PlayToEarn.net - all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
