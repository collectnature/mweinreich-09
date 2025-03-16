
import { GraduationCap, BookOpen, ChevronRight, FileText } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6 animate-fade-up">
            <p className="text-gray-700 leading-relaxed">
              I'm a mathematician specializing in algebraic dynamics, working at the intersection of algebraic geometry and dynamical systems. Currently, I hold an NSF Postdoctoral Research Fellowship at Harvard University, where I also serve as a Lecturer.
            </p>
            <p className="text-gray-700 leading-relaxed">
              My research applies methods from moduli space theory, mathematical physics, integrable systems, and arithmetic geometry to explore classical dynamical systems from an algebraic viewpoint. My recent work focuses on billiards and dynamical degrees.
            </p>
            
            <div className="flex items-center mt-6">
              <a 
                href="/lovable-uploads/CV.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-academic-blue hover:text-academic-light-blue transition-colors"
              >
                <FileText className="h-5 w-5 mr-2" />
                <span className="underline">View my Curriculum Vitae (CV)</span>
              </a>
            </div>
          </div>
          
          <div className="space-y-8 animate-fade-up delay-150">
            <div className="bg-academic-neutral p-6 rounded-lg border border-gray-100 hover-lift">
              <div className="flex items-start">
                <div className="bg-academic-blue bg-opacity-10 p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-academic-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium mb-3">Education</h3>
                  <ul className="space-y-4">
                    <li>
                      <p className="text-sm text-gray-500">2022</p>
                      <p className="font-medium">Ph.D in Mathematics</p>
                      <p className="text-gray-700">Brown University</p>
                    </li>
                    <li>
                      <p className="text-sm text-gray-500">2019</p>
                      <p className="font-medium">M.S. in Mathematics</p>
                      <p className="text-gray-700">Brown University</p>
                    </li>
                    <li>
                      <p className="text-sm text-gray-500">2016</p>
                      <p className="font-medium">B.A. in Mathematics, intensive</p>
                      <p className="text-gray-700">Yale University</p>
                      <p className="text-sm text-gray-600">Cum laude; Distinction in the Major</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-academic-neutral p-6 rounded-lg border border-gray-100 hover-lift">
              <div className="flex items-start">
                <div className="bg-academic-blue bg-opacity-10 p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-academic-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium mb-3">Research Interests</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-academic-light-blue mr-2 flex-shrink-0" />
                      <span>Algebraic Dynamics</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-academic-light-blue mr-2 flex-shrink-0" />
                      <span>Moduli Spaces</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-academic-light-blue mr-2 flex-shrink-0" />
                      <span>Billiards</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-academic-light-blue mr-2 flex-shrink-0" />
                      <span>Dynamical Degrees</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-academic-light-blue mr-2 flex-shrink-0" />
                      <span>Integrability</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
