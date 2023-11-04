import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initalProps = await Document.getInitialProps(ctx);
		return { ...initalProps };
	}

	render(): JSX.Element {
		return (
			<Html lang="ru">
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
