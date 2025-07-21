import React, { useState } from 'react';
import Bg from '../../assets/Career/HeroSection.jpg';
import Footer from '../Footer/Footer';
import CustomBtn from '../Button/CustomBtn';
import CallToAction from './CallToAction';

const Careers = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const toggleDropdown = (type) => {
    setActiveDropdown(prev => (prev === type ? null : type));
  };

  const roles = ["UI/UX Designer", "Full-Stack Developer", "Sales Executive", "QA Tester", "DevOps Engineer"];
  const departments = ["Design", "Development", "Sales", "Marketing", "HR", "Operations"];
  const locations = ["Tamil Nadu", "Karnataka", "Kerala", "Maharashtra", "Delhi", "West Bengal", "Telangana", "Gujarat"];

  const allJobOpenings = [
    { title: "Full-Stack Developer", location: "Remote", experience: "1–3 Years", description: "Currently hiring full-stack dev to handle end-to-end development.", role: "Full-Stack Developer", department: "Development" },
    { title: "Junior Full-Stack Developer", location: "Karnataka", experience: "0–1 Years", description: "Internship opportunity for full-stack role. Basic React and Java knowledge needed.", role: "Full-Stack Developer", department: "Development" },
    { title: "Senior Full-Stack Developer", location: "Hyderabad", experience: "4–6 Years", description: "Lead-level opening for experienced full-stack engineer with system design knowledge.", role: "Full-Stack Developer", department: "Development" },
    { title: "UI/UX Designer", location: "Remote", experience: "1–3 Years", description: "Current opening for UI/UX Designer with Figma/Adobe skills.", role: "UI/UX Designer", department: "Design" },
    { title: "Intern UI Designer", location: "Chennai", experience: "0 Years", description: "Design intern to support UX research and prototyping.", role: "UI/UX Designer", department: "Design" },
    { title: "Senior UX Designer", location: "Delhi", experience: "4–6 Years", description: "Looking for a senior UX designer to lead experience strategy.", role: "UI/UX Designer", department: "Design" },
    { title: "Sales Executive", location: "Remote", experience: "1–3 Years", description: "Current opening for B2B sales with communication skills.", role: "Sales Executive", department: "Sales" },
    { title: "Inside Sales - Fresher", location: "Tamil Nadu", experience: "0–1 Years", description: "Fresh graduate with interest in sales and client interaction.", role: "Sales Executive", department: "Sales" },
    { title: "Sales Manager", location: "Kerala", experience: "4–6 Years", description: "Experienced sales manager with leadership and CRM tools knowledge.", role: "Sales Executive", department: "Sales" },
  ];

  // Filter logic to reset other filters when a new filter is selected
  const filterJobOpenings = () => {
    return allJobOpenings.filter(job => {
      const matchesRole = selectedRole ? job.role === selectedRole : true;
      const matchesDepartment = selectedDepartment ? job.department === selectedDepartment : true;
      const matchesLocation = selectedLocation ? job.location === selectedLocation : true;
      return matchesRole && matchesDepartment && matchesLocation;
    });
  };

  const jobOpenings = filterJobOpenings();

  // Update filter when a new selection is made
  const handleDropdownSelection = (type, value) => {
    if (type === 'role') {
      setSelectedRole(value);
      setSelectedDepartment(null);  // Reset department filter
      setSelectedLocation(null);    // Reset location filter
    }
    if (type === 'department') {
      setSelectedDepartment(value);
      setSelectedRole(null);        // Reset role filter
      setSelectedLocation(null);    // Reset location filter
    }
    if (type === 'location') {
      setSelectedLocation(value);
      setSelectedRole(null);        // Reset role filter
      setSelectedDepartment(null);  // Reset department filter
    }

    setActiveDropdown(null); // Close dropdown after selection
  };

  return (
    <>
      <header className='flex w-full min-h-[600px] sm:min-h-[700px] md:min-h-[822.86px] justify-center items-center relative'>
        {/* Background Image */}
        <img className='absolute top-0 left-0 w-full h-full object-cover z-0' src={Bg} alt="Background" />

        {/* Content */}
        <div className='flex flex-col justify-center items-center gap-6 text-center max-w-4xl px-4 z-20 text-white'>
          <h1 className='text-[#19BDE8] font-semibold text-3xl lg:text-5xl'>Join Our Team</h1>
          <p className='font-light text-base md:text-2xl mt-6 text-justify'>
            We're driven by a passion for innovation and impact. At our company, you'll collaborate on meaningful projects that empower brands and improve experiences. If you're looking for a place where your ideas matter and your growth is a priority , you're in the right place.
          </p>
          
          <a href="mailto:hiring@manvian.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
            <CustomBtn>View Openings</CustomBtn>
          </a>
        </div>
      </header>


      {/* Openings */}
      <div className="bg-white text-black font-sans min-h-screen relative">

        {/* Filter Buttons Container */}
        <div className="flex flex-wrap justify-center gap-4 pb-10 relative z-10 px-4 sm:px-0 pt-15">
          {/* Role Dropdown */}
          <div className="relative w-full sm:w-auto">
            <button onClick={() => toggleDropdown("role")} className="w-full sm:w-auto border border-gray-300 text-gray-600 px-4 py-2 rounded-full flex items-center justify-between sm:justify-start gap-2">
              Role
              <svg
                className={`w-3 h-3 mt-0.5 transform ${activeDropdown === "role" ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === "role" && (
              <ul className="absolute bg-white border border-gray-300 mt-2 rounded-md shadow-md w-full sm:w-48 z-20">
                {roles.map((role, idx) => (
                  <li key={idx} className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleDropdownSelection('role', role)}>
                    {role}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Department Dropdown */}
          <div className="relative w-full sm:w-auto">
            <button onClick={() => toggleDropdown("department")} className="w-full sm:w-auto border border-gray-300 text-gray-600 px-4 py-2 rounded-full flex items-center justify-between sm:justify-start gap-2">
              Department
              <svg
                className={`w-3 h-3 mt-0.5 transform ${activeDropdown === "department" ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === "department" && (
              <ul className="absolute bg-white border border-gray-300 mt-2 rounded-md shadow-md w-full sm:w-48 z-20">
                {departments.map((dept, idx) => (
                  <li key={idx} className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleDropdownSelection('department', dept)}>
                    {dept}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Location Dropdown */}
          <div className="relative w-full sm:w-auto">
            <button onClick={() => toggleDropdown("location")} className="w-full sm:w-auto border border-gray-300 text-gray-600 px-4 py-2 rounded-full flex items-center justify-between sm:justify-start gap-2">
              Location
              <svg
                className={`w-3 h-3 mt-0.5 transform ${activeDropdown === "location" ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === "location" && (
              <ul className="absolute bg-white border border-gray-300 mt-2 rounded-md shadow-md w-full sm:w-48 z-20">
                {locations.map((loc, idx) => (
                  <li key={idx} className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleDropdownSelection('location', loc)}>
                    {loc}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Job Cards Container */}
        <div className="pl-8 sm:pl-10 md:pl-20 lg:pl-47  pb-6">
          <h2 className="text-xl lg:text-4xl font-semibold text-[#19BDE8]">Current Openings</h2>
        </div>
        <div className="flex justify-center gap-6 flex-wrap pb-20 px-4 sm:px-6 md:px-8">


          {jobOpenings.length === 0 ? (
            <p className="text-center w-full ">There are currently no job openings available.</p>
          ) : (
            jobOpenings.map((job, index) => (
              <div key={index} className="border border-gray-300 rounded-lg p-4 sm:p-6 w-full sm:w-80 shadow-md hover:shadow-xl transition duration-300">
                <h3 className="font-semibold text-lg mb-1 text-justify">{job.title}</h3>
                <p className="text-sm text-gray-700 mb-2 text-justify">
                  Location: {job.location} | Experience: {job.experience}
                </p>
                <p className="text-sm text-gray-600 mb-4 text-justify">{job.description}</p>
                <button className="w-full sm:w-auto bg-cyan-400 text-white px-4 py-2 rounded hover:bg-cyan-500 cursor-pointer">
                  Apply Now
                </button>
              </div>
            ))
          )}
        </div>
      </div>
      <CallToAction />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Careers;
