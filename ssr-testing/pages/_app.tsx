import React from "react";
import Head from "next/head";
import { globalStyles, styled, theme } from "@washingtonpost/ui-theme";
import { Favicon } from "@washingtonpost/site-components/core/favicon";

const Page = styled("article", {
	paddingBottom: "$500",
});

const Container = styled("section", {
	position: "relative",
	minHeight: "calc(100vh - $400)",
	marginLeft: "$400",
	marginRight: "$400",

	"@sm": {
		margin: "$200",
	},
});

const Footer = styled("footer", {
	position: "absolute",
	bottom: "0",
	fontSize: "$075",
	color: "$primary",
	height: "$400",
});

const List = styled("ul", {
	listStyle: "none",
	display: "flex",
	flexDirection: "row",
	background: theme.colors.onSecondary,
	height: "$400",
	alignItems: "center",
});

const ListItem = styled("li", {
	padding: "$100",
});

const Anchor = styled("a", {
	$$anchorColor: theme.colors.secondary,
	color: "$$anchorColor",
	textDecoration: "none",
	borderBottom: "1px solid currentColor",

	"@hover": {
		"&:hover": {
			$$anchorColor: theme.colors.cta,
		},
	},
});

const Layout = styled("div", {
	display: "flex",
	flexDirection: "column",
});

function SiteNavigation() {
	return (
		<List>
			<ListItem>
				<Anchor href="/kitchen-sink">Kitchen Sink</Anchor>
			</ListItem>
		</List>
	);
}

function App({ Component, pageProps }) {
	globalStyles();

	return (
		<Layout>
			<Head>
				<title>WPDS's UI Kit - The Washington Post</title>
				<Favicon />
			</Head>

			<SiteNavigation />
			<Container>
				<Page>
					<Component {...pageProps} />
				</Page>
			</Container>
		</Layout>
	);
}

export default App;