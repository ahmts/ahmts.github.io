const links = document.querySelectorAll('.links');

// Her bir link için işlem yap
links.forEach(link => {
    // SVG elementini oluştur
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "13.5");
    svg.setAttribute("height", "13.5");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.classList.add("iconExternalLink_nPIU");

    // SVG içeriği
    svg.innerHTML = '<path fill="orange" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>';

    // SVG'yi linkin sonuna ekle
    link.appendChild(svg);
});

document.addEventListener('DOMContentLoaded', async () => {
  document.documentElement.style.backgroundColor = '#2c2f3f';  
  const response = await fetch('../partials/navbar.html');
  const navbarHtml = await response.text();
  document.getElementById('navbar').innerHTML = navbarHtml;
/*
  const headerResponse = await fetch('../partials/header.html');
  const headerHtml = await headerResponse.text();
  document.head.innerHTML = headerHtml;
*/


  // Mobile menu toggle script
  const menuToggle = document.getElementById('mobile-menu');
  const navbar = document.querySelector('.navbar');
  menuToggle.addEventListener('click', () => {
      navbar.classList.toggle('active');
  });

  // Close warning message script
  var closeButton = document.getElementById("close-warning");
  var warningMessage = document.getElementById("warning-message");

  // Check if the user has chosen to ignore the warning
  const isWarningIgnored = localStorage.getItem('ignoreWarning');

  if (isWarningIgnored) {
      warningMessage.style.display = "none";
  }

  closeButton.addEventListener("click", function() {
      warningMessage.style.display = "none";
      // Save user's choice in local storage
      localStorage.setItem('ignoreWarning', true);
      // Reload the page when the warning is ignored
      window.location.reload();
  });

  function checkScreenSize() {
      if (window.innerWidth <= 870 && window.innerHeight <= 870 && !isWarningIgnored) {
          warningMessage.style.display = "block";
      } else {
          warningMessage.style.display = "none";
      }
  }

  window.addEventListener("resize", checkScreenSize);
  checkScreenSize(); // Check screen size initially

  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', function (event) {
      if (link.hostname === window.location.hostname && link.pathname !== window.location.pathname) {
        event.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(() => {
          window.location.href = link.href;
        }, 180);
      }
    });
  });
});
