import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "highlight.js/styles/atom-one-dark.css";

export function Heading1({ children }) {
	return (
		<h1 style={{ fontSize: "var(--h1-font-size)", marginTop: "2.5rem" }}>
			{children}
		</h1>
	);
}

export function Heading2({ children }) {
	return (
		<h2 style={{ fontSize: "var(--h2-font-size)", marginTop: "2.5rem" }}>
			{children}
		</h2>
	);
}

export function Heading3({ children }) {
	return (
		<h3 style={{ fontSize: "var(--h3-font-size)", marginTop: "2.5rem" }}>
			{children}
		</h3>
	);
}

export function Heading4({ children }) {
	return (
		<h4 style={{ fontSize: "var(--h4-font-size)", marginTop: "2.5rem" }}>
			{children}
		</h4>
	);
}

export function Heading5({ children }) {
	return (
		<h5 style={{ fontSize: "var(--h5-font-size)", marginTop: "2.5rem" }}>
			{children}
		</h5>
	);
}

export function Heading6({ children }) {
	return (
		<h6
			style={{
				fontSize: "var(--largest-font-size)",
				marginTop: "2.5rem",
			}}
		>
			{children}
		</h6>
	);
}

export function UnorderedList({ children }) {
	return <li className="my-bullet-li-class">{children}</li>;
}

export function OrderedList({ children }) {
	return <ol className="my-number-li-class">{children}</ol>;
}

export function NormalText({ children }) {
	return (
		<p
			style={{
				marginBlock: "1.5rem",
				fontSize: "var(--larger-font-size)",
				lineHeight: "1.5",
			}}
		>
			{children}
		</p>
	);
}

export function Link({ mark, children }) {
	return (
		<a
			href={mark.href}
			target="_blank"
			style={{
				color: "var(--primary-color)",
				textDecoration: "underline",
			}}
		>
			{children}
		</a>
	);
}

export function CodeBlock({ node }) {
	return (
		<SyntaxHighlighter
			language="javascript"
			style={atomDark}
			showLineNumbers
		>
			{node.code}
		</SyntaxHighlighter>
	);
}