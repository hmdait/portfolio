// ============================================
// DATA.JS - Data Layer
// ============================================

// ============================================
// PERSONAL INFORMATION
// ============================================
const personalInfo = {
  name: "Hamid AIT BAJJA",
  title: "Systems Integration Engineer",
  roles: ['Software Engineer', 'Systems Integration Engineer'],
  email: "hmdaitbjj@gmail.com",
  location: "Nice, France",
  
  about: `Systems Integration Engineer, certified ISTQB® – Certified Tester, Foundation Level (Syllabus v4.0), with solid expertise in software testing and validation processes aligned with international standards. My experience covers test planning and execution, test automation, defect analysis, and validation cycle optimization to ensure software quality and reliability. With a strong background in development and integration, I apply quality-driven approaches such as TDD and CI/CD, leveraging modern tools to enhance system performance and robustness. Passionate about innovation, I'm committed to delivering reliable, efficient, and compliant solutions that meet the highest quality standards.`,
  
  social: {
    github: 'https://github.com/hmdait',
    linkedin: 'https://www.linkedin.com/in/hamid-ait-bajja-b2ba41167/',
    cv: 'https://drive.google.com/file/d/12WdbBpeKM4sXDoNKeKjbAmxziUTWbqSb/view?usp=drive_link'
  },
  
  profileImage: 'https://avatars.githubusercontent.com/u/41082584?v=4'
};

// ============================================
// EXPERIENCE DATA
// ============================================
const experiences = [
  {
    company: "AMPERE",
    logo: "images/logos/Ampere_Renault_Logo.png",
    role: "Integration & Test Environment Engineer",
    startDate: "Mars 2023",
    endDate: "Present",
    summary: "Automation of the verification process using Python and Batch scripts, ensuring systematic checks after each bench usage....",
    details: [
      "Automation of the verification process using Python and Batch scripts, ensuring systematic checks after each bench usage",
      "Automatic generation of detailed test reports including the functional status of each network and bench utilization KPIs via CI.",
      "Development of CAPL scripts in Canoe to monitor networks communication on benches.",
      "Active member of a Scrum team, contributing to agile ceremonies and collaborative development.",
      "Supporting the improvement of reliability and efficiency in the validation process within the new SDV architecture."
      
    ]
  },
  {company: "AMPERE",
    logo: "images/logos/Ampere_Renault_Logo.png",
    role: "Systems Integration Engineer",
    startDate: "September 2023",
    endDate: "Mars 2025",
    summary: "Wrote test automation scripts for ADAS systems (UPA/FKP, DMS, and SVS), reducing manual test time by 40% and increasing...",
    details: [
      "Wrote test automation scripts for ADAS systems (UPA/FKP, DMS, and SVS), reducing manual test time by 40% and increasing test coverage by configuring the test environment on a HIL bench to ensure accurate and efficient testing.",
      "Conducted software tests directly on vehicles, ensuring the functionality and compliance of ADAS software flashed into the ECUs, using Renault's internal tools such as DDT2000, ADaPT, Jira, CodeBeamer, as well as Vector tools (CANoe, CANape, etc.)",
      "Developed CAPL scripts for a Gateway in a SDV architecture development project, based on an existing architecture. This project involved monitoring all frames of the CAN buses from the old architecture to ensure a smooth and secure transition.",
      "Wrote and presented detailed weekly reports to clients and internal teams, providing full transparency on project progress."
    ]
  },
  {
    company: "Renault Group",
    logo: "images/logos/renault-logo.png",
    role: "Internship Trainee",
    startDate: "February 2023",
    endDate: "June 2023",
    summary: "Designed and developed a centralized supervision interface using Python, JavaScript, HTML, CSS, enabling real-time...",
    details: [
      "Designed and developed a centralized supervision interface using Python, JavaScript, HTML, CSS, enabling real-time monitoring of all Renault test benches worldwide, improved user responsiveness through a system of customized alerts leveraging a client-server architecture with WebSocket communication.",
      "Built a global database aggregating the capabilities of all Renault test benches, ensuring efficient management of critical information with a focus on scalability and reliability.",
      "Developed APIs using Python and integrated them with test bench systems for real-time data collection from PCs, ensuring reliable and fast data reporting via Socket communication.",
      "Created a web-based user interface with advanced features (filters, subscriptions, notifications) using JavaScript, HTML, CSS, for an optimized user experience and easy access to relevant data."
    ]
  },
  {
    company: "STELLANTIS",
    logo: "images/logos/Stellantis_logo.png",
    role: "Mechatronic Development Consultant",
    startDate: "February 2023",
    endDate: "June 2023",
    summary: "Led and monitored the implementation of ADAS components, particularly the Driver Monitoring System (DMS)...",
    details: [
      "Led and monitored the implementation of ADAS components, particularly the Driver Monitoring System (DMS), across various vehicle projects, ensuring seamless integration in a constrained environment.",
      "Managed CAN frames in collaboration with the supplier Bosch, including the officialization of software/hardware and the management of CAN databases.",
      "Validated product/process compliance according to B21 standards and connector standards, ensuring adherence to quality and safety requirements.",
      "Facilitated technical meetings and provided regular project progress reports, ensuring smooth communication between business and project teams."
    ]
  },
  {
    company: "Valeo",
    logo: "images/logos/Valeo_Logo.png",
    role: "Pre-employment Internship",
    startDate: "November 2021",
    endDate: "February 2022",
    summary: "Developed comprehensive technical specification documents outlining precise equipment requirements for the...",
    details: [
      "Developed comprehensive technical specification documents outlining precise equipment requirements for the manufacturing of printed circuit boards, specifically for automotive lighting systems and other electronic devices, ensuring optimal performance and alignment with industry standards.",
      "Coordinated with suppliers for the selection and procurement of equipment, including organizing sourcing committees (SOCO) for budgets exceeding €30,000, ensuring the best quality/price/delivery ratio.",
      "Led project kickoff meetings, ensuring adherence to industrial schedules and compliance with technical specifications.",
      "Monitored and validated equipment post-installation, managing non-conformities and drafting detailed reports, facilitating the transition to the production phase (SOP)."
    ]
  },
  {
    company: "Treves",
    logo: "images/logos/TREVES-logo.png",
    role: "Graduation Internship",
    startDate: "March 2021",
    endDate: "July 2021",
    summary: "Analysis of requirements and feasibility study of the production process automation project, including the...",
    details: [
      "Analysis of requirements and feasibility study of the production process automation project, including the definition of objectives and planning via a Gantt chart.",
      "Design and modeling of the automation system components, followed by the development of a detailed specification document, then communication and coordination with suppliers for manufacturing.",
      "Programming in Ladder on SIMATIC Step7 and program simulation, including the selection of the PLC, sensors, and actuators needed for process automation.",
      "Assembly and testing of the system on-site, followed by adjustments to ensure optimal performance and compliance with the initial objectives."
    ]
  }
];

