// ============================================
// JS_INDEX.JS - Main Application Logic
// Uses data from data.js
// ============================================

// These functions MUST be global to work with onclick attributes
function openVideo1() {
  const videoPath = 'https://drive.google.com/file/d/1qJQlDMIGqlszMTsI5pQZZzSY0RS2r1aC/view?usp=sharing';
  window.open(videoPath, '_blank');
}

function openVideo2() {
  const videoPath = 'https://drive.google.com/file/d/1exKXQZmpVaDemvtBU8Hr1UKZM6jqm8GO/view?usp=drive_link';
  window.open(videoPath, '_blank');
}

function openVideo3() {
  const videoPath = 'https://docs.google.com/presentation/d/1PhgUvstQkO5BZnhnWVLVb8qSPsIRLMTb/edit?usp=drive_link&ouid=105801039597573388513&rtpof=true&sd=true';
  window.open(videoPath, '_blank');
}

// Wait for data to be loaded
document.addEventListener('DOMContentLoaded', function () {
  // Check if data is loaded
  if (!window.portfolioData) {
    console.error('Data not loaded! Make sure data.js is included before js_index.js');
    return;
  }

  console.log('Portfolio data loaded successfully');

  // Get data from global scope
  const { personalInfo, experiences, projects, skills } = window.portfolioData;

  initializePortfolio(personalInfo, experiences, projects, skills);
});

