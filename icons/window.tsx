import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 my-0.5"
    {...props}
  >
    <path
      d="M17.56 2H6.41C3.98 2 2 3.98 2 6.41v6.7a4.41 4.41 0 0 0 4.41 4.41h3.84c.55 0 1 .45 1 1v.97c0 .55-.45 1-1 1H7.83a.755.755 0 0 0 0 1.51h8.35c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.42c-.55 0-1-.45-1-1v-.97c0-.55.45-1 1-1h3.81a4.41 4.41 0 0 0 4.41-4.41v-6.7C21.97 3.98 19.99 2 17.56 2Z"
      fill="#94A3B8"
    />
  </svg>
);

export default SvgComponent;