/* =========================================
   JOB PORTAL - MAIN JAVASCRIPT
   ========================================= */

// ---- DATA ----
const jobsData = [
  { id: 1, title: "Senior Software Engineer", company: "TechCorp Inc.", logo: "TC", location: "New York, USA", type: "Full Time", salary: "$120 - $180K", deadline: "30 Jun, 2025", category: "Technology", featured: true, remote: false, description: "We are looking for an experienced Senior Software Engineer to join our growing team. You will work on cutting-edge technology and collaborate with a talented team of engineers.", requirements: ["5+ years experience in React/Node.js", "Strong problem solving skills", "Experience with cloud platforms (AWS/GCP)", "Bachelor's degree in Computer Science or related field"], color: "#0d6efd" },
  { id: 2, title: "Marketing Manager", company: "BrandMakers", logo: "BM", location: "Los Angeles, USA", type: "Full Time", salary: "$80 - $110K", deadline: "15 Jul, 2025", category: "Marketing", featured: true, remote: false, description: "Lead our marketing team and develop comprehensive marketing strategies to drive brand awareness and customer acquisition.", requirements: ["7+ years in marketing", "Digital marketing expertise", "Team leadership experience", "MBA preferred"], color: "#8b5cf6" },
  { id: 3, title: "Product Designer", company: "DesignHub", logo: "DH", location: "Remote", type: "Remote", salary: "$90 - $130K", deadline: "20 Jul, 2025", category: "Design", featured: false, remote: true, description: "Create beautiful, user-centered product designs for our suite of applications. You'll be working closely with product and engineering teams.", requirements: ["4+ years UI/UX experience", "Proficiency in Figma", "Strong portfolio required", "Understanding of design systems"], color: "#ec4899" },
  { id: 4, title: "Creative Director", company: "Artify Studio", logo: "AS", location: "Chicago, USA", type: "Full Time", salary: "$110 - $150K", deadline: "01 Aug, 2025", category: "Design", featured: true, remote: false, description: "Lead creative direction for our agency and inspire a team of designers to produce world-class creative work.", requirements: ["10+ years creative experience", "Agency background preferred", "Strong leadership skills", "Portfolio of award-winning work"], color: "#f59e0b" },
  { id: 5, title: "WordPress Developer", company: "WebSolutions", logo: "WS", location: "Austin, USA", type: "Part Time", salary: "$50 - $70K", deadline: "10 Aug, 2025", category: "Technology", featured: false, remote: false, description: "Build and maintain WordPress websites for our diverse clientele. You'll handle everything from theme customization to plugin development.", requirements: ["3+ years WordPress experience", "PHP and MySQL proficiency", "Knowledge of Elementor/Divi", "Frontend skills (HTML/CSS/JS)"], color: "#22c55e" },
  { id: 6, title: "Data Analyst", company: "DataVision", logo: "DV", location: "Remote", type: "Remote", salary: "$85 - $115K", deadline: "25 Jul, 2025", category: "Technology", featured: false, remote: true, description: "Analyze complex datasets and provide actionable business insights to drive decision-making across the organization.", requirements: ["3+ years data analysis experience", "Proficiency in Python/R", "SQL expertise", "Tableau/Power BI skills"], color: "#06b6d4" },
  { id: 7, title: "HR Specialist", company: "PeopleFirst", logo: "PF", location: "Seattle, USA", type: "Full Time", salary: "$60 - $85K", deadline: "05 Aug, 2025", category: "Human Resource", featured: false, remote: false, description: "Join our HR team and help build a positive workplace culture. You will manage recruitment, onboarding, and employee relations.", requirements: ["3+ years HR experience", "SHRM certification preferred", "Excellent communication skills", "Experience with HRIS systems"], color: "#f97316" },
  { id: 8, title: "Content Writer", company: "ContentCraft", logo: "CC", location: "Remote", type: "Part Time", salary: "$35 - $55K", deadline: "18 Jul, 2025", category: "Marketing", featured: false, remote: true, description: "Create engaging content for blogs, social media, and marketing campaigns that resonates with our target audience.", requirements: ["2+ years writing experience", "SEO knowledge", "Strong research skills", "Portfolio of published work"], color: "#a855f7" },
  { id: 9, title: "Project Manager", company: "AgileWorks", logo: "AW", location: "Boston, USA", type: "Full Time", salary: "$95 - $130K", deadline: "12 Aug, 2025", category: "Project Management", featured: false, remote: false, description: "Lead cross-functional project teams and ensure on-time, on-budget delivery of key initiatives using agile methodologies.", requirements: ["PMP or Scrum certification", "5+ years PM experience", "Strong stakeholder management", "Experience with Jira/Confluence"], color: "#10b981" },
  { id: 10, title: "Sales Executive", company: "SalesForce Pro", logo: "SP", location: "Miami, USA", type: "Full Time", salary: "$70 - $100K + Commission", deadline: "30 Jul, 2025", category: "Sales", featured: true, remote: false, description: "Drive revenue growth by identifying and closing new business opportunities in the mid-market segment.", requirements: ["3+ years B2B sales experience", "Proven track record of hitting targets", "CRM proficiency", "Excellent negotiation skills"], color: "#ef4444" }
];

