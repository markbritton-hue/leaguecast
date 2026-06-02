// Initialize theme on page load
function initTheme() {
  const stored = localStorage.getItem('theme') || 'dark';
  applyTheme(stored);
}

function applyTheme(theme) {
  const html = document.documentElement;
  if (theme === 'dark') {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
  localStorage.setItem('theme', theme);
  updateToggleButton();
}

function toggleTheme() {
  const current = localStorage.getItem('theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
}

function updateToggleButton() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const theme = localStorage.getItem('theme') || 'dark';
  btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTheme);
} else {
  initTheme();
}
