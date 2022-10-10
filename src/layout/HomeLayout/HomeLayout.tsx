import React, { ReactNode } from "react";
import styles from "../../../styles/homeLayout.module.css";
export interface HomeLayoutInterface {
	children: ReactNode;
}
const HomeLayout = ({ children }: HomeLayoutInterface) => {
	return <div className={styles.homeContainer}>{children}</div>;
};

export default HomeLayout;