const categoriesData = [
  { icon: "fas fa-bullhorn", name: "Marketing", count: 45, bg: "#fef3c7", color: "#d97706" },
  { icon: "fas fa-headset", name: "Customer Service", count: 32, bg: "#dbeafe", color: "#2563eb" },
  { icon: "fas fa-users", name: "Human Resource", count: 28, bg: "#dcfce7", color: "#16a34a" },
  { icon: "fas fa-tasks", name: "Project Management", count: 19, bg: "#fce7f3", color: "#9d174d" },
  { icon: "fas fa-chart-line", name: "Business Development", count: 37, bg: "#ede9fe", color: "#6d28d9" },
  { icon: "fas fa-comments", name: "Sales & Communication", count: 52, bg: "#fee2e2", color: "#b91c1c" },
  { icon: "fas fa-graduation-cap", name: "Teaching & Education", count: 23, bg: "#e0f2fe", color: "#0369a1" },
  { icon: "fas fa-paint-brush", name: "Design & Creative", count: 41, bg: "#fdf2f8", color: "#9d174d" }
];

// ---- PRELOADER ----
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.style.opacity = '0';
      setTimeout(() => preloader.remove(), 500);
    }, 600);
  }
});

// ---- BACK TO TOP ----
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (backToTop) {
    if (window.scrollY > 400) {
      backToTop.style.display = 'flex';
    } else {
      backToTop.style.display = 'none';
    }
  }
});
if (backToTop) backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ---- NAVBAR SCROLL ----
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)';
    } else {
      navbar.classList.remove('scrolled');
      navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.07)';
    }
  }
});

// ---- COUNTER ANIMATION ----
function animateCounters() {
  document.querySelectorAll('.counter-num[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current).toLocaleString() + suffix;
    }, 20);
  });
}

// Intersection Observer for counters
const counterSection = document.querySelector('.counter-section');
if (counterSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { animateCounters(); observer.disconnect(); }
    });
  }, { threshold: 0.3 });
  observer.observe(counterSection);
}

// ---- RENDER CATEGORIES ----
function renderCategories() {
  const grid = document.getElementById('categoriesGrid');
  if (!grid) return;
  grid.innerHTML = categoriesData.map(cat => `
    <div class="col-6 col-md-3 mb-4 fade-up">
      <div class="category-card" onclick="filterByCategory('${cat.name}')">
        <div class="cat-icon" style="background:${cat.bg}; color:${cat.color}">
          <i class="${cat.icon}"></i>
        </div>
        <h5>${cat.name}</h5>
        <span>${cat.count} Vacancies</span>
      </div>
    </div>
  `).join('');
}

function filterByCategory(cat) {
  window.location.href = `jobs.html?category=${encodeURIComponent(cat)}`;
}

