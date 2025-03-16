
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Contact</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6 animate-fade-up">
            <p className="text-gray-700 leading-relaxed max-w-2xl">
              I'm always interested in discussing research opportunities, potential collaborations, or answering questions about my work. Feel free to reach out through any of the channels below.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <a 
                href="mailto:mweinreich@math.harvard.edu" 
                className="flex items-center p-6 bg-academic-lightest-blue rounded-lg hover:bg-academic-lightest-blue/70 transition-colors duration-300"
              >
                <div className="bg-academic-blue bg-opacity-10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-academic-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-academic-blue mb-1">Email</h3>
                  <p className="text-gray-700">mweinreich@math.harvard.edu</p>
                </div>
              </a>
              
              <a 
                href="tel:+13477520008" 
                className="flex items-center p-6 bg-academic-lightest-blue rounded-lg hover:bg-academic-lightest-blue/70 transition-colors duration-300"
              >
                <div className="bg-academic-blue bg-opacity-10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-academic-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-academic-blue mb-1">Phone</h3>
                  <p className="text-gray-700">+1 347-752-0008</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="animate-fade-up delay-150">
            <div className="bg-academic-neutral p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-medium text-academic-blue mb-4">Technical Skills</h3>
              <p className="text-gray-700 mb-4">Expertise in:</p>
              <div className="grid grid-cols-2 gap-2">
                {["LaTeX", "Python", "Sage", "C-Sharp", "Unity3D", "Processing"].map((skill) => (
                  <div key={skill} className="bg-white px-3 py-2 rounded border border-gray-100 text-center text-gray-700 text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
