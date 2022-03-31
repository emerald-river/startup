import * as React from "react";
import Box from "@mui/material/Box";
import arrowInfo from "../../assets/arrow-info.png";
import {OFFSET, TRANSITION} from "../../util";

export default function ArrowButton(props: {flipped?: boolean}) {
	return (
		<Box
			sx={{
				width: "70px",
				height: "35px",
				borderTopLeftRadius: "110px",
				borderTopRightRadius: "110px",
				borderWidth: "2px",
				borderStyle: "solid",
				borderColor: "info.main",
				paddingTop: "8px",
				paddingBottom: "0px",
				paddingLeft: "8px",
				paddingRight: "8px",
				borderBottom: 0,
				imageRendering: "pixelated",
				transform: `rotate(90deg) scaleY(${props.flipped ? 1 : -1})`,
				transition: TRANSITION,
				zIndex: 2,
				"& :hover": {
					cursor: "pointer"
				}
			}}>
			<Box
				sx={{
					width: "100%",
					height: "100%",
					backgroundImage: `url(${arrowInfo})`,
					backgroundSize: "contain",
					backgroundPosition: "center center",
					backgroundRepeat: "no-repeat",
					imageRendering: "pixelated"
				}}
			/>
		</Box>
	);
}