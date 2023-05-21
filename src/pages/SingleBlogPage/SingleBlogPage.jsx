import { useParams } from "react-router-dom";
import { useEffect, useState, startTransition } from "react";
import { client, urlFor } from "../../client";
import { timeDifference } from "../../utils/timeAgo";
import BlockContent from "@sanity/block-content-to-react";
import {
	Heading1,
	Heading2,
	Heading3,
	Heading4,
	Heading5,
	Heading6,
	NormalText,
	UnorderedList,
	OrderedList,
	Link,
	CodeBlock,
} from "../../utils/singleBlogHelper";
import { Loader } from "../../components";
import ErrorPage from "../ErrorPage/ErrorPage";
import "./SingleBlogPage.modules.css";

const SingleBlogPage = () => {
	const { slug } = useParams();
	const [blog, setBlog] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const publishedTime = timeDifference(
		new Date(),
		new Date(blog?.publishedAt)
	);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await client.fetch(
					`*[_type == "post" && slug.current == $slug]{
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
						author->{
							name
						},
						categories[]->{
							title
						},
						body
					}`,
					{ slug }
				);
				if (res.length === 0) return;
				startTransition(() => {
					setBlog(res[0]);
					setLoading(false);
				});
			} catch (err) {
				console.error(err);
				setError(true);
			}
		};
		fetchData();
	}, [slug]);

	const serializers = {
		types: {
			code: CodeBlock,
			block: (props) => {
				switch (props.node.style) {
					case "h1":
						return <Heading1>{props.children}</Heading1>;
					case "h2":
						return <Heading2>{props.children}</Heading2>;
					case "h3":
						return <Heading3>{props.children}</Heading3>;
					case "h4":
						return <Heading4>{props.children}</Heading4>;
					case "h5":
						return <Heading5>{props.children}</Heading5>;
					case "h6":
						return <Heading6>{props.children}</Heading6>;
					default:
						return <NormalText>{props.children}</NormalText>;
				}
			},
		},
		listItem: (props) => {
			switch (props.node.listItem) {
				case "bullet":
					return <UnorderedList>{props.children}</UnorderedList>;
				case "number":
					return <OrderedList>{props.children}</OrderedList>;
				default:
					return <li>{props.children}</li>;
			}
		},
		marks: {
			link: Link,
		}
	};

	if (loading) return <Loader />;
	if (error) return <ErrorPage />;

	return (
		<div className="SingleBlog__container">
			{blog && (
				<>
					<div className="BlogImg__container">
						<img
							className="main__image"
							src={urlFor(blog.mainImage).url()}
							alt={blog.mainImage.alt}
						/>
					</div>
					<article className="BlogContent__container">
						<h1 className="blog__header">{blog && blog.title}</h1>
						<div className="about__blog">
							<div>
								<p className="author__name">
									{blog.author.name}
								</p>
								<span>&nbsp;•&nbsp;</span>
								<p className="date">{publishedTime}</p>
							</div>
							<div className="blogtags">
								{blog.categories.map((category, index) => (
									<p key={index} className="blogtag">
										#{category.title}
									</p>
								))}
							</div>
						</div>
						<hr className="divider"/>
						<BlockContent
							className="blog__body"
							dataset={import.meta.env.VITE_SANITY_DATASET}
							projectId={import.meta.env.VITE_SANITY_PROJECT_ID}
							serializers={serializers}
							blocks={blog.body}
						/>
					</article>
				</>
			)}
		</div>
	);
};

export default SingleBlogPage;
