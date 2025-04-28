import Svg, { G, Path } from "react-native-svg"

const ProfileSvg = ({ color }: { color: string }) => (
    <Svg
        width={24}
        height={24}
    >
        <G stroke={color} strokeWidth={2.5}>
            <Path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
                fill="none"
            />
            <Path
                d="M5 18.571A4.571 4.571 0 0 1 9.571 14h4.858A4.571 4.571 0 0 1 19 18.571 3.429 3.429 0 0 1 15.571 22H8.43A3.429 3.429 0 0 1 5 18.571Z"
                fill="none"
            />
        </G>
    </Svg>
)
export default ProfileSvg