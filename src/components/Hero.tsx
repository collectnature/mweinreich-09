
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-20 pb-12 bg-gradient-to-b from-academic-lightest-blue to-white overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <div className="inline-block mb-2">
              <span className="badge">NSF Postdoctoral Researcher</span>
            </div>
            <h1 className="text-academic-blue">
              Max Weinreich, Ph.D.
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-lg">
              Exploring the intersection of algebraic geometry and dynamical systems at Harvard University.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-academic-blue text-white rounded-md hover:bg-opacity-90 transition-all duration-300"
              >
                Get in touch
              </a>
              <a 
                href="#research" 
                className="inline-flex items-center justify-center px-6 py-3 border border-academic-blue text-academic-blue rounded-md hover:bg-academic-lightest-blue transition-all duration-300"
              >
                View my research
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end animate-fade-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="/lovable-uploads/6e7ec166-c9d4-4cb5-9fdc-25b103484663.png" 
                alt="Max Weinreich"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a 
        href="#about" 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-academic-blue hover:text-academic-light-blue transition-colors duration-300"
      >
        <span className="text-sm font-medium mb-2">Scroll</span>
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
