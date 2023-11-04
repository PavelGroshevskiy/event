import React, { FunctionComponent } from "react";
import styles from "./Layout.module.css";
import { LayoutProps } from "./Layout.props";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Layout({ children }: LayoutProps) {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<div className={styles.main}>{children}</div>
			<Footer className={styles.footer} />
		</div>
	);
}

export const withLayout = <T extends Record<string, unknown>>(
	Component: FunctionComponent<T>
) => {
	return function withLayoutComponent(props: T) {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};
