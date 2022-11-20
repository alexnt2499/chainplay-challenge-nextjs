import * as React from "react"
import { SVGProps } from "react"

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={17}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.5 16.5 12 13m2-5.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"
      stroke="#D71C5D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SearchIcon
