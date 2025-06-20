// ---------------------------------------------------------- index.html-------------------------
fetch('navbar.html')
.then(res => res.text())
.then(data=>{
  document.getElementById('navbar-placeholder').innerHTML = data
})

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
  }
// slides 
document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slide');
  const nextButtons = document.querySelectorAll('.btn-fill');
  const backButtons = document.querySelectorAll('.btn');

  let currentSlide = 0;

  // Show slide using Promise
  function showSlide(index) {
    return new Promise((resolve) => {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
      });
      resolve(); 
    });
  }

  showSlide(currentSlide);

  // Next button 
  nextButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (currentSlide < slides.length - 1) {
        currentSlide++;
        showSlide(currentSlide).then(() => {
          console.log(`Slide ${currentSlide + 1} shown`);
        });
      } else {
        window.location.href = "services.html";
      }
    });
  });

  // Back button 
  backButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide).then(() => {
          console.log(`Back to slide ${currentSlide + 1}`);
        });
      }
    });
  });

  // Circle click logic with Promises
  slides.forEach(slide => {
    const circles = slide.querySelectorAll('.slide-circle');
    circles.forEach(circle => {
      circle.addEventListener('click', () => {
        new Promise((resolve) => {
          circles.forEach(c => c.classList.remove('active-circle'));
          resolve();
        }).then(() => {
          circle.classList.add('active-circle');
        });
      });
    });
  });
});

// --------------------------------------------------------- Footer----------------------------
fetch('footer.html')
.then(res => res.text())
.then(data =>{
  document.getElementById('footer-placeholder').innerHTML = data;
})

// --------------------------------------------------------- consultation ------------------------------------
fetch('consultation.html')
.then(res =>res.text())
.then(data=>{
  document.getElementById('consultation-placeholder').innerHTML = data;
})



// --------------------------------------------------------- contact.html ------------------------------------
document.addEventListener("DOMContentLoaded", function(){
  const sendBtn = document.getElementById("sendBtn");
  const contactSection = document.getElementById("contact-section");
  const popupMessage = document.getElementById("popupMessage");
  
  sendBtn.addEventListener("click", function(e){
    e.preventDefault();
    
    contactSection.style.display = "none";
    popupMessage.style.display = "flex";
  });
});
// --------------------------------------------------------- menu.html ------------------------------------
function initializeDropdowns(container = document) {
  const dropdowns = container.querySelectorAll(".dropdown");

  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector(".dropdown-toggle");
    const menu = dropdown.querySelector(".dropdown-menu");
    const icon = dropdown.querySelector(".dropdown-icon");
    const selected = dropdown.querySelector(".dropdown-selected");

    if (!toggle || !menu || !icon || !selected) return;

    toggle.addEventListener("click", () => {
      document.querySelectorAll(".dropdown-menu").forEach(m => {
        if (m !== menu) m.classList.remove("show");
      });
      document.querySelectorAll(".dropdown-icon").forEach(i => {
        if (i !== icon) i.src = "images/sort-down.png";
      });

      const isOpen = menu.classList.toggle("show");
      icon.src = isOpen ? "images/sort-up.png" : "images/sort-down.png";
    });

    menu.querySelectorAll("li").forEach(item => {
      item.addEventListener("click", () => {
        selected.textContent = item.textContent;
        menu.classList.remove("show");
        icon.src = "images/sort-down.png";
      });
    });
  });

  document.addEventListener("click", function (e) {
    dropdowns.forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
        const menu = dropdown.querySelector(".dropdown-menu");
        const icon = dropdown.querySelector(".dropdown-icon");
        if (menu) menu.classList.remove("show");
        if (icon) icon.src = "images/sort-down.png";
      }
    });
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const placeholder = document.getElementById("menu-placeholder");
  if (placeholder) {
    fetch("menu.html")
      .then(res => res.text())
      .then(html => {
        placeholder.innerHTML = html;
        initializeDropdowns(placeholder);
      })
      .catch(err => {
        console.error("Dropdown fetch failed:", err);
      });
  }
});

// --------------------------------------------------------- index.html ------------------------------------

  const section = document.getElementById("expandableSection");
  const toggleBtn = document.getElementById("toggle-btn");
  const icon = toggleBtn.querySelector("img");

  toggleBtn.addEventListener("click", () => {
    section.classList.toggle("collapsed");
    const isCollapsed = section.classList.contains("collapsed");
    icon.src = isCollapsed ? "images/sort-down.png" : "images/sort-up.png";
  });
  // ----------------------------------------------------
  // Inject Navbar into placeholder
fetch('navbar.html')
  .then(res => res.text())
  .then(data => {
    document.querySelector('.header-container').innerHTML = data;

    // After navbar is loaded, now attach menu toggle
    setupNavbar();
  });

// Hamburger menu toggle function
function setupNavbar() {
  const hamburger = document.querySelector('.hamburger');
  const navLinksContainer = document.querySelector('.nav-links-container');

  if (hamburger && navLinksContainer) {
    hamburger.addEventListener('click', () => {
      navLinksContainer.classList.toggle('show');
    });
  }
}
