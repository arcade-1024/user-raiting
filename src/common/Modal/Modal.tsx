import React, { ReactNode } from "react";

export interface ModalInterface {
	open: boolean;
	setOpen: () => void;
	children: ReactNode;
}
const Modal = ({ open, setOpen, children }: ModalInterface) => {
	return (
		<div
			style={
				open
					? {
							position: "absolute",
							top: 0,
							bottom: 0,
							left: 0,
							right: 0,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							background: "#00000085",
							height: "100vh",
							width: "100vw",
					  }
					: { display: "none" }
			}
		>
			<div
				style={{
					padding: "16px",
					background: "#fff",
					borderRadius: "4px",
					maxWidth: "900px",
					color: "#000",
				}}
			>
				{children}
			</div>
		</div>
	);
};

export default Modal;
