const sliderContainer = document.getElementById('sliderContainer');
const dots = document.querySelectorAll('.nav-dot');

function jumpToPage(slideIndex) {
  // Use CSS translate transformations for ultra hardware accelerated hardware performance smoothness
  sliderContainer.style.transform = `translateX(-${slideIndex * 100}vw)`;
  sliderContainer.style.transition = 'transform 0.9s cubic-bezier(0.25, 1, 0.5, 1)';
  
  // Track and refresh indicator activation sequence classes loops
  dots.forEach((dot) => {
    const dataIdx = parseInt(dot.getAttribute('data-index'));
    if (dataIdx === slideIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// System Function Architecture for handling the Premium Dark/Light theme variable swap
function toggleThemeSystem() {
  const currentTheme = document.body.getAttribute('data-theme');
  
  if (currentTheme === 'dark') {
    document.body.removeAttribute('data-theme');
  } else {
    document.body.setAttribute('data-theme', 'dark');
  }
}
