import "./app.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Customers from "./components/Customers";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  return (
    <div className="root-div">
      <Header />
      <Navbar />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Customers />
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
