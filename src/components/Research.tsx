
import { BookOpen, FileText } from "lucide-react";

const Research = () => {
  return (
    <section id="research" className="bg-academic-lightest-blue py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Research</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-up">
            <div className="bg-white p-6 rounded-lg shadow-sm hover-lift">
              <h3 className="text-xl text-academic-blue font-medium mb-3">Algebraic Dynamics</h3>
              <p className="text-gray-700 leading-relaxed">
                I work at the intersection of algebraic geometry and dynamical systems, exploring how algebraic structures influence and are influenced by dynamical behavior. My approach combines techniques from various areas of mathematics to develop new insights into classical problems.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover-lift">
              <h3 className="text-xl text-academic-blue font-medium mb-3">Algebraic Billiards</h3>
              <p className="text-gray-700 leading-relaxed">
                My recent work investigates billiards in algebraic curves, particularly focusing on the Fermat hyperbola. This research extends classical results about billiards to new domains and reveals unexpected connections with other areas of mathematics.
              </p>
            </div>
          </div>
          
          <div className="space-y-8 animate-fade-up delay-150">
            <div className="bg-white p-6 rounded-lg shadow-sm hover-lift">
              <h3 className="text-xl text-academic-blue font-medium mb-3">Dynamical Degrees</h3>
              <p className="text-gray-700 leading-relaxed">
                I study dynamical degrees of various algebraic systems, particularly those arising from billiards in algebraic curves. These degrees provide quantitative measures of the complexity of dynamical systems and help classify their behavior.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover-lift">
              <h3 className="text-xl text-academic-blue font-medium mb-3">Moduli Spaces</h3>
              <p className="text-gray-700 leading-relaxed">
                My work investigates dynamical moduli spaces and GIT stability of linear maps on projective space with marked points. This research helps understand how systems vary within families and identifies special cases with interesting properties.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-medium text-gray-800 mb-6">About My Math</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up">
              <p className="text-gray-700 leading-relaxed">
                I study arithmetic dynamics, which is the study of iteration of functions in number theory.
                My particular interests include dynamical degrees, billiards, moduli spaces, integrable systems, finite fields, and projective configurations.
              </p>
              <div className="flex flex-col md:flex-row gap-6 mt-8">
                <a 
                  href="https://www.youtube.com/watch?v=-vlcAsNxTG4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-white rounded-lg border border-gray-100 hover:border-academic-light-blue hover:shadow-md transition-all duration-300"
                >
                  <div className="bg-academic-blue bg-opacity-10 p-3 rounded-full mr-4">
                    <BookOpen className="h-5 w-5 text-academic-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-academic-blue">Watch Billiards Video</h4>
                    <p className="text-gray-600 text-sm">Illustrating my work on algebraic curves</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="animate-fade-up delay-100">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <img 
                  src="/lovable-uploads/venn.jpg" 
                  alt="Venn diagram showing the intersection of Algebraic Geometry, Dynamical Systems, and Number Theory" 
                  className="w-full h-auto rounded"
                />
                <p className="text-gray-600 text-sm mt-3">
                  My research lies at the intersection of Algebraic Geometry, Dynamical Systems, and Number Theory.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-medium text-gray-800 mb-6">Notes & Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="/lovable-uploads/entropy_notes.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white p-6 rounded-lg shadow-sm hover-lift flex items-start"
            >
              <div className="bg-academic-blue bg-opacity-10 p-3 rounded-full mr-4">
                <FileText className="h-5 w-5 text-academic-blue" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-academic-blue">Topics Course Notes</h4>
                <p className="text-gray-600 text-sm">on dynamical degrees</p>
              </div>
            </a>
            <a 
              href="/lovable-uploads/notes_bhps.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white p-6 rounded-lg shadow-sm hover-lift flex items-start"
            >
              <div className="bg-academic-blue bg-opacity-10 p-3 rounded-full mr-4">
                <FileText className="h-5 w-5 text-academic-blue" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-academic-blue">Mapping Classes</h4>
                <p className="text-gray-600 text-sm">and character varieties</p>
              </div>
            </a>
            <a 
              href="/lovable-uploads/notes_berk_julia.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white p-6 rounded-lg shadow-sm hover-lift flex items-start"
            >
              <div className="bg-academic-blue bg-opacity-10 p-3 rounded-full mr-4">
                <FileText className="h-5 w-5 text-academic-blue" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-academic-blue">Julia Sets</h4>
                <p className="text-gray-600 text-sm">in Berkovich space</p>
              </div>
            </a>
          </div>
          
          <div className="mt-10 p-6 bg-white rounded-lg border border-gray-100">
            <h4 className="text-xl font-medium text-academic-blue mb-3">NSF Information</h4>
            <p className="text-gray-700">
              My work is currently supported by NSF Grant No. 2202752. My graduate work was supported by NSF Grant No. 2040433.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
