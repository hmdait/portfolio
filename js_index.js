// Get elements
const experienceSection = document.getElementById('experienceSection');

// Array to hold experiences
let experiences = [
    {
        title: "Software Validation Engineer - Expleo Group",
        date: "April 2023 - Present",
        details: [
            "Designing and writing test automation scripts",
            "Ensuring the functionality and availability of equipment (HIL & Vehicle)",
            "Updating configurations for new software and preparing system tests"
        ],
        visible: false // Track visibility of the experience details
    },
    {
        title: "Mechatronics Development Officer - Capgemini Engineering",
        date: "February 2022 - August 2022",
        details: [
            "Management of ADAS DMS implementations in vehicles",
            "Software formalization and CAN bus frames",
            "Validation of product/process conformity"
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