// ---- RENDER HOME JOB LISTINGS ----
function renderHomeJobs() {
  const containers = {
    featured: document.getElementById('featuredJobs'),
    fulltime: document.getElementById('fulltimeJobs'),
    parttime: document.getElementById('parttimeJobs')
  };
  if (!containers.featured) return;

  const featured = jobsData.filter(j => j.featured);
  const fulltime = jobsData.filter(j => j.type === 'Full Time');
  const parttime = jobsData.filter(j => j.type === 'Part Time' || j.type === 'Remote');

  [
    { data: featured, el: containers.featured },
    { data: fulltime, el: containers.fulltime },
    { data: parttime, el: containers.parttime }
  ].forEach(({ data, el }) => {
    el.innerHTML = data.slice(0, 5).map(job => renderJobCard(job)).join('');
  });
}

function renderJobCard(job) {
  const typeClass = job.type === 'Full Time' ? 'badge-fulltime' :
    job.type === 'Part Time' ? 'badge-parttime' : 'badge-remote';
  return `
    <div class="job-card fade-up" onclick="window.location.href='apply.html?id=${job.id}'">
      <div class="company-logo-placeholder" style="background:${job.color}20; color:${job.color}">${job.logo}</div>
      <div class="job-info">
        <h5>${job.title}</h5>
        <div class="job-meta">
          <span><i class="fas fa-building"></i>${job.company}</span>
          <span><i class="fas fa-map-marker-alt"></i>${job.location}</span>
          <span class="d-none d-md-inline"><i class="fas fa-folder"></i>${job.category}</span>
        </div>
        <div class="mt-2">
          <span class="badge-type ${typeClass}">${job.type}</span>
          ${job.featured ? '<span class="badge-type badge-featured">Featured</span>' : ''}
        </div>
      </div>
      <div class="job-actions">
        <span class="salary">${job.salary}</span>
        <button class="btn-apply" onclick="event.stopPropagation(); applyJob(${job.id})">Apply Now</button>
        <p class="deadline"><i class="far fa-calendar-alt me-1"></i>Deadline: ${job.deadline}</p>
      </div>
    </div>
  `;
}

function applyJob(id) {
  window.location.href = `apply.html?id=${id}`;
}

// ---- RENDER FULL JOBS LIST ----
let filteredJobs = [...jobsData];
let currentPage = 1;
const jobsPerPage = 6;

function renderJobsList() {
  const container = document.getElementById('jobsListContainer');
  if (!container) return;

  const start = (currentPage - 1) * jobsPerPage;
  const paged = filteredJobs.slice(start, start + jobsPerPage);
  const count = document.getElementById('jobsCount');
  if (count) count.innerHTML = `Showing <strong>${start + 1}-${Math.min(start + jobsPerPage, filteredJobs.length)}</strong> of <strong>${filteredJobs.length}</strong> jobs`;

  container.innerHTML = paged.length ? paged.map(job => renderJobCard(job)).join('') :
    '<div class="text-center py-5"><i class="fas fa-search fa-3x text-muted mb-3"></i><h5 class="text-muted">No jobs found</h5><p class="text-muted">Try adjusting your search filters</p></div>';

  renderPagination();
}

function renderPagination() {
  const pg = document.getElementById('pagination');
  if (!pg) return;
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  if (totalPages <= 1) { pg.innerHTML = ''; return; }

  let html = `<nav><ul class="pagination justify-content-center">`;
  html += `<li class="page-item ${currentPage === 1 ? 'disabled' : ''}"><a class="page-link" href="#" onclick="changePage(${currentPage - 1})"><i class="fas fa-chevron-left"></i></a></li>`;
  for (let i = 1; i <= totalPages; i++) {
    html += `<li class="page-item ${i === currentPage ? 'active' : ''}"><a class="page-link" href="#" onclick="changePage(${i})">${i}</a></li>`;
  }
  html += `<li class="page-item ${currentPage === totalPages ? 'disabled' : ''}"><a class="page-link" href="#" onclick="changePage(${currentPage + 1})"><i class="fas fa-chevron-right"></i></a></li>`;
  html += `</ul></nav>`;
  pg.innerHTML = html;
}

