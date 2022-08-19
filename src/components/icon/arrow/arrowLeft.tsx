import { FC, SVGProps } from "react";

export const ArrowLeft: FC<SVGProps<SVGSVGElement>> = () => (
	<svg width="35" height="54" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g filter="url(#a)">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5.182 22.922a2.931 2.931 0 0 0 0 4.202l2.428 2.381.01.01 19.115 18.753a3.07 3.07 0 0 0 4.284 0l2.427-2.382a2.931 2.931 0 0 0 0-4.202L16.462 25.023 33.446 8.362a2.931 2.931 0 0 0 0-4.202l-2.428-2.382a3.07 3.07 0 0 0-4.283 0L7.61 20.541l-2.428 2.381Z"
				fill="#F6F7F9"
			/>
		</g>
		<defs>
			<filter
				id="a"
				x=".295"
				y=".908"
				width="34.039"
				height="52.23"
				filterUnits="userSpaceOnUse"
				colorInterpolationFilters="sRGB"
			>
				<feFlood floodOpacity="0" result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset dx="-2" dy="2" />
				<feGaussianBlur stdDeviation="1" />
				<feColorMatrix values="0 0 0 0 0.129167 0 0 0 0 0.129167 0 0 0 0 0.129167 0 0 0 0.1 0" />
				<feBlend
					in2="BackgroundImageFix"
					result="effect1_dropShadow_1321_6030"
				/>
				<feBlend
					in="SourceGraphic"
					in2="effect1_dropShadow_1321_6030"
					result="shape"
				/>
			</filter>
		</defs>
	</svg>
);
