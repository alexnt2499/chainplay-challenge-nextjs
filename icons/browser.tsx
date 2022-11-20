import * as React from "react";
import { SVGProps } from "react";

const BrowserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 my-0.5"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 10h7v12H7.81c-.2 0-.4-.01-.6-.03-3.08-.2-4.98-2.1-5.18-5.18-.02-.2-.03-.4-.03-.6V11c0-.55.45-1 1-1Zm8 5v-5h10c.55 0 1 .45 1 1v4H11Zm0 1v6h5.19c.2 0 .4-.01.6-.03 3.08-.2 4.98-2.1 5.18-5.18.02-.2.03-.4.03-.6V16H11Zm11-8v-.19c0-.2-.01-.4-.03-.6-.2-3.08-2.1-4.98-5.18-5.18-.2-.02-.4-.03-.6-.03H7.81c-.2 0-.4.01-.6.03-3.08.2-4.98 2.1-5.18 5.18-.02.2-.03.4-.03.6v.2c0 .55.45 1 1 1L21 9c.55 0 1-.45 1-1ZM6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm2 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm4-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
      fill="#94A3B8"
    />
  </svg>
);

export default BrowserIcon;