function changePage(p) {
  const total = Math.ceil(filteredJobs.length / jobsPerPage);
  if (p < 1 || p > total) return;
  currentPage = p;
  renderJobsList();
  document.getElementById('jobsListContainer')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  return false;
}

// ---- SEARCH & FILTERS ----
function applyFilters() {
  const keyword = document.getElementById('searchKeyword')?.value.toLowerCase() || '';
  const location = document.getElementById('filterLocation')?.value || '';
  const types = [...document.querySelectorAll('.filter-type:checked')].map(el => el.value);
  const categories = [...document.querySelectorAll('.filter-category:checked')].map(el => el.value);

  filteredJobs = jobsData.filter(job => {
    const matchKeyword = !keyword || job.title.toLowerCase().includes(keyword) || job.company.toLowerCase().includes(keyword);
    const matchLocation = !location || job.location.toLowerCase().includes(location.toLowerCase());
    const matchType = !types.length || types.includes(job.type);
    const matchCat = !categories.length || categories.includes(job.category);
    return matchKeyword && matchLocation && matchType && matchCat;
  });

  currentPage = 1;
  renderJobsList();
}

function clearFilters() {
  document.querySelectorAll('.filter-type, .filter-category').forEach(el => el.checked = false);
  const kw = document.getElementById('searchKeyword');
  const loc = document.getElementById('filterLocation');
  if (kw) kw.value = '';
  if (loc) loc.value = '';
  filteredJobs = [...jobsData];
  currentPage = 1;
  renderJobsList();
}

// ---- SEARCH BOX (homepage & jobs page) ----
function doSearch() {
  const kw = document.getElementById('heroKeyword')?.value || '';
  const cat = document.getElementById('heroCategory')?.value || '';
  const loc = document.getElementById('heroLocation')?.value || '';
  const params = new URLSearchParams();
  if (kw) params.set('keyword', kw);
  if (cat) params.set('category', cat);
  if (loc) params.set('location', loc);
  window.location.href = `jobs.html?${params.toString()}`;
}

// Pre-fill from URL params on jobs page
function loadFromParams() {
  const params = new URLSearchParams(window.location.search);
  const kw = document.getElementById('searchKeyword');
  const loc = document.getElementById('filterLocation');
  const cat = params.get('category');

  if (kw && params.get('keyword')) kw.value = params.get('keyword');
  if (loc && params.get('location')) loc.value = params.get('location');
  if (cat) {
    const cb = document.querySelector(`.filter-category[value="${cat}"]`);
    if (cb) cb.checked = true;
  }
  applyFilters();
}

// ---- APPLY PAGE ----
function loadApplyPage() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const job = jobsData.find(j => j.id === id) || jobsData[0];
  if (!job) return;

  document.querySelectorAll('.job-title-display').forEach(el => el.textContent = job.title);
  document.querySelectorAll('.company-name-display').forEach(el => el.textContent = job.company);
  document.querySelectorAll('.job-location-display').forEach(el => el.textContent = job.location);
  document.querySelectorAll('.job-type-display').forEach(el => el.textContent = job.type);
  document.querySelectorAll('.job-salary-display').forEach(el => el.textContent = job.salary);
  document.querySelectorAll('.job-deadline-display').forEach(el => el.textContent = job.deadline);
  document.querySelectorAll('.job-description-display').forEach(el => el.textContent = job.description);
  document.querySelectorAll('.job-logo-display').forEach(el => {
    el.textContent = job.logo;
    el.style.background = job.color + '20';
    el.style.color = job.color;
  });

  const reqList = document.getElementById('requirementsList');
  if (reqList) reqList.innerHTML = job.requirements.map(r => `<li class="mb-2"><i class="fas fa-check-circle text-success me-2"></i>${r}</li>`).join('');
}

// Multi-step form
let currentStep = 1;
const totalSteps = 3;

function nextStep() {
  if (currentStep < totalSteps) {
    document.getElementById(`step${currentStep}Content`).classList.add('d-none');
    currentStep++;
    document.getElementById(`step${currentStep}Content`).classList.remove('d-none');
    updateSteps();
  }
}

