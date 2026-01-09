
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AppProvider } from './AppContext';

const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Products = lazy(() => import('./pages/Products'));
const NotFound = lazy(() => import('./pages/NotFound'));

const Loading = () => (
  <div className="h-screen w-full flex items-center justify-center bg-snow dark:bg-[#0A0F1D]">
    <div className="relative">
      <div className="w-20 h-20 border-4 border-glacier/20 border-t-glacier rounded-full animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center text-ocean dark:text-white font-black text-xs tracking-tighter">KILIGRID</div>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
