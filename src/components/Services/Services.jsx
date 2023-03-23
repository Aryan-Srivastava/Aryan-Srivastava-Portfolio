import React from "react";
import { services } from "../../assets/Data";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Services.modules.css";
import { Pagination } from "swiper";
import shape2 from "../../assets/assets/shape-2.png";

const Services = () => {
	return (
		<section className="section services" id="services">
			<h2 className="section__title text-cs">Hire Me!</h2>
			<p className="section__subtitle">
				My <span>Services</span>
			</p>
			<Swiper
				slidesPerView={1}
				spaceBetween={10}
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
						spaceBetween: 40,
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
							<span className="services__subtitle text-cs">
								{service.name}
							</span>
							<h3 className="services__title">{service.title}</h3>
							<p className="services__description">
								{service.description}
							</p>
							<a href="" className="link">
								Contact<FaArrowRight className="link__icon" />
							</a>
							<img
								src={shape2}
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
