
import Header from './Header';
import Footer from './Footer';


const ScrollToTop = () => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-green-100 p-3 rounded-full hover:bg-green-200 transition-colors"
      >
        ↑
      </button>
    );
};

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16"> {/* Add padding-top to account for fixed header */}
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;