import { BlogCard, Loader } from "../../components";
import { useEffect, useState, startTransition } from "react";
import { client, urlFor } from "../../client";
import ErrorPage from "../ErrorPage/ErrorPage";
import "./BlogPage.modules.css";

const BlogPage = () => {
	const [blogs, setBlogs] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await client.fetch(
					`*[_type == "post"]{
						_id,
						title,
						body,
						slug,
						author->{
							name,
							avatar
						},
						publishedAt,
						mainImage{
							asset->{
								_id,
								url
							},
							alt
						},
					} | order(publishedAt desc)`
				);
				if (res.length === 0) return;
				startTransition(() => {
					setBlogs(res);
				});
				setLoading(false);
			} catch (err) {
				console.error(err);
				setError(true);
			}
		};
		fetchData();
	}, []);


	if (loading) return <Loader />;
	if (error) return <ErrorPage />;

	return (
		<section className="blogs__section">
			{blogs.map((blog) => (
				<BlogCard
					key={blog._id}
					title={blog.title}
					body={blog.body[0].children[0].text}
					alt={blog.mainImage.alt}
					slug={blog.slug}
					author={blog.author.name}
					date={blog.publishedAt}
					image={urlFor(blog.mainImage).url()}
				/>
			))}
		</section>
	);
};

export default BlogPage;