// ============================================
// PROJECTS DATA
// ============================================
const projects = [
  {
    id: 1,
    name: 'AutoCar',
    description: "An autonomous car based on a Raspberry PI for processing data received by a camera and ultrasonic sensors",
    image: 'images/autonomous_car.png',
    demoLink: 'https://drive.google.com/file/d/1exKXQZmpVaDemvtBU8Hr1UKZM6jqm8GO/view?usp=drive_link',
    github_link: 'https://github.com/hmdait/Autonomous_Car.git' 
  },
  {
    id: 2,
    name: 'Mery',
    description: "Voice response Assistance can hear us and translate audio messages into text as well as read text",
    image: 'images/speech_response.png',
    demoLink: 'https://drive.google.com/file/d/1qJQlDMIGqlszMTsI5pQZZzSY0RS2r1aC/view?usp=sharing',
    github_link: 'https://github.com/hmdait/Assistant_Response' 
  },
  {
    id: 3,
    name: 'Alicona',
    description: "Measure the surface roughness of a part produced by additive manufacturing (SLS), in accordance with the ISO 25178.",
    image: 'images/alicona.png',
    demoLink: 'https://docs.google.com/presentation/d/1PhgUvstQkO5BZnhnWVLVb8qSPsIRLMTb/edit?usp=drive_link&ouid=105801039597573388513&rtpof=true&sd=true',
    github_link: 'https://github.com/hmdait/confocal_measurement' 
  },
  {
    id: 4,
    name: 'Humoraq',
    description: "a modern, multilingual joke-sharing web application built with VueJs3. Its goal is simple: make people laugh across cultures and languages",
    image: 'images/humoraq.png',
    demoLink: 'https://humoraq.com',
    github_link: 'https://github.com/hmdait/humoraq' 
  },
  {
    id: 5,
    name: 'porfolio',
    description: "My personal portfolio showcasing my skills and projects, fully responsive, and designed to highlight my work in a modern and interactive way.",
    image: 'images/porfolio.png',
    demoLink: 'https://hmdait.github.io/portfolio/',
    github_link: 'https://github.com/hmdait/portfolio' 
  }
];

