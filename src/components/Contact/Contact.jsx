import { FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import "./Contact.modules.css";

const Contact = () => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			axios
				.post(import.meta.env.VITE_SHEET_CONNECTION_URL, form)
				.then(() => {
					setForm({
						name: "",
						email: "",
						subject: "",
						message: "",
					});
				});
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<section className="contact section" id="contact">
			<h2 className="section__title text-cs">Contact Me</h2>
			<p className="section__subtitle">
				Let's <span>talk about something</span>
			</p>
			<div className="contact__container container grid">
				<div className="contact__content">
					<div className="contact__card">
						<span className="contact__card-icon">
							<FaEnvelope />
						</span>
						<h3 className="contact__card-title">Email</h3>
						<p className="contact__card-data">aryan.srivastava114@gmail.com</p>
					</div>
				</div>
				<form className="contact__form" onSubmit={handleSubmit}>
					<div className="contact__form-group grid">
						<div className="contact__form-div">
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
						</div>
						<div className="contact__form-div">
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
						</div>
					</div>
					<div className="contact__form-div">
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
					</div>
					<div className="contact__form-div contact__form-area">
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
					</div>
					<div className="contact__submit">
						<p>* Required</p>
						<button type="submit" className="btn text-cs">
							Send Mail
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
