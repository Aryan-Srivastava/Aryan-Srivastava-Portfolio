import { useState, useEffect } from "react";
import { client, urlFor } from "../../client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "./Blog.modules.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const Blog = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		client
			.fetch(
				`*[_type == "post"] | order(publishedAt desc) [0...3]{
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
				}[0..2]`
			)
			.then((data) => {
				setBlogs(data);
			})
			.catch(console.error);
	}, []);

	return (
		<section className="blog section" id="blog">
			<motion.div
				initial={{ y: 150, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8 }}
			>
				<h2 className="section__title text-cs">Blogs</h2>
				<p className="section__subtitle">
					My <span>Articles</span>
				</p>
			</motion.div>
			<Link to="/blogs" className="see__more" aria-label="See more blogs">
				See more
				<svg className="see__more-icon link__icon">
					<use href="sprite.svg#icon-arrow-right2"></use>
				</svg>
			</Link>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					640: {
						slidesPerView: 1,
						spaceBetween: 30,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					1024: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					1440: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				}}
				modules={[Pagination]}
				className="container blog__container grid"
			>
				{blogs.map((blog) => {
					return (
						<SwiperSlide key={blog._id}>
							<div className="blog__item card card-two">
								<Link to={`/blogs/${blog.slug.current}`}>
									<h4 className="blog__title">
										{blog.title}
									</h4>
									<p className="link">
										Read more
										<svg className="link__icon">
											<use href="sprite.svg#icon-arrow-right2"></use>
										</svg>
									</p>
								</Link>
								<div className="blog__img-wrapper">
									<Link to={`/blogs/${blog.slug.current}`}>
										<img
											src={urlFor(blog.mainImage)}
											className="blog__img"
											alt={blog.mainImage.alt}
										/>
									</Link>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Blog;
