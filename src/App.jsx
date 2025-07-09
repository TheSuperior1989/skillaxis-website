import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ServicesPage from './components/services/ServicesPage';
import PortfolioPage from './components/portfolio/PortfolioPage';
import BlogPage from './components/blog/BlogPage';
import ContactPage from './components/contact/ContactPage';
import QuotingPage from './components/quoting/QuotingPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="quote" element={<QuotingPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
