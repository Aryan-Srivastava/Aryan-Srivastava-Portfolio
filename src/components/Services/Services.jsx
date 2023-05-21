import { services } from "../../assets/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Services.modules.css";
import { Pagination } from "swiper";
import shape1 from "../../assets/assets/shape-1.png";
import { motion } from "framer-motion";

const Services = () => {
	return (
		<section className="section services" id="services">
			<motion.div
				initial={{ y: 150, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8 }}
			>
				<h2 className="section__title text-cs">Hire Me!</h2>
				<p className="section__subtitle">
					My <span>Services</span>
				</p>
			</motion.div>
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
				className="service__container container"
			>
				{services.map((service) => {
					return (
						<SwiperSlide
							key={service.id}
							className="services__item card card-one"
						>
							<motion.div
								initial={{ y: 100, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.8 }}
							>
								<span className="services__subtitle text-cs">
									{service.name}
								</span>
								<h3 className="services__title">
									{service.title}
								</h3>
								<p className="services__description">
									{service.description}
								</p>
								<a href="#contact" className="link">
									Contact
									<svg className="link__icon">
										<use href="sprite.svg#icon-arrow-right2"></use>
									</svg>
								</a>
							</motion.div>
							<img
								src={shape1}
								alt="shape"
								className="shape c__shape"
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Services;
