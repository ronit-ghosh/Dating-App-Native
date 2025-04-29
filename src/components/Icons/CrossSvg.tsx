import Svg, { Path } from "react-native-svg"

const CrossSvg = () => (
  <Svg
    width={24}
    height={24}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 5 5 19M5 5l4.5 4.5M12 12l7 7"
    />
  </Svg>
)
export default CrossSvg
