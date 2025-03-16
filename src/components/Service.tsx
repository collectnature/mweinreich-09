
import { 
  Users, 
  GraduationCap, 
  Calendar, 
  Globe, 
  LucideIcon, 
  Presentation 
} from "lucide-react";

interface ServiceItem {
  year: string;
  title: string;
  description?: string;
}

interface ServiceSection {
  icon: LucideIcon;
  title: string;
  items: ServiceItem[];
}

const Service = () => {
  const serviceSections: ServiceSection[] = [
    {
      icon: GraduationCap,
      title: "Research Mentoring",
      items: [
        {
          year: "2024",
          title: "Undergraduate thesis advising",
          description: "1 student"
        },
        {
          year: "2023",
          title: "Project Assistant",
          description: "Arizona Winter School, 12 graduate students"
        },
        {
          year: "2019",
          title: "Research Teaching Assistant",
          description: "Summer@ICERM REU, 5 students"
        }
      ]
    },
    {
      icon: Users,
      title: "Leadership",
      items: [
        {
          year: "2022",
          title: "Chair of bargaining committee",
          description: "Graduate Labor Organization (Brown)"
        },
        {
          year: "2022",
          title: "Member of grievance committee",
          description: "Graduate Labor Organization"
        },
        {
          year: "2021-22",
          title: "Lead Organizer for Physical Sciences",
          description: "Graduate Labor Organization"
        },
        {
          year: "2019-20",
          title: "Elected member of bargaining committee",
          description: "Graduate Labor Organization"
        }
      ]
    },
    {
      icon: Calendar,
      title: "Conference and Seminar Organizing",
      items: [
        {
          year: "2023-24",
          title: "Algebraic Dynamics Seminar, co-organizer",
          description: "Harvard University"
        },
        {
          year: "2023",
          title: "Joint Mathematics Meetings special session, co-organizer",
          description: "Boston"
        },
        {
          year: "2021",
          title: "Moduli space virtual seminar, co-organizer"
        },
        {
          year: "2020",
          title: "Algebra and Number Theory Seminar, co-organizer",
          description: "Brown University"
        },
        {
          year: "2020",
          title: "Graduate Student Seminar, organizer",
          description: "Brown University"
        },
        {
          year: "2020",
          title: "Arithmetic dynamics reading group, organizer",
          description: "Brown University"
        },
        {
          year: "2019",
          title: "Graduate Student Seminar, webmaster",
          description: "Brown University"
        },
        {
          year: "2018",
          title: "AMS Student Conferences (3 total), co-organizer",
          description: "Brown University"
        }
      ]
    },
    {
      icon: Globe,
      title: "Outreach",
      items: [
        {
          year: "2019",
          title: "Graduate student panel",
          description: "Summer@ICERM Computational Arithmetic Dynamics REU"
        },
        {
          year: "2018",
          title: "Prison teaching",
          description: "See Teaching section above"
        },
        {
          year: "2018",
          title: "Talk at Ennead Architects Geometry Club"
        }
      ]
    }
  ];

  // Talks are organized by year and month
  const invitedTalks = [
    {
      date: "October 2024",
      title: "Quebec-Maine Number Theory Conference",
      location: "Université Laval"
    },
    {
      date: "April 2024",
      title: "Algebra and Number Theory Seminar",
      location: "University of Rochester"
    },
    {
      date: "April 2024",
      title: "Dynamics Seminar",
      location: "University of Rochester"
    },
    {
      date: "April 2024",
      title: "Algebra and Number Theory Seminar",
      location: "Brown University"
    },
    {
      date: "April 2024",
      title: "Algebraic Dynamics Seminar",
      location: "Harvard University"
    },
    {
      date: "February 2024",
      title: "Algebraic Geometry in String Theory Seminar",
      location: "Harvard University"
    },
    {
      date: "December 2023",
      title: "Semester on Mathematical Billiards",
      location: "Simons Center for Geometry and Physics, Stony Brook"
    },
    {
      date: "November 2023",
      title: "Algebraic Geometry Seminar",
      location: "University of Notre Dame"
    },
    {
      date: "November 2023",
      title: "Unlikely Intersections Seminar",
      location: "University of Illinois Chicago"
    },
    {
      date: "July 2023",
      title: "Algebraic Dynamics Seminar",
      location: "Harvard University"
    },
    {
      date: "May 2023",
      title: "Algebraic Geometry Seminar",
      location: "University of Milan"
    },
    {
      date: "February 2023",
      title: "Algebraic Geometry Seminar",
      location: "Boston College"
    },
    {
      date: "January 2023",
      title: "Special Session on Recent Advances in Arithmetic Dynamics I",
      location: "Joint Mathematics Meetings, Boston, MA"
    },
    {
      date: "November 2022",
      title: "Algebraic Dynamics Seminar",
      location: "Harvard University"
    },
    {
      date: "November 2022",
      title: "Number Theory Seminar",
      location: "Amherst College"
    },
    {
      date: "October 2022",
      title: "Arithmetic Dynamics Special Session",
      location: "AMS Western Sectional Meeting"
    },
    {
      date: "September 2022",
      title: "Geometry and Dynamics Seminar",
      location: "Tufts University"
    },
    {
      date: "September 2022",
      title: "Algebra, Geometry, and Number Theory Seminar",
      location: "Leiden University (online)"
    },
    {
      date: "September 2022",
      title: "Algebraic Geometry Seminar",
      location: "Harvard-MIT"
    },
    {
      date: "May 2022",
      title: "Algebraic Dynamics Workshop",
      location: "Harvard University"
    },
    {
      date: "April 2022",
      title: "Joint Math-Physics Seminar",
      location: "University of Pennsylvania"
    },
    {
      date: "February 2022",
      title: "Moduli Across the Pandemic",
      location: "Boston College, online"
    },
    {
      date: "November 2021",
      title: "Algebra Seminar",
      location: "Brown University"
    },
    {
      date: "November 2021",
      title: "BUGCAT: Binghamton University Graduate Combinatorics, Algebra, and Topology"
    },
    {
      date: "October 2021",
      title: "AGNES: Algebraic Geometry Northeastern Series",
      location: "Boston College"
    },
    {
      date: "October 2021",
      title: "Geometry-Topology Seminar",
      location: "Brown University"
    },
    {
      date: "August 2021",
      title: "Algebraic Dynamics Seminar",
      location: "Harvard University, online"
    },
    {
      date: "April 2021",
      title: "Hamiltonian Systems Seminar",
      location: "University of Arizona / University of Toronto, online"
    },
    {
      date: "March 2021",
      title: "Graduate Number Theory Seminar",
      location: "Rutgers University, online"
    },
    {
      date: "October 2020",
      title: "Algebra Seminar",
      location: "Brown University, online"
    },
    {
      date: "April 2020",
      title: "Graduate Number Theory Seminar",
      location: "Rutgers University, online"
    }
  ];

  return (
    <section id="service" className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Advising and Service</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Service sections (first column) */}
          <div className="space-y-12">
            {serviceSections.map((section, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-center mb-6">
                  <div className="bg-academic-blue bg-opacity-10 p-3 rounded-full">
                    <section.icon className="h-6 w-6 text-academic-blue" />
                  </div>
                  <h3 className="text-2xl font-medium text-gray-800 ml-4">{section.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover-lift">
                      <p className="text-sm text-gray-500 mb-1">{item.year}</p>
                      <h4 className="text-lg font-medium text-academic-blue mb-1">{item.title}</h4>
                      {item.description && <p className="text-gray-700 text-sm">{item.description}</p>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Invited Talks (second column) */}
          <div className="animate-fade-up delay-300">
            <div className="flex items-center mb-6">
              <div className="bg-academic-blue bg-opacity-10 p-3 rounded-full">
                <Presentation className="h-6 w-6 text-academic-blue" />
              </div>
              <h3 className="text-2xl font-medium text-gray-800 ml-4">Invited Talks and Lectures</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="space-y-6">
                {invitedTalks.map((talk, index) => (
                  <div key={index} className="pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                    <div className="flex flex-col sm:flex-row sm:items-start">
                      <span className="text-gray-500 font-medium w-36 flex-shrink-0 mb-1 sm:mb-0">{talk.date}</span>
                      <div>
                        <p className="font-medium text-academic-blue">{talk.title}</p>
                        {talk.location && <p className="text-gray-600 text-sm">{talk.location}</p>}
                      </div>
                    </div>
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

export default Service;