function prevStep() {
  if (currentStep > 1) {
    document.getElementById(`step${currentStep}Content`).classList.add('d-none');
    currentStep--;
    document.getElementById(`step${currentStep}Content`).classList.remove('d-none');
    updateSteps();
  }
}

function updateSteps() {
  document.querySelectorAll('.step-item').forEach((el, idx) => {
    el.classList.remove('active', 'done');
    if (idx + 1 === currentStep) el.classList.add('active');
    if (idx + 1 < currentStep) el.classList.add('done');
  });
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const submitBtn = document.getElementById('submitBtn');
  if (prevBtn) prevBtn.style.display = currentStep === 1 ? 'none' : 'inline-block';
  if (nextBtn) nextBtn.style.display = currentStep === totalSteps ? 'none' : 'inline-block';
  if (submitBtn) submitBtn.style.display = currentStep === totalSteps ? 'block' : 'none';
}

function submitApplication() {
  const toast = new bootstrap.Toast(document.getElementById('successToast'));
  toast.show();
  setTimeout(() => window.location.href = 'jobs.html', 3500);
}

// File upload drag & drop
function initUpload() {
  const area = document.getElementById('uploadArea');
  const input = document.getElementById('resumeInput');
  if (!area || !input) return;

  area.addEventListener('click', () => input.click());
  area.addEventListener('dragover', e => { e.preventDefault(); area.style.borderColor = 'var(--primary)'; area.style.background = 'rgba(13,110,253,0.04)'; });
  area.addEventListener('dragleave', () => { area.style.borderColor = 'var(--border)'; area.style.background = ''; });
  area.addEventListener('drop', e => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) updateUploadUI(file);
  });
  input.addEventListener('change', () => { if (input.files[0]) updateUploadUI(input.files[0]); });
}

function updateUploadUI(file) {
  const area = document.getElementById('uploadArea');
  area.innerHTML = `<i class="fas fa-file-pdf fa-3x" style="color:var(--danger)"></i><p class="mt-2 mb-0 fw-bold">${file.name}</p><p class="text-muted small">${(file.size / 1024).toFixed(1)} KB</p><span class="text-success"><i class="fas fa-check-circle"></i> File ready</span>`;
}

// ---- EMPLOYER DASHBOARD ----
const applicationsData = [
  { name: "Alex Johnson", role: "Senior Software Engineer", time: "2h ago", status: "pending", avatar: "AJ" },
  { name: "Sarah Chen", role: "Marketing Manager", time: "5h ago", status: "reviewed", avatar: "SC" },
  { name: "Mike Davis", role: "Product Designer", time: "1d ago", status: "hired", avatar: "MD" },
  { name: "Emily Wang", role: "Creative Director", time: "2d ago", status: "reviewed", avatar: "EW" },
  { name: "Tom Brown", role: "Data Analyst", time: "3d ago", status: "rejected", avatar: "TB" }
];

const postedJobsData = [
  { title: "Senior Software Engineer", apps: 24, status: "Active", date: "01 Jun 2025" },
  { title: "Marketing Manager", apps: 15, status: "Active", date: "05 Jun 2025" },
  { title: "Product Designer", apps: 31, status: "Closed", date: "10 May 2025" },
  { title: "Data Analyst", apps: 8, status: "Active", date: "12 Jun 2025" }
];

function renderDashboard() {
  const appList = document.getElementById('applicationsList');
  const postedList = document.getElementById('postedJobsList');
  if (!appList) return;

  appList.innerHTML = applicationsData.map(app => {
    const statusMap = { pending: 'status-pending', reviewed: 'status-reviewed', hired: 'status-hired', rejected: 'status-rejected' };
    return `
      <div class="application-item">
        <div class="applicant-avatar">${app.avatar}</div>
        <div class="info">
          <h6>${app.name}</h6>
          <span>${app.role} &bull; ${app.time}</span>
        </div>
        <span class="status-badge ${statusMap[app.status]}">${app.status.charAt(0).toUpperCase() + app.status.slice(1)}</span>
      </div>
    `;
  }).join('');

  if (postedList) {
    postedList.innerHTML = postedJobsData.map(j => `
      <div class="posted-job-item">
        <div class="info">
          <h6>${j.title}</h6>
          <span>${j.apps} applicants &bull; Posted ${j.date}</span>
        </div>
        <span class="status-badge ${j.status === 'Active' ? 'status-reviewed' : 'status-rejected'}">${j.status}</span>
        <div class="actions">
          <button class="btn-sm-action" title="Edit"><i class="fas fa-edit"></i></button>
          <button class="btn-sm-action danger" title="Delete" onclick="deleteJob(this)"><i class="fas fa-trash"></i></button>
        </div>
      </div>
    `).join('');
  }

  // Simple bar chart
  renderBarChart();
}

