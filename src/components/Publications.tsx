
import { useState } from "react";
import { ExternalLink } from "lucide-react";

const Publications = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const publications = [
    {
      id: 1,
      title: "Algebraic billiards in the Fermat hyperbola.",
      status: "Preprint, 2024, submitted for publication. 34 pages.",
      year: 2024,
      type: "preprint",
      url: "https://arxiv.org/abs/2406.16172"
    },
    {
      id: 2,
      title: "The dynamical degree of billiards in an algebraic curve.",
      status: "To appear in Journal of Geometric Analysis, 49 pages.",
      year: 2023,
      type: "journal",
      url: "https://rdcu.be/d0WmQ",
      talkUrl: "https://scgp.stonybrook.edu/video_portal/video.php?id=6266"
    },
    {
      id: 3,
      title: "GIT stability of linear maps on projective space with marked points.",
      status: "To appear in Illinois J. Math., 39 pages.",
      year: 2023,
      type: "journal",
      url: "https://arxiv.org/abs/2111.06351"
    },
    {
      id: 4,
      title: "Dynamical moduli spaces and polynomial endomorphisms of configurations.",
      authors: "With Talia Blum, John Doyle, Trevor Hyde, Colby Kelln, and Henry Talbott.",
      status: "Arnold Math. J., 8 (2022), no. 2, 285–317.",
      year: 2022,
      type: "journal",
      url: "https://armj.math.stonybrook.edu/pdf-Springer-final/022-0197.pdf",
      arxivUrl: "https://arxiv.org/abs/2108.10777"
    },
    {
      id: 5,
      title: "The algebraic dynamics of the pentagram map.",
      status: "Ergodic Theory & Dynamical Systems 43 (2023), no. 10, 3460–3505.",
      year: 2023,
      type: "journal",
      url: "https://www.cambridge.org/core/journals/ergodic-theory-and-dynamical-systems/article/algebraic-dynamics-of-the-pentagram-map/8D3E1A5A55AB36D89F17B29B8F98E04B",
      arxivUrl: "https://arxiv.org/abs/2104.06211"
    },
    {
      id: 6,
      title: "Automorphism groups of endomorphisms of P1(¯ Fp).",
      authors: "With Julia Cai, Benjamin Hutz, and Leo Mayer.",
      status: "Glasgow Math. J. 65 (2023), no. 1, 222–255.",
      year: 2023,
      type: "journal",
      url: "https://www.cambridge.org/core/journals/glasgow-mathematical-journal/article/abs/automorphism-groups-of-endomorphisms-of-mathbbp1-barmathbbfp/3C7EE1998E884A35A3D097A946D9B668",
      arxivUrl: "https://arxiv.org/abs/2003.12113"
    },
    {
      id: 7,
      title: "Counting Arcs in Projective Planes via Glynn's Algorithm.",
      authors: "With Nathan Kaplan, Susie Kimport, Rachel Lawrence, and Luke Peilen.",
      status: "J. Geom. 108 (2017), no. 3, 1013–1029.",
      year: 2017,
      type: "journal",
      url: "https://link.springer.com/article/10.1007/s00022-017-0391-1",
      arxivUrl: "https://arxiv.org/abs/1612.05246"
    }
  ];
  
  const filteredPublications = activeTab === "all" 
    ? publications 
    : publications.filter(pub => pub.type === activeTab);
  
  return (
    <section id="publications" className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Publications</h2>
        
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
              activeTab === "all"
                ? "bg-academic-blue text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All Publications
          </button>
          <button
            onClick={() => setActiveTab("journal")}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
              activeTab === "journal"
                ? "bg-academic-blue text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Journal Papers
          </button>
          <button
            onClick={() => setActiveTab("preprint")}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
              activeTab === "preprint"
                ? "bg-academic-blue text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Preprints
          </button>
        </div>
        
        <div className="space-y-6">
          {filteredPublications.map((publication, index) => (
            <div 
              key={publication.id}
              className="bg-academic-neutral p-6 rounded-lg border border-gray-100 hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="badge">{publication.year}</span>
                    <span className="badge capitalize">{publication.type}</span>
                  </div>
                  <h3 className="text-xl font-medium text-academic-blue mb-2">
                    {publication.title}
                  </h3>
                  {publication.authors && (
                    <p className="text-gray-700 mb-2">{publication.authors}</p>
                  )}
                  <p className="text-gray-600 text-sm">{publication.status}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-academic-blue hover:text-academic-light-blue transition-colors"
                  >
                    <span className="mr-1">View paper</span>
                    <ExternalLink size={16} />
                  </a>
                  {publication.arxivUrl && (
                    <a
                      href={publication.arxivUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-academic-blue hover:text-academic-light-blue transition-colors"
                    >
                      <span className="mr-1">arXiv</span>
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {publication.talkUrl && (
                    <a
                      href={publication.talkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-academic-blue hover:text-academic-light-blue transition-colors"
                    >
                      <span className="mr-1">Talk video</span>
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
