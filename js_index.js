// Get elements
const experienceSection = document.getElementById('experienceSection');

// Array to hold experiences
let experiences = [
    {
        title: "Software Validation Engineer - Expleo Group",
        date: "September 2023 - Present",
        details: [
            "Wrote test automation scripts for ADAS systems {UPA/FKP, DMS, and SVS}, reducing manual test time by 40% and increasing test coverage by configuring the test environment on a HIL bench to ensure accurate and efficient testing.",
            "Conducted software tests directly on vehicles, ensuring the functionality and compliance of ADAS software flashed into the ECUs, using Renault's internal tools such as DDT2000, ADaPT, Jira, CodeBeamer, as well as Vector tools (CANoe, CANape, etc.)",
            "Developed CAPL scripts for a Gateway in a SWEET500 architecture development project, based on an existing architecture. This project involved monitoring all frames of the CAN buses from the old architecture to ensure a smooth and secure transition.",
            "Wrote and presented detailed weekly reports to clients and internal teams, providing full transparency on project progress."
        ],
        visible: false // Track visibility of the experience details
    },
    {
        title: "Internship Trainee - Renault Group",
        date: "February. 2023 - June. 2023 ",
        details: [
            "Designed and developed a centralized supervision interface using Python, JavaScript, HTML, CSS, enabling real-time monitoring of all Renault test benches worldwide, improved user responsiveness through a system of customized alerts leveraging a client-server architecture with WebSocket communication.",
            "Built a global database aggregating the capabilities of all Renault test benches, ensuring efficient management of critical information with a focus on scalability and reliability.",
            "Developed APIs using Python and integrated them with test bench systems for real-time data collection from PCs, ensuring reliable and fast data reporting via Socket communication.",
            "Created a web-based user interface with advanced features (filters, subscriptions, notifications) using JavaScript, HTML, CSS, for an optimized user experience and easy access to relevant data."

        ],
        visible: false // Initially hidden
    },
    {
        title: "Mechatronics Development Officer - Capgemini Engineering",
        date: "February 2022 - August 2022",
        details: [
            "Led and monitored the implementation of ADAS components, particularly the Driver Monitoring System (DMS), across various vehicle projects, ensuring seamless integration in a constrained environment.",
            "Managed CAN frames in collaboration with the supplier Bosch, including the officialization of software/hardware and the management of CAN databases.",
            "Validated product/process compliance according to B21 standards and connector standards, ensuring adherence to quality and safety requirements.",
            "Facilitated technical meetings and provided regular project progress reports, ensuring smooth communication between business and project teams."
        ],
        visible: false // Initially hidden
    },
    {
        title: "Pre-employment internship - Valeo",
        date: "November 2021 - February 2022",
        details: [
            "Developed comprehensive technical specification documents outlining precise equipment requirements for the manufacturing of printed circuit boards, specifically for automotive lighting systems and other electronic devices, ensuring optimal performance and alignment with industry standards.",
            "Coordinated with suppliers for the selection and procurement of equipment, including organizing sourcing committees (SOCO) for budgets exceeding €30,000, ensuring the best quality/price/delivery ratio.",
            "Led project kickoff meetings, ensuring adherence to industrial schedules and compliance with technical specifications.",
            "Monitored and validated equipment post-installation, managing non-conformities and drafting detailed reports, facilitating the transition to the production phase (SOP)."
                ],
        visible: false // Initially hidden
    },
    {
        title: "Graduation internship - Trèves Group",
        date: "Mars 2021 - July. 2021 ",
        details: [
            "Analysis of requirements and feasibility study of the production process automation project, including the definition of objectives and planning via a Gantt chart.",
            "Design and modeling of the automation system components, followed by the development of a detailed specification document, then communication and coordination with suppliers for manufacturing.",
            "Programming in Ladder on SIMATIC Step7 and program simulation, including the selection of the PLC, sensors, and actuators needed for process automation.",
            "Assembly and testing of the system on-site, followed by adjustments to ensure optimal performance and compliance with the initial objectives."
                ],
        visible: false // Initially hidden
    }
];

// Function to render experiences
function renderExperiences() {
    experienceSection.innerHTML = "<h2>Professional Experience</h2>"; // Reset section
    experiences.forEach((experience, index) => {
        const jobDiv = document.createElement('div');
        jobDiv.classList.add('job');
        
        // Create the experience title, date, and show/hide button
        jobDiv.innerHTML = `
            <h3>${experience.title}</h3>
            <p>${experience.date}</p>
            <button onclick="toggleDetails(${index})">${experience.visible ? 'Hide Details' : 'Show Details'}</button>
            <div id="details-${index}" class="details" style="display: ${experience.visible ? 'block' : 'none'};">
                <ul>${experience.details.map(detail => `<li>${detail}</li>`).join('')}</ul>
            </div>
        `;
        experienceSection.appendChild(jobDiv);
    });
}

// Function to toggle visibility of details
function toggleDetails(index) {
    experiences[index].visible = !experiences[index].visible;  // Toggle visibility state
    renderExperiences();  // Re-render experiences to reflect visibility changes
}

// Initial rendering
renderExperiences();
