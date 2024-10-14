const experienceSection = Vue.createApp({
    data(){
        return {
            Experience: {
                expleo: {
                    title: "Software Validation Engineer",
                    date: "September 2023 - Present",
                    details: [
                        "Wrote test automation scripts for ADAS systems {UPA/FKP, DMS, and SVS}, reducing manual test time by 40% and increasing test coverage by configuring the test environment on a HIL bench to ensure accurate and efficient testing.",
                        "Conducted software tests directly on vehicles, ensuring the functionality and compliance of ADAS software flashed into the ECUs, using Renault's internal tools such as DDT2000, ADaPT, Jira, CodeBeamer, as well as Vector tools (CANoe, CANape, etc.)",
                        "Developed CAPL scripts for a Gateway in a SWEET500 architecture development project, based on an existing architecture. This project involved monitoring all frames of the CAN buses from the old architecture to ensure a smooth and secure transition.",
                        "Wrote and presented detailed weekly reports to clients and internal teams, providing full transparency on project progress."
                    ]
                },
                renault:{
                    
                        title: "Internship Trainee",
                        date: "February. 2023 - June. 2023 ",
                        logo: "https://companieslogo.com/img/orig/CAP.PA-9b4110b0.png?t=1720244491",
                        details: [
                            "Designed and developed a centralized supervision interface using Python, JavaScript, HTML, CSS, enabling real-time monitoring of all Renault test benches worldwide, improved user responsiveness through a system of customized alerts leveraging a client-server architecture with WebSocket communication.",
                            "Built a global database aggregating the capabilities of all Renault test benches, ensuring efficient management of critical information with a focus on scalability and reliability.",
                            "Developed APIs using Python and integrated them with test bench systems for real-time data collection from PCs, ensuring reliable and fast data reporting via Socket communication.",
                            "Created a web-based user interface with advanced features (filters, subscriptions, notifications) using JavaScript, HTML, CSS, for an optimized user experience and easy access to relevant data."
                        ]
                    },
                capgemini:{
                    title: "Mechatronics Engineer",
                        date: "February 2022 - August 2022",
                        details: [
                            "Led and monitored the implementation of ADAS components, particularly the Driver Monitoring System (DMS), across various vehicle projects, ensuring seamless integration in a constrained environment.",
                            "Managed CAN frames in collaboration with the supplier Bosch, including the officialization of software/hardware and the management of CAN databases.",
                            "Validated product/process compliance according to B21 standards and connector standards, ensuring adherence to quality and safety requirements.",
                            "Facilitated technical meetings and provided regular project progress reports, ensuring smooth communication between business and project teams."
                        ]
                    },
                    valeo:
                    {
                        title: "Pre-employment internship",
                        date: "November 2021 - February 2022",
                        details: [
                            "Developed comprehensive technical specification documents outlining precise equipment requirements for the manufacturing of printed circuit boards, specifically for automotive lighting systems and other electronic devices, ensuring optimal performance and alignment with industry standards.",
                            "Coordinated with suppliers for the selection and procurement of equipment, including organizing sourcing committees (SOCO) for budgets exceeding €30,000, ensuring the best quality/price/delivery ratio.",
                            "Led project kickoff meetings, ensuring adherence to industrial schedules and compliance with technical specifications.",
                            "Monitored and validated equipment post-installation, managing non-conformities and drafting detailed reports, facilitating the transition to the production phase (SOP)."
                                ],
                        visible: false // Initially hidden
                    },
                    treves:
                    {
                        title: "Graduation internship",
                        date: "Mars 2021 - July. 2021 ",
                        details: [
                            "Analysis of requirements and feasibility study of the production process automation project, including the definition of objectives and planning via a Gantt chart.",
                            "Design and modeling of the automation system components, followed by the development of a detailed specification document, then communication and coordination with suppliers for manufacturing.",
                            "Programming in Ladder on SIMATIC Step7 and program simulation, including the selection of the PLC, sensors, and actuators needed for process automation.",
                            "Assembly and testing of the system on-site, followed by adjustments to ensure optimal performance and compliance with the initial objectives."
                                ],
                        visible: false // Initially hidden
                    }
            }
                
        }
    },
    methods:{
    }

});
experienceSection.mount('#experience');