function initializePortfolio(personalInfo, experiences, projects, skills) {

  // ============================================
  // HEADER - NAVIGATION & SCROLL EFFECTS
  // ============================================

  const header = document.getElementById('header');
  const menuIcon = document.getElementById('menuIcon');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.header__nav-link');

  // Handle scroll effects
  let lastScrollTop = 0;
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add scrolled class for styling
    if (scrollTop > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }

    lastScrollTop = scrollTop;
  });

  // Mobile menu toggle
  if (menuIcon) {
    menuIcon.addEventListener('click', () => {
      navMenu.classList.toggle('header__nav--open');
      const icon = menuIcon.querySelector('i');

      if (navMenu.classList.contains('header__nav--open')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!menuIcon.contains(event.target) && !navMenu.contains(event.target)) {
      navMenu.classList.remove('header__nav--open');
      const icon = menuIcon.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });

  // Close mobile menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('header__nav--open');
      const icon = menuIcon.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    });
  });

  // Active section highlighting
  const sections = document.querySelectorAll('section[id]');

  function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.header__nav-link[href="#${sectionId}"]`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('header__nav-link--active');
        } else {
          navLink.classList.remove('header__nav-link--active');
        }
      }
    });
  }

  window.addEventListener('scroll', highlightNavigation);

  // ============================================
  // EXPERIENCE SECTION - SWIPER & MODAL
  // ============================================

  const experienceWrapper = document.getElementById('experienceWrapper');

  // Generate experience cards
  experiences.forEach((exp, index) => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';

    slide.innerHTML = `
    <div class="card experience-card" data-index="${index}">
      <img src="${exp.logo}" alt="${exp.company} logo" class="experience-card__logo">
      <h3 class="experience-card__company">${exp.company}</h3>
      <p class="experience-card__role">${exp.role}</p>
      <p class="experience-card__date">${exp.startDate} - ${exp.endDate}</p>
      <p class="experience-card__summary">${exp.summary}</p>
    </div>
  `;

    experienceWrapper.appendChild(slide);
  });

  // Initialize Experience Swiper
  const experienceSwiper = new Swiper('.myExperienceSwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    pagination: {
      el: '.experience-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.experience-next',
      prevEl: '.experience-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 2,
        centeredSlides: true,
      },
      1024: {
        slidesPerView: 3,
        centeredSlides: true,
      },
    },
  });

  // Modal functionality
  const modal = document.getElementById('experienceModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');

  function showExperienceModal(index) {
    const exp = experiences[index];

    modalTitle.textContent = `${exp.company} - Tasks`;
    modalBody.innerHTML = exp.details
      .map(detail => `<p>${detail}</p>`)
      .join('');

    modal.classList.add('modal--open');
    document.body.style.overflow = 'hidden';
  }

  function closeExperienceModal() {
    modal.classList.remove('modal--open');
    document.body.style.overflow = '';
  }

  // Event listeners for modal
  experienceWrapper.addEventListener('click', (e) => {
    const card = e.target.closest('.experience-card');
    if (card) {
      const index = parseInt(card.dataset.index);
      showExperienceModal(index);
    }
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeExperienceModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeExperienceModal();
      }
    });
  }

  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('modal--open')) {
      closeExperienceModal();
    }
  });

  // ============================================
  // CERTIFICATIONS SWIPER
  // ============================================

  const certificationsSwiper = new Swiper('.myCertificationsSwiper', {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // ============================================
  // VUE.JS INSTANCES
  // ============================================

  // About Section
const aboutSection = Vue.createApp({
  data() {
    return {
      name: personalInfo.name,
      title: personalInfo.title,
      roles: personalInfo.roles,
      aboutMe: personalInfo.about,
      social: personalInfo.social,
      profileImage: personalInfo.profileImage
    }
  }
});

aboutSection.mount('#about');


  // Header Vue Instance
  const headerSection = Vue.createApp({
    data() {
      return {
        name: personalInfo.name,
        cvLink: personalInfo.social.cv,
        githubLink: personalInfo.social.github
      }
    }
  });

  headerSection.mount('#header');
  console.log('✅ Header Vue.js mounted with data from data.js');

  // Projects Section
  const projectSection = Vue.createApp({
    data() {
      return {
        project_1: projects[0],
        project_2: projects[1],
        project_3: projects[2]
      }
    }
  });
  projectSection.mount('#projects');

  // ============================================
  // SKILLS SECTION VUE 
  // ============================================
  const skillsSection = Vue.createApp({
    data() {
      return {
        skillCategories: skills // For fully dynamic
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.animateSkillBars();
      });
    },
    methods: {
      getCategoryTitle(categoryKey) {
        const titles = {
          'programmingLanguages': 'Programming Languages',
          'frameworks': 'Frameworks',
          'protocols': 'Communication Protocols',
          'toolsChains': 'Tools Chains'
        };
        return titles[categoryKey] || categoryKey;
      },
      animateSkillBars() {
        const skillBars = document.querySelectorAll('.skills-section .skill-bar__fill');
        skillBars.forEach((bar, index) => {
          setTimeout(() => {
            bar.style.transition = 'width 1.5s ease-out';
            // Width is already set by Vue binding
          }, index * 50);
        });
      }
    }
  });
  skillsSection.mount('#skills');

  // ============================================
  // BUTTON CLICK HANDLERS
  // ============================================

  document.addEventListener('DOMContentLoaded', function () {
    console.log('🔘 Initializing button handlers...');

    // ============================================
    // PROJECT BUTTONS - Live Demo
    // ============================================

    // Get all Live Demo buttons in projects section
    const projectButtons = document.querySelectorAll('.projects-section .btn--primary');

    projectButtons.forEach((button, index) => {
      button.addEventListener('click', function (e) {
        e.preventDefault();
        console.log(`Project button ${index + 1} clicked`);

        // Map buttons to their respective demo links
        if (index === 0) {
          openVideo2(); // AutoCar
        } else if (index === 1) {
          openVideo1(); // Mery
        } else if (index === 2) {
          openVideo3(); // Alicona
        }
      });
    });

    // ============================================
    // DOWNLOAD CV BUTTONS
    // ============================================

    // All Download CV buttons
    const cvButtons = document.querySelectorAll('a[href*="drive.google.com"]');

    cvButtons.forEach(button => {
      button.addEventListener('click', function (e) {
        console.log('Download CV clicked');
        // Let the default link behavior work
      });
    });

    // ============================================
    // CONTACT BUTTON in About section
    // ============================================

    const contactButtons = document.querySelectorAll('a[href="#contact"]');

    contactButtons.forEach(button => {
      button.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Contact button clicked');

        // Smooth scroll to contact section
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
          const headerHeight = document.querySelector('.header').offsetHeight;
          const targetPosition = contactSection.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    // ============================================
    // GITHUB BUTTONS
    // ============================================

    const githubButtons = document.querySelectorAll('a[href*="github.com"]');

    githubButtons.forEach(button => {
      button.addEventListener('click', function (e) {
        console.log('GitHub button clicked:', this.href);
        // Let the default link behavior work
      });
    });

    console.log('✅ Button handlers initialized');
  });

  // ============================================
  // HELPER FUNCTIONS - Make sure these exist
  // ============================================

  function openVideo1() {
    const videoPath = 'https://drive.google.com/file/d/1qJQlDMIGqlszMTsI5pQZZzSY0RS2r1aC/view?usp=sharing';
    console.log('Opening Mery demo:', videoPath);
    window.open(videoPath, '_blank', 'noopener,noreferrer');
  }

  function openVideo2() {
    const videoPath = 'https://drive.google.com/file/d/1exKXQZmpVaDemvtBU8Hr1UKZM6jqm8GO/view?usp=drive_link';
    console.log('Opening AutoCar demo:', videoPath);
    window.open(videoPath, '_blank', 'noopener,noreferrer');
  }

  function openVideo3() {
    const videoPath = 'https://docs.google.com/presentation/d/1PhgUvstQkO5BZnhnWVLVb8qSPsIRLMTb/edit?usp=drive_link&ouid=105801039597573388513&rtpof=true&sd=true';
    console.log('Opening Alicona demo:', videoPath);
    window.open(videoPath, '_blank', 'noopener,noreferrer');
  }


  // ============================================
  // CONTACT FORM
  // ============================================

  const submitBtn = document.getElementById('submitBtn');
  const userMessage = document.getElementById('userMessage');

  if (submitBtn) {
    submitBtn.addEventListener('click', sendEmail);
  }

  function sendEmail() {
    const subject = "Contact Form Submission";
    const message = userMessage.value;

    if (!message.trim()) {
      alert("Please enter a message.");
      return;
    }

    const body = message;
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    userMessage.value = '';
  }

  // Auto-resize textarea
  if (userMessage) {
    userMessage.addEventListener('input', () => {
      userMessage.style.height = 'auto';
      userMessage.style.height = userMessage.scrollHeight + 'px';
    });
  }

  // ============================================
  // TYPED.JS - ANIMATED TEXT
  // ============================================

  const typed = new Typed('.multiple-text', {
    strings: personalInfo.roles,
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1500,
    loop: true,
  });

  // ============================================
  // SMOOTH SCROLL ENHANCEMENT
  // ============================================

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
        const headerHeight = header.offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ============================================
  // PERFORMANCE OPTIMIZATION
  // ============================================

  // Lazy load images
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src;
    });
  } else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
  }

  // Add animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);



}




