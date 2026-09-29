/**
 * Portfolio Interactive Application Script
 * Developer: Pratik Yadav
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTFOLIO_DATA;

  // --- 1. Theme Management ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateThemeIcon('dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    updateThemeIcon('light');
  }

  themeToggleBtn?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    if (theme === 'dark') {
      themeToggleBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      `;
      themeToggleBtn.setAttribute('aria-label', 'Switch to light paper mode');
    } else {
      themeToggleBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      `;
      themeToggleBtn.setAttribute('aria-label', 'Switch to dark editorial mode');
    }
  }

  // --- 2. Mobile Menu Toggle ---
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navLinksContainer = document.querySelector('.nav-links');

  mobileBtn?.addEventListener('click', () => {
    const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
    mobileBtn.setAttribute('aria-expanded', !isExpanded);
    if (navLinksContainer) {
      navLinksContainer.style.display = isExpanded ? 'none' : 'flex';
      navLinksContainer.style.flexDirection = 'column';
      navLinksContainer.style.position = 'absolute';
      navLinksContainer.style.top = '100%';
      navLinksContainer.style.left = '0';
      navLinksContainer.style.width = '100%';
      navLinksContainer.style.backgroundColor = 'var(--bg-surface)';
      navLinksContainer.style.padding = '1.5rem 2rem';
      navLinksContainer.style.borderBottom = '1px solid var(--border-color)';
    }
  });

  // --- 3. Case Study Modal System ---
  const modalBackdrop = document.getElementById('case-study-modal');
  const modalContainer = modalBackdrop?.querySelector('.modal-container');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function openCaseStudy(projectId) {
    const project = data.projects.find(p => p.id === projectId);
    if (!project || !modalBackdrop) return;

    const cs = project.caseStudy;
    const modalContent = `
      <div class="modal-header">
        <span class="project-badge">${project.category} · ${project.badge}</span>
        <h3 class="modal-title">${project.title}</h3>
        <p class="mono" style="margin-top:0.4rem; color:var(--text-muted);">${project.subtitle}</p>
      </div>

      <div class="modal-body-section">
        <h4>// 01 Overview</h4>
        <p>${cs.overview}</p>
      </div>

      <div class="modal-body-section">
        <h4>// 02 Problem Statement</h4>
        <p>${cs.problem}</p>
      </div>

      <div class="modal-body-section">
        <h4>// 03 Solution & Core Features</h4>
        <p style="margin-bottom:0.75rem;">${cs.solution}</p>
        <ul>
          ${cs.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>

      <div class="modal-body-section">
        <h4>// 04 Architecture & Technology</h4>
        <p>${cs.architecture}</p>
        <div class="project-tech-tags" style="margin-top:1rem;">
          ${project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>

      <div class="modal-body-section">
        <h4>// 05 Challenges & Key Learnings</h4>
        <p><strong>Challenge:</strong> ${cs.challenges}</p>
        <p style="margin-top:0.5rem;"><strong>Learned:</strong> ${cs.learned}</p>
      </div>

      <div class="project-actions" style="margin-top:2rem; border-top:1px solid var(--border-color); padding-top:1.5rem;">
        <a href="${project.links.github}" target="_blank" rel="noopener" class="btn-cta">
          VIEW GITHUB REPOSITORY →
        </a>
        ${project.links.demo !== '#' ? `
          <a href="${project.links.demo}" target="_blank" rel="noopener" class="btn-outline">
            LIVE DEMO →
          </a>
        ` : ''}
      </div>
    `;

    const contentBox = document.getElementById('modal-dynamic-content');
    if (contentBox) contentBox.innerHTML = modalContent;

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  modalCloseBtn?.addEventListener('click', closeModal);
  modalBackdrop?.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Attach modal trigger event listeners
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-case-study]');
    if (trigger) {
      e.preventDefault();
      const projectId = trigger.getAttribute('data-case-study');
      openCaseStudy(projectId);
    }
  });

  // --- 4. Live GitHub Repositories Fetcher ---
  async function fetchGitHubRepos() {
    const container = document.getElementById('github-repos-container');
    if (!container) return;

    try {
      const res = await fetch(`https://api.github.com/users/Pratik-y-SDE/repos?sort=updated&per_page=6`);
      if (!res.ok) throw new Error('GitHub API response not ok');
      const repos = await res.json();
      
      if (!repos || repos.length === 0) {
        renderFallbackRepos(container);
        return;
      }

      container.innerHTML = repos.map(repo => `
        <div class="repo-card">
          <div>
            <h4 class="repo-name">${repo.name}</h4>
            <p class="repo-desc">${repo.description || 'Public repository focused on web development & software tools.'}</p>
          </div>
          <div class="repo-footer">
            <span>${repo.language || 'Code'}</span>
            <span>★ ${repo.stargazers_count}</span>
            <a href="${repo.html_url}" target="_blank" rel="noopener" style="color:var(--vermilion); font-weight:700;">VIEW →</a>
          </div>
        </div>
      `).join('');
    } catch (err) {
      console.warn('GitHub API fetch fallback:', err);
      renderFallbackRepos(container);
    }
  }

  function renderFallbackRepos(container) {
    const fallbackRepos = [
      { name: 'Pratik-y-SDE.github.io', desc: 'Personal portfolio website with Japanese editorial design & manga artwork.', lang: 'HTML / CSS / JS', stars: 1, url: 'https://github.com/Pratik-y-SDE/Pratik-y-SDE.github.io' },
      { name: 'ExamLohe', desc: 'CBSE board exam preparation workspace built for STEMINATE Hacks 2026.', lang: 'React · FastAPI', stars: 3, url: 'https://github.com/Pratik-y-SDE' },
      { name: 'STORMTRACKER', desc: 'Cyclone detection and spatial tracking platform for GDG Prayagraj hackathon.', lang: 'Python · OpenCV', stars: 2, url: 'https://github.com/Pratik-y-SDE' },
      { name: 'OpenCluely', desc: 'Added Kotlin programming language support (PR #59).', lang: 'Kotlin', stars: 12, url: 'https://github.com/TechyCSR/OpenCluely' }
    ];

    container.innerHTML = fallbackRepos.map(repo => `
      <div class="repo-card">
        <div>
          <h4 class="repo-name">${repo.name}</h4>
          <p class="repo-desc">${repo.desc}</p>
        </div>
        <div class="repo-footer">
          <span>${repo.lang}</span>
          <span>★ ${repo.stars}</span>
          <a href="${repo.url}" target="_blank" rel="noopener" style="color:var(--vermilion); font-weight:700;">VIEW →</a>
        </div>
      </div>
    `).join('');
  }

  fetchGitHubRepos();

  // --- 5. Interactive Contact Form ---
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name')?.value.trim();
    const email = document.getElementById('form-email')?.value.trim();
    const message = document.getElementById('form-message')?.value.trim();

    if (!name || !email || !message) {
      showFormStatus('Please fill in all required fields.', 'error');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showFormStatus('Please enter a valid email address.', 'error');
      return;
    }

    // Submit Simulation
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'SENDING MESSAGE...';
    }

    setTimeout(() => {
      showFormStatus('✓ Thank you! Your message has been sent successfully. (Note: Demo form — connect an email service like Web3Forms or Formspree for live backend delivery).', 'success');
      contactForm.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'SEND MESSAGE →';
      }
    }, 800);
  });

  function showFormStatus(msg, type) {
    if (!formStatus) return;
    formStatus.textContent = msg;
    formStatus.className = `form-status ${type}`;
    formStatus.style.display = 'block';
  }

  // --- 6. Active Link Scrollspy ---
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(sec => {
      const sectionHeight = sec.offsetHeight;
      const sectionTop = sec.offsetTop - 120;
      const sectionId = sec.getAttribute('id');
      const navAnchor = document.querySelector(`.nav-link[href*="${sectionId}"]`);
      if (navAnchor) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navAnchor.classList.add('active');
        } else {
          navAnchor.classList.remove('active');
        }
      }
    });
  });
});