const aboutSection = Vue.createApp({
    data(){
        return {
            aboutMe:'Software Validation Engineer with solid expertise in test automation, embedded systems validation, and developing solutions for ADAS systems. Passionate about technological innovation, I successfully tackle complex challenges related to intelligent systems. My dedication, energy, along with my communication and project management skills, enable me to make valuable contributions.',
            
        }
    }
});
aboutSection.mount('#about')

const projectSection = Vue.createApp({
    data(){
        return { 
            project_1:{
                name: 'AutoCar',
                description: "an autonomous car based on a Raspberry PI for processing data received by a camera and an ultrasonic sensors",
                live_demo: '',
                github_link: 'https://github.com/hmdait/Autonomous_Car.git'
            },
            project_2:{
                name: 'Mery',
                description: "Voice response Assistance can hear us and translate audio messages into text as well as read text",
                live_demo: '',
                github_link: 'https://github.com/hmdait/Assistant_Response'
            },
            project_3: {
                name: 'Alicona',
                description: "Measure the surface roughness of a part produced by additive manufacturing (SLS), in accordance with the ISO 25178.",
                live_demo: 'https://docs.google.com/presentation/d/1PhgUvstQkO5BZnhnWVLVb8qSPsIRLMTb/edit?usp=drive_link&ouid=105801039597573388513&rtpof=true&sd=true',
                github_link: 'https://github.com/hmdait/confocal_measurement'
            }
        }
    },
    methods:{

    }
});
projectSection.mount('#projects');


const skillsSection = Vue.createApp({
    data(){
        return { 
            languages: {
                python:{name:'Python', rate:'80%'},
                JavaScript: {name:'JavaScript', rate: '60%'},
                C: {name: 'C', rate:'80%'},
                CAPL: {name:'CAPL',rate:'80%'}
            },

        }
    },
    methods:{

    }
})

skillsSection.mount('#skills');

const menuIcone = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcone.onclick = ()=>{
    navLinks.classList.toggle('active')
}

//Swwper code 
new Swiper('.swiper', {
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  
function openVideo1() {
    // Path to Respons assiste video
    const videoPath = 'https://drive.google.com/file/d/1qJQlDMIGqlszMTsI5pQZZzSY0RS2r1aC/view?usp=sharing'; 
    window.open(videoPath, '_blank'); // Opens the video in a new tab
}
function openVideo2() {
    // Path to Respons assiste video
    const videoPath = 'https://drive.google.com/file/d/1exKXQZmpVaDemvtBU8Hr1UKZM6jqm8GO/view?usp=drive_link'; 
    window.open(videoPath, '_blank'); // Opens the video in a new tab
}
function openVideo3() {
    // Path to Alicona presentation
    const videoPath = 'https://docs.google.com/presentation/d/1PhgUvstQkO5BZnhnWVLVb8qSPsIRLMTb/edit?usp=drive_link&ouid=105801039597573388513&rtpof=true&sd=true'; 
    window.open(videoPath, '_blank'); // Opens the video in a new tab
}

document.querySelector('#submit-btn').addEventListener('click', sendEmail);
function sendEmail() {
    const email = "hmdaitbjj@gmail.com";
    const subject = "Contact Form Submission"; // Subject line
    const message = document.getElementById('userMessage').value; // Get the textarea content

    // Check if the message is empty
    if (!message) {
        alert("Please enter a message."); // Alert if the textarea is empty
        return;
    }

    const body = `${message}`; // Include the user's message in the body
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the user's email client
    window.location.href = mailtoLink;
    // Clear the textarea content
    document.getElementById('userMessage').value = '';
}



