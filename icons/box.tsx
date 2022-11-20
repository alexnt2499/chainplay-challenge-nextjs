import * as React from "react"
import { SVGProps } from "react"

const BoxIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill="#0F172A">
      <path d="M7.514 7.134a1 1 0 0 0 .972 0l3.94-2.19a1 1 0 0 0 0-1.747L8.325.917a.667.667 0 0 0-.648 0l-4.103 2.28a1 1 0 0 0 0 1.748l3.941 2.19ZM7.333 9.147a1 1 0 0 0-.514-.874l-4-2.222a1 1 0 0 0-1.486.874v5.242a.667.667 0 0 0 .343.582l4.171 2.318a1 1 0 0 0 1.486-.874V9.147ZM9.18 8.273a1 1 0 0 0-.514.874v5.046a1 1 0 0 0 1.486.874l4.171-2.318a.666.666 0 0 0 .343-.582V6.925a1 1 0 0 0-1.486-.874l-4 2.222Z" />
    </g>
    <defs>
      <clipPath id="a">
        <rect y={0.5} width={16} height={16} rx={4} fill="#fff" />
      </clipPath>
    </defs>
  </svg>
)

export default BoxIcon
