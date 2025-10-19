import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import GoogleMapsButton from './components/GoogleMapsButton';

function App() {
  return (
    <Router>
      <Helmet>
        <title>44 Digital Business Services - Government Transactions Simplified</title>
        <meta name="description" content="44 Digital Business Services - Government Transactions Simplified. UAE-based company for business licensing, immigration, labor, visas, attestation, and approvals." />
        <meta name="keywords" content="UAE business services, government transactions, visa services, business licensing, immigration, Dubai, UAE" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="44 Digital Business Services - Government Transactions Simplified" />
        <meta property="og:description" content="44 Digital Business Services - Government Transactions Simplified. UAE-based company for business licensing, immigration, labor, visas, attestation, and approvals." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://44digital.ae/" />
        <meta property="og:site_name" content="44 Digital Business Services" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="44 Digital Business Services - Government Transactions Simplified" />
        <meta name="twitter:description" content="44 Digital Business Services - Government Transactions Simplified. UAE-based company for business licensing, immigration, labor, visas, attestation, and approvals." />
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="44 Digital Business Services" />
        <link rel="canonical" href="https://44digital.ae/" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "44 Digital Business Services",
            "url": "https://44digital.ae/",
            "logo": "https://44digital.ae/Gov_logo.png",
            "description": "44 Digital Business Services - Government Transactions Simplified. UAE-based company for business licensing, immigration, labor, visas, attestation, and approvals.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Office G21, The Market Mall, DIP 1",
              "addressLocality": "Dubai",
              "addressCountry": "UAE"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+971-56-164-4144",
              "contactType": "customer service",
              "email": "ask@44digital.ae"
            },
            "sameAs": [
              "https://www.instagram.com/44digital.ae/",
              "https://www.facebook.com/44digital.ae",
              "https://www.linkedin.com/company/44digital-ae",
              "https://www.youtube.com/@44digital-ae"
            ]
          })}
        </script>
      </Helmet>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <GoogleMapsButton />
      </div>
    </Router>
  );
}

export default App;
