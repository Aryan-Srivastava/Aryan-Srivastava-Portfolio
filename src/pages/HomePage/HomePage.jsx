import { Home, Skills, Resume, Contact, Footer, Loader } from "../../components";
import { lazy, Suspense } from "react";

const Blog = lazy(() => import("../../components/Blog/Blog"));
const Portfolio = lazy(() => import("../../components/Portfolio/Portfolio"));
const Services = lazy(() => import("../../components/Services/Services"));
const LatestBlog = lazy(() => import("../../components/LatestBlog/LatestBlog"));

const HomePage = () => {
	return (
		<>
			<Suspense fallback={<Loader />}>
				<Home />
				<Portfolio />
				<Skills />
				<Services />
				<Resume />
				<Blog />
				<Contact />
				<Footer />
				<LatestBlog />
			</Suspense>
		</>
	);
};

export default HomePage;
