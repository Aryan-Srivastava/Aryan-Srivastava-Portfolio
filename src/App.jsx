import "./App.css";
import { Header, Home, Services, Skills, Portfolio, Resume, Contact, Footer } from "./components";

function App() {
	return (
		<div className="App">
			<Header />
			<Home />
			<Portfolio />
			<Skills />
			<Services />
			<Resume />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
