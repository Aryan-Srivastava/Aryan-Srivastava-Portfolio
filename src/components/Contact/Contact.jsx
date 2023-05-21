import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "./Contact.modules.css";

const Contact = () => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSending, setIsSending] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSending(true);
		try {
			const sendMailSheets = () => {
				axios.post(import.meta.env.VITE_SHEET_CONNECTION_URL, form);
			};

			const sendMailEmailJs = () => {
				emailjs.sendForm(
					import.meta.env.VITE_EMAILJS_SERVICE_ID,
					import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
					e.target,
					import.meta.env.VITE_EMAILJS_PUBLIC_KEY
				);
			};

			await Promise.allSettled([
				sendMailSheets(),
				sendMailEmailJs(),
			]).then(() => {
				setForm({
					name: "",
					email: "",
					subject: "",
					message: "",
				});
				setIsSending(false);
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section className="contact section" id="contact">
			<motion.div
				initial={{ y: 150, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8 }}
			>
				<h2 className="section__title text-cs">Contact Me</h2>
				<p className="section__subtitle">
					Let's <span>talk about something</span>
				</p>
			</motion.div>
			<div className="contact__container container grid">
				<div className="contact__content">
					<motion.div
						initial={{ y: 100, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 1 }}
						className="contact__card"
					>
						<span className="contact__card-icon">
							<svg className="mail__icon">
								<use href="sprite.svg#icon-mail"></use>
							</svg>
						</span>
						<h3 className="contact__card-title">Email</h3>
						<p className="contact__card-data">
							aryan.srivastava114@gmail.com
						</p>
					</motion.div>
				</div>
				<form className="contact__form" onSubmit={handleSubmit}>
					<div className="contact__form-group grid">
						<motion.div
							initial={{ y: 100, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.6 }}
							className="contact__form-div"
						>
							<label
								htmlFor="name"
								className="contact__form-tag text-cs"
							>
								Your Full Name <b>*</b>
							</label>
							<input
								required
								type="text"
								id="name"
								name="name"
								onChange={handleChange}
								value={form.name}
								className="contact__form-input"
								placeholder="John Doe"
							/>
						</motion.div>
						<motion.div
							initial={{ y: 100, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.8 }}
							className="contact__form-div"
						>
							<label
								htmlFor="email"
								className="contact__form-tag text-cs"
							>
								Your Email Address <b>*</b>
							</label>
							<input
								required
								type="email"
								id="email"
								name="email"
								onChange={handleChange}
								value={form.email}
								className="contact__form-input"
								placeholder="johndoe@gmail.com"
							/>
						</motion.div>
					</div>
					<motion.div
						initial={{ y: 100, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 1.2 }}
						className="contact__form-div"
					>
						<label
							htmlFor="subject"
							className="contact__form-tag text-cs"
						>
							Your Subject <b>*</b>
						</label>
						<input
							required
							type="text"
							id="subject"
							name="subject"
							onChange={handleChange}
							value={form.subject}
							className="contact__form-input"
							placeholder="Your subject..."
						/>
					</motion.div>
					<motion.div
						initial={{ y: 100, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 1.5 }}
						className="contact__form-div contact__form-area"
					>
						<label
							htmlFor="message"
							className="contact__form-tag text-cs"
						>
							Your Message <b>*</b>
						</label>
						<textarea
							required
							type="text"
							id="message"
							name="message"
							onChange={handleChange}
							value={form.message}
							className="contact__form-input"
							placeholder="I want to talk about..."
						></textarea>
					</motion.div>
					<div className="contact__submit">
						<p>* Required</p>
						<button
							type="submit"
							className="btn text-cs"
							disabled={isSending}
						>
							{isSending ? "Sending....." : "Send Message"}
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
