import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg 
  xmlns="http://www.w3.org/2000/svg" 
  width={16} 
  height={15}
  {...props}>

    <path
      fill="#FFF"
      fillRule="evenodd"
      d="M0 0h16v3H0zm0 6h16v3H0zm0 6h16v3H0z"
    />
  </svg>
)
export default SvgComponent