// ============================================
// SKILLS DATA
// ============================================
const skills = {
  programmingLanguages: [
    { name: 'Python', level: 'Advanced', percentage: 80 },
    { name: 'C/C++', level: 'Advanced', percentage: 80 },
    { name: 'CAPL', level: 'Advanced', percentage: 80 },
    { name: 'Batsh', level: 'Advanced', percentage: 80 },
    { name: 'JavaScript', level: 'Intermediate', percentage: 60 },
    { name: 'HTML', level: 'Intermediate', percentage: 60 },
    { name: 'CSS', level: 'Intermediate', percentage: 60 }
  ],
  
  frameworks: [
    { name: 'Robot Framework', level: 'Advanced', percentage: 70 },
    { name: 'Selenium', level: 'Beginner', percentage: 30 },
    { name: 'VueJs', level: 'Beginner', percentage: 40 },
    { name: 'Flask', level: 'Beginner', percentage: 30 }
  ],
  
  protocols: [
    { name: 'Ethernet', level: 'Intermediate', percentage: 60 },
    { name: 'CAN', level: 'Advanced', percentage: 80 },
    { name: 'XCP', level: 'Advanced', percentage: 70 },
    { name: 'AACP', level: 'Intermediate', percentage: 50 },
    { name: 'TCP/IP', level: 'Advanced', percentage: 80 },
    { name: 'SPI', level: 'Intermediate', percentage: 60 },
    { name: 'I2C', level: 'Intermediate', percentage: 60 },
    { name: 'UDP', level: 'Intermediate', percentage: 60 },
    { name: 'UART', level: 'Intermediate', percentage: 60 },
  ],
  
  toolsChains: [
    { name: 'Matlab Simulink', level: 'Advanced', percentage: 80 },
    { name: 'Vector CANoe', level: 'Advanced', percentage: 85 },
    { name: 'Vector CANalyzer', level: 'Advanced', percentage: 80 },
    { name: 'Vector CANape', level: 'Advanced', percentage: 75 },
    { name: 'DDT200', level: 'Advanced', percentage: 85 },
    { name: 'LabView', level: 'Advanced', percentage: 70 },
    { name: 'IBM DOORS', level: 'Intermediate', percentage: 55 },
    { name: 'Jira', level: 'Advanced', percentage: 70 },
    { name: 'Docker', level: 'Advanced', percentage: 70 },
    { name: 'CodeBeamer', level: 'Advanced', percentage: 70 },
    { name: 'SCANeR', level: 'Beginner', percentage: 40 }
  ]
};

// ============================================
// CERTIFICATIONS DATA
// ============================================
const certifications = [
  { image: 'images/GASQ-ISTQB.png', title: 'GASQ ISTQB Certification' },
  { image: 'images/Udemy-ISTQB.jpg', title: 'Udemy ISTQB Certification' },
  { image: 'images/Embedded_Software_and_Hardware_rchitecture.jpeg', title: 'Embedded Software and Hardware Architecture' },
  { image: 'images/c_basics.jpeg', title: 'C Programming Basics' },
  { image: 'images/scrum.png', title: 'Scrum Certification' },
  { image: 'images/web_design.png', title: 'Web Design Certification' },
  { image: 'images/LeaderShip.png', title: 'Leadership Certification' }
];

// ============================================
// TECH STACK LOGOS
// ============================================
const techLogos = [
  { src: 'images/logos/python.png', alt: 'Python' },
  { src: 'images/logos/C_Logo.png', alt: 'C' },
  { src: 'images/logos/javascript.png', alt: 'JavaScript' },
  { src: 'images/logos/html.png', alt: 'HTML' },
  { src: 'images/logos/css.png', alt: 'CSS' },
  { src: 'images/logos/vscode.png', alt: 'VSCode' },
  { src: 'images/logos/pycharm-logo.png', alt: 'PyCharm' },
  { src: 'images/logos/QtDeseigner-logo.png', alt: 'Qt Designer' },
  { src: 'images/logos/VueJs.png', alt: 'VueJs' },
  { src: 'images/logos/Robot-framework.png', alt: 'Robot Framework' },
  { src: 'images/logos/git.png', alt: 'Git' },
  { src: 'images/logos/codebeamer.png', alt: 'Codebeamer' },
  { src: 'images/logos/Vector.png', alt: 'Vector' },
  { src: 'images/logos/Labview-logo.png', alt: 'LabVIEW' },
  { src: 'images/logos/Matlab.png', alt: 'MATLAB' },
  { src: 'images/logos/scaner-logo.png', alt: 'SCANeR' }
];

// ============================================
// EXPORT DATA
// ============================================
// Make data available globally
window.portfolioData = {
  personalInfo,
  experiences,
  projects,
  skills,
  certifications,
  techLogos
};