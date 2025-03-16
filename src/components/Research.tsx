
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
      </div>
    </section>
  );
};

export default Research;
