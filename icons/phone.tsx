import * as React from "react"
import { SVGProps } from "react"

const PhoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={12}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 .5H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2Zm.667 12a.667.667 0 0 1-.667.667H2a.667.667 0 0 1-.667-.667V3.167A.667.667 0 0 1 2 2.5h8a.667.667 0 0 1 .667.667V12.5Z"
      fill="#0F172A"
    />
  </svg>
)

export default PhoneIcon