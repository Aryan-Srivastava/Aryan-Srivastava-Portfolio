import "./App.css";
import { Header, Home, Services, Skills, Portfolio, Resume, Contact, Footer, Progressbar } from "./components";

function App() {
	return (
		<div className="App">
			<Progressbar />
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
