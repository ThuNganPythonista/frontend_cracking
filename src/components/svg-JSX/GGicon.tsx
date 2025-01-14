import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image, SvgProps } from "react-native-svg"
const SvgComponent: React.FC<SvgProps> = (props) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={66}
    height={23}
    // fill="none"
    {...props}
  >
    <g fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <path
        fill="#EA4334"
        d="M5.106 9.373A108.049 108.049 0 0 0 1.22 6.391C2.91 3.13 5.553 1.077 9.145.236c3.34-.64 6.39.022 9.146 1.99.328.25.633.531.915.84l-3.278 3.29c-2.304-1.892-4.818-2.197-7.544-.919-1.568.914-2.662 2.227-3.278 3.936Z"
        opacity={0.982}
      />
      <path
        fill="#FABB04"
        d="M1.218 6.39c1.318.965 2.614 1.959 3.888 2.983a7.97 7.97 0 0 0 0 4.358 2227.38 2227.38 0 0 1-3.888 2.905c-1.625-3.413-1.625-6.828 0-10.245Z"
        opacity={0.984}
      />
      <path
        fill="#4285F3"
        d="M19.052 20.232a52.865 52.865 0 0 0-3.733-2.905c1.188-.84 1.95-1.972 2.286-3.402-2.057-.038-4.114-.05-6.173-.038V9.375c3.625-.024 7.244 0 10.859.078.545 3.12.037 6.053-1.525 8.794a9.881 9.881 0 0 1-1.714 1.985Z"
        opacity={0.982}
      />
      <path
        fill="#34A753"
        d="M5.106 13.733c1.677 3.797 4.546 5.238 8.611 4.32a11.26 11.26 0 0 0 1.6-.726 53.01 53.01 0 0 1 3.733 2.905c-1.714 1.585-3.747 2.49-6.096 2.715-4.862.395-8.635-1.426-11.317-5.468-.14-.285-.282-.565-.42-.841l3.89-2.905Z"
        opacity={0.985}
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h66v23H0z" />
      </clipPath>
    </defs>
  </Svg>
)
export default SvgComponent
