
import { Briefcase, BookOpen } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="bg-academic-lightest-blue py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Experience</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Employment */}
          <div className="space-y-8">
            <div className="flex items-center mb-6">
              <Briefcase className="h-6 w-6 text-academic-blue mr-3" />
              <h3 className="text-2xl font-medium text-gray-800">Employment</h3>
            </div>
            
            <div className="relative pl-8 pb-8 border-l-2 border-academic-light-blue/30">
              <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-academic-light-blue transform -translate-x-1/2"></div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover-lift animate-fade-up">
                <p className="text-sm text-gray-500 mb-1">Fall 2022–Present</p>
                <h4 className="text-xl font-medium text-academic-blue mb-1">NSF Postdoctoral Researcher</h4>
                <p className="text-gray-700 mb-1">Harvard University, Cambridge, MA</p>
                <p className="text-gray-600 text-sm mb-2">Mathematical Sciences Postdoctoral Research Fellowship</p>
                <p className="text-gray-600 text-sm">NSF Supervisor: Laura DeMarco</p>
              </div>
            </div>
            
            <div className="relative pl-8 pb-8 border-l-2 border-academic-light-blue/30">
              <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-academic-light-blue transform -translate-x-1/2"></div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover-lift animate-fade-up delay-100">
                <p className="text-sm text-gray-500 mb-1">2023–25</p>
                <h4 className="text-xl font-medium text-academic-blue mb-1">Lecturer</h4>
                <p className="text-gray-700">Harvard University, Cambridge, MA</p>
                <p className="text-gray-600 text-sm">(simultaneous appointment)</p>
              </div>
            </div>
            
            <div className="relative pl-8">
              <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-academic-light-blue transform -translate-x-1/2"></div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover-lift animate-fade-up delay-200">
                <p className="text-sm text-gray-500 mb-1">2016–17</p>
                <h4 className="text-xl font-medium text-academic-blue mb-1">Full-time Mathematics Tutor</h4>
                <p className="text-gray-700">Praxis Tutors, NY</p>
                <p className="text-gray-600 text-sm">Grades 6–12</p>
              </div>
            </div>
          </div>
          
          {/* Teaching */}
          <div className="space-y-8">
            <div className="flex items-center mb-6">
              <BookOpen className="h-6 w-6 text-academic-blue mr-3" />
              <h3 className="text-2xl font-medium text-gray-800">Teaching</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover-lift animate-fade-up">
              <h4 className="text-xl font-medium text-academic-blue mb-4">Instructor/Lecturer</h4>
              <ul className="space-y-4">
                <li className="flex">
                  <span className="text-gray-500 w-12 flex-shrink-0">2025</span>
                  <div>
                    <p className="font-medium">Dynamical Systems</p>
                    <p className="text-gray-600 text-sm">Harvard (undergraduate, spring, anticipating 30 students)</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="text-gray-500 w-12 flex-shrink-0">2024</span>
                  <div>
                    <p className="font-medium">Entropy</p>
                    <p className="text-gray-600 text-sm">Harvard (graduate, spring, 6 students, course of own design)</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="text-gray-500 w-12 flex-shrink-0">2024</span>
                  <div>
                    <p className="font-medium">Real Analysis</p>
                    <p className="text-gray-600 text-sm">Harvard (undergraduate, fall, 60 students, oversee 7 CAs)</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="text-gray-500 w-12 flex-shrink-0">2023</span>
                  <div>
                    <p className="font-medium">Multivariable Calculus</p>
                    <p className="text-gray-600 text-sm">Harvard (undergraduate, fall, 20 students, oversee 2 CAs)</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="text-gray-500 w-12 flex-shrink-0">2020</span>
                  <div>
                    <p className="font-medium">Calculus II</p>
                    <p className="text-gray-600 text-sm">Brown (undergraduate, spring, 30 students)</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover-lift animate-fade-up delay-100">
              <h4 className="text-xl font-medium text-academic-blue mb-4">Teaching Assistant</h4>
              <ul className="space-y-4">
                <li className="flex">
                  <span className="text-gray-500 w-12 flex-shrink-0">2019</span>
                  <div>
                    <p className="font-medium">Calculus II</p>
                    <p className="text-gray-600 text-sm">Brown (undergraduate, fall, 60 students in 2 sections)</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="text-gray-500 w-12 flex-shrink-0">2018</span>
                  <div>
                    <p className="font-medium">College Algebra</p>
                    <p className="text-gray-600 text-sm">CCRI at RIDOC State Prison (undergraduate, fall, 20 incarcerated students)</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 animate-fade-up delay-200">
          <h3 className="text-2xl font-medium text-gray-800 mb-6">Fellowships & Awards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover-lift">
              <p className="text-sm text-gray-500 mb-1">2022–25</p>
              <h4 className="text-xl font-medium text-academic-blue mb-1">NSF Mathematical Sciences Postdoctoral Research Fellowship</h4>
              <p className="text-gray-600 text-sm">Grant No. 2202752</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover-lift">
              <p className="text-sm text-gray-500 mb-1">2017–22</p>
              <h4 className="text-xl font-medium text-academic-blue mb-1">NSF Graduate Research Fellowship</h4>
              <p className="text-gray-600 text-sm">Grant No. 2040433</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
