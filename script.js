// Sidebar Toggle via Hamburger
const sidebar = document.getElementById('sidebar');
const mainWrapper = document.getElementById('mainWrapper');
const hamburgerBtn = document.getElementById('hamburgerBtn');
let sidebarVisible = window.innerWidth >= 912;

function updateSidebar() {
  if (sidebarVisible) {
    sidebar.classList.remove('hidden');
    if (window.innerWidth < 912) sidebar.classList.add('show');
    mainWrapper.classList.remove('expanded');
    hamburgerBtn.classList.add('open');
  } else {
    sidebar.classList.add('hidden');
    sidebar.classList.remove('show');
    mainWrapper.classList.add('expanded');
    hamburgerBtn.classList.remove('open');
  }
}

hamburgerBtn.addEventListener('click', () => {
  sidebarVisible = !sidebarVisible;
  updateSidebar();
});

updateSidebar();


// Back to Top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 400);
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Font Size Picker
const fontIncrease = document.getElementById('fontIncrease');
const fontDecrease = document.getElementById('fontDecrease');
const minFont = 14;
const maxFont = 24;
const defaultFont = 18;

let currentFontSize = parseInt(localStorage.getItem('peaFontSize')) || defaultFont;
document.documentElement.style.fontSize = currentFontSize + 'px';

fontIncrease.addEventListener('click', () => {
  if (currentFontSize < maxFont) {
    currentFontSize += 2;
    document.documentElement.style.fontSize = currentFontSize + 'px';
    localStorage.setItem('peaFontSize', currentFontSize);
  }
});

fontDecrease.addEventListener('click', () => {
  if (currentFontSize > minFont) {
    currentFontSize -= 2;
    document.documentElement.style.fontSize = currentFontSize + 'px';
    localStorage.setItem('peaFontSize', currentFontSize);
  }
});
