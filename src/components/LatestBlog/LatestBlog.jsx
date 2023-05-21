import { useState, useEffect, startTransition } from "react";
import { client, urlFor } from "../../client";
import { Link } from "react-router-dom";
import "./LatestBlog.modules.css";

const LatestBlog = () => {
	const [blogs, setBlogs] = useState([]);
	const [showScroll, setShowScroll] = useState(false);
	const [showLatestBlog, setShowLatestBlog] = useState(true);

	useEffect(() => {
		const checkScrollTop = () => {
			if (!showScroll && window.scrollY > 400) {
				setShowScroll(true);
			} else if (showScroll && window.scrollY <= 400) {
				setShowScroll(false);
			}
		};
		window.addEventListener("scroll", checkScrollTop);
		return () => {
			window.removeEventListener("scroll", checkScrollTop);
		};
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await client.fetch(
					`*[_type == "post"] | order(publishedAt desc) [0]{
						_id,
					title,
					slug,
					publishedAt,
					mainImage{
						asset->{
							_id,
							url
						},
						alt
					},
				}`
				);
				startTransition(() => {
					setBlogs(res);
				});
			} catch (err) {
				console.error(err);
			}
		};
		fetchData();
	}, []);

	return (
		<>
			{showLatestBlog && showScroll && (
				<div className="latestblog__window">
					<svg
						className="latestblog__close"
						onClick={() => setShowLatestBlog(false)}
					>
						<use href="sprite.svg#icon-close"></use>
					</svg>
					{blogs.slug && (
						<Link to={`/blogs/${blogs.slug.current}`}>
							{blogs.title && (
								<h5 className="latestblog__title">
									{blogs.title}
								</h5>
							)}
							{blogs.mainImage && (
								<img
									className="latestblog__image"
									src={urlFor(blogs.mainImage).url()}
									alt="latest blog image"
								/>
							)}
							<p className="read__latest">Read the latest blog</p>
						</Link>
					)}
				</div>
			)}
		</>
	);
};

export default LatestBlog;
