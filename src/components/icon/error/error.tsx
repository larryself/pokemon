import { FC, SVGProps } from "react";
import { COLORS } from "../../../constants/colors";

export const Error: FC<SVGProps<SVGSVGElement>> = ({
	color = COLORS.BLACK,
}) => (
	<svg
		width="776"
		height="470"
		viewBox="0 0 776 470"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g filter="url(#filter0_d_83_3245)">
			<path
				d="M200.136 105.288V270.51H245.562V311.112H200.136V369H153.102V311.112H20.844V275.334L154.308 105.288H200.136ZM77.124 275.334H155.514V175.638L77.124 275.334ZM382.112 102.876C398.192 102.876 412.798 105.69 425.93 111.318C439.33 116.678 450.72 124.986 460.1 136.242C480.468 160.094 490.652 194.264 490.652 238.752C490.652 283.24 480.468 317.41 460.1 341.262C441.34 363.506 415.478 374.628 382.514 374.628C349.282 374.628 323.152 363.506 304.124 341.262C284.024 317.946 273.974 283.776 273.974 238.752C273.974 193.728 284.024 159.558 304.124 136.242C323.152 113.998 349.148 102.876 382.112 102.876ZM441.608 238.752C441.608 208.736 436.382 185.822 425.93 170.01C415.746 153.93 401.14 145.89 382.112 145.89C363.352 145.89 348.746 153.93 338.294 170.01C328.11 185.822 323.018 208.736 323.018 238.752C323.018 268.768 328.11 291.682 338.294 307.494C348.746 323.038 363.352 330.81 382.112 330.81C401.14 330.81 415.746 323.038 425.93 307.494C436.382 291.682 441.608 268.768 441.608 238.752ZM701.607 105.288V270.51H747.033V311.112H701.607V369H654.573V311.112H522.315V275.334L655.779 105.288H701.607ZM578.595 275.334H656.985V175.638L578.595 275.334Z"
				fill={color}
				fillOpacity="0.5"
			/>
		</g>
		<defs>
			<filter
				id="filter0_d_83_3245"
				x="-8"
				y="-20"
				width="789"
				height="518"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset dx="4" dy="4" />
				<feGaussianBlur stdDeviation="12" />
				<feColorMatrix
					type="matrix"
					values="0 0 0 0 0.00392157 0 0 0 0 0.0666667 0 0 0 0 0.14902 0 0 0 0.2 0"
				/>
				<feBlend
					mode="normal"
					in2="BackgroundImageFix"
					result="effect1_dropShadow_83_3245"
				/>
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="effect1_dropShadow_83_3245"
					result="shape"
				/>
			</filter>
		</defs>
	</svg>
);
