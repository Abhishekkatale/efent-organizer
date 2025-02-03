import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import LandingPage from './pages/LandingPage';
import Services from './pages/Services.jsx'
import TermsAndConditions from './pages/TermsAndConditions.jsx';
import PolicyPages from './pages/PolicyPages.jsx';
import Blog from './pages/Blog.jsx';
import ContactUs from './pages/ContactUs.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Portfolios from './pages/Portfolios.jsx'
import WhatsAppButton from './WhatsAppButton.js';
import Planners from './pages/planners.jsx'
import Decorators from './pages/planners.jsx'
import Caterers from './pages/caterers.jsx'
import Photographers from './pages/photographers.jsx'
import Venues from './pages/venues.jsx'
import Artists from './pages/artists.jsx'
import Djs from './pages/djs.jsx'


function App() {
  return (
    <>
      <ScrollToTop />
      <WhatsAppButton /> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PolicyPages />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/portfolios" element={<Portfolios />} />
        <Route path="/planners" element={<Planners />} />
        <Route path="/caterers" element={<Caterers />} />
        <Route path="/decorators" element={<Decorators />} />
        <Route path="/photographers" element={<Photographers />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/djs" element={<Djs />} />
      </Routes>
    </>
  );
}

export default App;