function deleteJob(btn) {
  btn.closest('.posted-job-item').remove();
  showToast('Job posting deleted successfully', 'danger');
}

function renderBarChart() {
  const canvas = document.getElementById('applicationsChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const data = [12, 19, 15, 28, 22, 35];
  const maxVal = Math.max(...data);
  const W = canvas.offsetWidth || 480;
  const H = 180;
  canvas.width = W; canvas.height = H;

  ctx.clearRect(0, 0, W, H);
  const barW = (W / months.length) * 0.5;
  const gap = (W / months.length);

  data.forEach((v, i) => {
    const h = (v / maxVal) * (H - 40);
    const x = gap * i + gap * 0.25;
    const y = H - h - 25;
    const grad = ctx.createLinearGradient(0, y, 0, H - 25);
    grad.addColorStop(0, '#0d6efd');
    grad.addColorStop(1, 'rgba(13,110,253,0.3)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.roundRect(x, y, barW, h, [4, 4, 0, 0]);
    ctx.fill();

    ctx.fillStyle = '#64748b';
    ctx.font = '12px Plus Jakarta Sans';
    ctx.textAlign = 'center';
    ctx.fillText(months[i], x + barW / 2, H - 5);
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 12px Plus Jakarta Sans';
    ctx.fillText(v, x + barW / 2, y - 6);
  });
}

// ---- POST JOB FORM ----
function submitJobPost(e) {
  if (e) e.preventDefault();
  const modal = bootstrap.Modal.getInstance(document.getElementById('postJobModal'));
  if (modal) modal.hide();
  showToast('Job posted successfully!', 'success');
  setTimeout(() => {
    const list = document.getElementById('postedJobsList');
    if (!list) return;
    const title = document.getElementById('newJobTitle')?.value || 'New Job';
    const newItem = document.createElement('div');
    newItem.className = 'posted-job-item fade-up';
    newItem.innerHTML = `
      <div class="info"><h6>${title}</h6><span>0 applicants &bull; Posted just now</span></div>
      <span class="status-badge status-reviewed">Active</span>
      <div class="actions">
        <button class="btn-sm-action"><i class="fas fa-edit"></i></button>
        <button class="btn-sm-action danger" onclick="deleteJob(this)"><i class="fas fa-trash"></i></button>
      </div>`;
    list.prepend(newItem);
  }, 500);
}

// ---- TOAST HELPER ----
function showToast(message, type = 'success') {
  const toastEl = document.getElementById('globalToast');
  if (!toastEl) return;
  const icon = type === 'success' ? 'fa-check-circle text-success' : 'fa-exclamation-circle text-danger';
  toastEl.querySelector('.toast-body').innerHTML = `<i class="fas ${icon} me-2"></i>${message}`;
  new bootstrap.Toast(toastEl, { delay: 3000 }).show();
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderHomeJobs();
  renderJobsList();
  loadFromParams();
  loadApplyPage();
  initUpload();
  renderDashboard();
  updateSteps();

  // Live search
  document.getElementById('searchKeyword')?.addEventListener('input', applyFilters);
  document.querySelectorAll('.filter-type, .filter-category').forEach(el => el.addEventListener('change', applyFilters));

  // Enter key on hero search
  document.getElementById('heroKeyword')?.addEventListener('keypress', e => { if (e.key === 'Enter') doSearch(); });
});