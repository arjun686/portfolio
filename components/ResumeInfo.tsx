import { Briefcase, GraduationCap, Award, Mail, Globe, MapPin, Phone } from "lucide-react";

export default function ResumeInfo() {
  return (
    <section className="bg-black py-32 px-6 md:px-12 lg:px-24 min-h-screen z-20 relative text-white">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* Contact & Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="col-span-1 space-y-6">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
              Arjun <span className="text-white/40 italic">Agnihotri</span>
            </h2>
            <div className="space-y-4 text-white/60 font-light text-sm">
              <p className="flex items-center gap-3"><Phone className="w-4 h-4" /> +91 8076740637</p>
              <p className="flex items-center gap-3"><Mail className="w-4 h-4" /> arjunagni20@gmail.com</p>
              <p className="flex items-center gap-3"><MapPin className="w-4 h-4" /> Dwarka, New Delhi</p>
              <a href="https://www.linkedin.com/in/arjun-agnihotri-208b302a3" target="_blank" rel="noreferrer" className="flex items-center gap-3 break-all hover:text-white transition-colors cursor-pointer">
                <Globe className="w-4 h-4 shrink-0" /> linkedin.com/in/arjun-agnihotri-208b302a3
              </a>
            </div>
          </div>
          
          <div className="col-span-1 lg:col-span-2 text-white/70 text-lg md:text-xl font-light leading-relaxed">
            <p>
              Motivated Data Analyst fresher with a strong foundation in Power BI, Excel, and Python for data analysis and visualization. Experienced in cleaning, organizing, and analyzing datasets to identify trends and generate actionable insights. Skilled in creating interactive dashboards, reports, and charts to support business decision-making. 
            </p>
            <p className="mt-4">
              Familiar with data transformation, basic statistics, and exploratory data analysis using Python libraries. A quick learner with strong analytical thinking, attention to detail, and problem-solving abilities. Eager to apply data-driven approaches in a professional environment and contribute to organizational growth through meaningful insights.
            </p>
          </div>
        </div>

        {/* Grid for Skills and Specs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-light tracking-wide border-b border-white/10 pb-4 flex items-center gap-3">
              <Award className="w-5 h-5 text-white/40" /> Core Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Python (Pandas, NumPy, Matplotlib)", "Power BI", "DAX basics", "Power Query", "SQL (Joins, Queries)", "Microsoft Excel", "Data Visualization", "Basic Statistics", "Problem Solving", "AI Concepts"
              ].map(skill => (
                <span key={skill} className="bg-white/[0.03] border border-white/10 px-4 py-2 rounded-full text-sm text-white/80 hover:bg-white/[0.1] transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-light tracking-wide border-b border-white/10 pb-4 flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-white/40" /> Education
            </h3>
            <div className="space-y-6">
              <div className="group">
                <div className="flex justify-between items-start mb-1 text-sm text-white/50">
                  <span>Feb 2026 - Present</span>
                </div>
                <h4 className="text-lg text-white/90">Master of Science (MSc) in Business Analytics</h4>
                <p className="text-white/60 text-sm">Queen&apos;s University Belfast</p>
              </div>
              <div className="group">
                <div className="flex justify-between items-start mb-1 text-sm text-white/50">
                  <span>2022 - 2025</span>
                </div>
                <h4 className="text-lg text-white/90">Bachelor of Computer Applications</h4>
                <p className="text-white/60 text-sm">Guru Gobind Singh Indraprastha University</p>
              </div>
              <div className="group">
                <div className="flex justify-between items-start mb-1 text-sm text-white/50">
                  <span>2021 - 2022</span>
                </div>
                <h4 className="text-lg text-white/90">Senior Secondary (12th)-Commerce with IP</h4>
                <p className="text-white/60 text-sm">New Delhi Public School</p>
              </div>
            </div>
          </div>

        </div>

        {/* Experience & Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Experience */}
          <div className="space-y-8">
            <h3 className="text-2xl font-light tracking-wide border-b border-white/10 pb-4 flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-white/40" /> Experience & Training
            </h3>
            
            <div className="space-y-8">
              <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-[1px] before:bg-white/10">
                <div className="absolute left-[-4px] top-2 w-[9px] h-[9px] rounded-full bg-white/40"></div>
                <div className="text-xs text-white/40 tracking-widest uppercase mb-2">Sep 2025 - Feb 2026</div>
                <h4 className="text-xl text-white/90 font-medium">Data Analyst with AI</h4>
                <div className="text-white/50 text-sm mb-3">DUCAT</div>
                <p className="text-white/70 text-sm font-light leading-relaxed">
                  Trained in data analysis using Excel, SQL, Python, and Power BI. Learned data cleaning, visualization, and basic AI/ML concepts while working on real-world datasets.
                </p>
              </div>

              <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-[1px] before:bg-white/10">
                <div className="absolute left-[-4px] top-2 w-[9px] h-[9px] rounded-full bg-white/40"></div>
                <div className="text-xs text-white/40 tracking-widest uppercase mb-2">Jul 2024 - Aug 2024</div>
                <h4 className="text-xl text-white/90 font-medium">Junior Data Analyst Intern</h4>
                <div className="text-white/50 text-sm mb-3">Prodigy InfoTech</div>
                <p className="text-white/70 text-sm font-light leading-relaxed">
                  Assisted in IT and research tasks including documentation, requirement analysis, and basic data handling. Supported small-scale analytical work and prepared progress reports.
                </p>
              </div>

              <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-full before:w-[1px] before:bg-white/10">
                <div className="absolute left-[-4px] top-2 w-[9px] h-[9px] rounded-full bg-white/40"></div>
                <div className="text-xs text-white/40 tracking-widest uppercase mb-2">Jan 2024 - Jun 2024</div>
                <h4 className="text-xl text-white/90 font-medium">Data & Documentation Support Intern</h4>
                <div className="text-white/50 text-sm mb-3">Consigner Overseas Education Pvt. Ltd</div>
                <p className="text-white/70 text-sm font-light leading-relaxed">
                  Maintained accurate student application records, verified documents, and updated Excel spreadsheets. Improved data flow efficiency.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <h3 className="text-2xl font-light tracking-wide border-b border-white/10 pb-4 flex items-center gap-3">
              <Award className="w-5 h-5 text-white/40" /> Certifications
            </h3>
            
            <div className="space-y-6">
              <div className="bg-white/[0.02] border border-white/10 p-6 rounded-2xl hover:bg-white/[0.04] transition-colors">
                <h4 className="text-lg text-white/90 font-medium mb-1">Deloitte Forage Job Simulation</h4>
                <div className="text-white/50 text-sm mb-4">Deloitte</div>
                <p className="text-white/70 text-sm font-light leading-relaxed">
                  Completed a data analytics job simulation involving data analysis and forensic technology; used Excel for data classification and business insights, and created an interactive dashboard using Tableau.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/10 p-6 rounded-2xl hover:bg-white/[0.04] transition-colors">
                <h4 className="text-lg text-white/90 font-medium mb-1">Data Analytics with Microsoft Power BI</h4>
                <div className="text-white/50 text-sm mb-2">IT-ITeS Sector Skills Council & Govt of India</div>
                <div className="flex gap-4 text-xs font-mono text-white/40">
                  <span>Grade: Gold (77%)</span>
                  <span>Issued: Feb 2026</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
