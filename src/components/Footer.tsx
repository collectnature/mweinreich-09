
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-academic-blue text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-serif font-medium mb-2">Max Weinreich, Ph.D.</h3>
            <p className="text-white/80">NSF Postdoctoral Researcher at Harvard University</p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Max Weinreich. All rights reserved.
          </p>
          <p className="text-white/60 text-sm mt-4 md:mt-0">
            Last updated: October 18, 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
