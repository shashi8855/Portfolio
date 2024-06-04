function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function onLinkedInClicked() {
  window.open('https://www.linkedin.com/in/shashi-kumar-nagunuri-06a795227/', '_blank');
}

function redirectProject(projectName) {
  if (projectName === 'Reddycpa') window.open('https://reddycpa.com/', '_blank')
  if (projectName === 'VoiceDental') window.open('https://voice.dental/', '_blank')
  if (projectName === 'Astro') window.open('http://astro.neuralfoundary.co.uk/', '_blank')
  if (projectName === 'adminServiceAPP') window.open('https://serviceapp.tejaswigroup.com/login', '_blank')
  if (projectName === 'userServiceAPP') window.open('https://userapp.tejaswigroup.com/', '_blank')
}