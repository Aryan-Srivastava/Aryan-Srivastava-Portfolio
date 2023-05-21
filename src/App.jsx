import "./App.css";
import { Header, Progressbar, ScrollButton } from "./components";
import { HomePage, ErrorPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const SingleBlogPage = lazy(() =>
	import("./pages/SingleBlogPage/SingleBlogPage")
);
const BlogPage = lazy(() => import("./pages/BlogPage/BlogPage"));

function App() {
	return (
		<div>
			<Progressbar />
			<Header />
			<Suspense fallback={<div>loading....</div>}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/blogs" element={<BlogPage />} />
					<Route path="/blogs/:slug" element={<SingleBlogPage />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</Suspense>
			<ScrollButton />
		</div>
	);
}

export default App;
