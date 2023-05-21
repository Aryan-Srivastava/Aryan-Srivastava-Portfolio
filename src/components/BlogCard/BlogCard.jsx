import "./BlogCard.modules.css";
import { Link } from "react-router-dom";
import { timeDifference } from "../../utils/timeAgo";

const BlogCard = (props) => {
	const { title, body, slug, author, date, image, alt } = props;
	const publishedTime = timeDifference(new Date(), new Date(date));

	return (
		<Link to={`/blogs/${slug.current}`}>
			<div className="blog__card">
				<div className="blog__card-img-wrapper">
					<img className="blog__card-img" src={image} alt={alt} />
				</div>
				<div className="blog__card-content">
					<h1 className="blog__card-title">{title}</h1>
					<p className="blog__card-desc">{body}</p>
					<div className="blog__card-footer">
						<div className="blog__card-author">
							<p className="author__name">{author}</p>
							<span>&nbsp;•&nbsp;</span>
							<p className="date">{publishedTime}</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default BlogCard;
