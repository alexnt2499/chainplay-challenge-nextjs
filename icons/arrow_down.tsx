import * as React from "react"
import { SVGProps } from "react"

const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={8}
    height={5}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.96.59H1.04c-.48 0-.72.58-.38.92L3.25 4.1c.415.415 1.09.415 1.505 0l.985-.985L7.345 1.51A.541.541 0 0 0 6.96.59Z"
      fill="#0F172A"
    />
  </svg>
)

export default ArrowDown
