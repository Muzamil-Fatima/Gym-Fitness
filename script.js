// ---------------------------------------------------------- navbar-------------------------
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
        // Last slide, redirect
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
// --------------------------------------------------------- menu.html ------------------------------------
// fetch('menu.html')
// .then(res=>res.text())
// .then(data=>{
//   document.getElementById('menu-placeholder').innerHTML = data;
// })

  // document.addEventListener("DOMContentLoaded", function () {
  //   function setupDropdown(toggleId, menuId, iconId, selectedId) {
  //     const toggle = document.getElementById(toggleId);
  //     const icon = document.getElementById(iconId);
  //     const menu = document.getElementById(menuId);
  //     const selectedText = document.getElementById(selectedId);

  //     toggle.addEventListener("click", function () {
  //       toggleDropdown(menu, icon).then((isOpen) => {
  //         console.log(`Dropdown is now ${isOpen ? "open" : "closed"}`);
  //       });
  //     });

  //     Array.from(menu.children).forEach(item => {
  //       item.addEventListener("click", function () {
  //         handleItemClick(item.textContent, selectedText, menu, icon).then(() => {
  //           console.log("Option selected and menu closed.");
  //         });
  //       });
  //     });
  //   }

  //   function toggleDropdown(menu, icon) {
  //     return new Promise((resolve) => {
  //       const isOpen = menu.classList.toggle("show");
  //       icon.src = isOpen ? "images/sort-up.png" : "images/sort-down.png";
  //       resolve(isOpen);
  //     });
  //   }

  //   function handleItemClick(text, selectedText, menu, icon) {
  //     return new Promise((resolve) => {
  //       setTimeout(() => {
  //         selectedText.textContent = text;
  //         menu.classList.remove("show");
  //         icon.src = "images/sort-down.png";
  //         resolve();
  //       }, 200); // Simulate slight delay
  //     });
  //   }

  //   setupDropdown("toggle1", "menu1", "icon1", "selected1");
  //   setupDropdown("toggle2", "menu2", "icon2", "selected2");
  // });


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
//  document.addEventListener("DOMContentLoaded", function () {
//     function setupDropdown(toggleId, menuId, iconId, selectedId) {
//       const toggle = document.getElementById(toggleId);
//       const menu = document.getElementById(menuId);
//       const icon = document.getElementById(iconId);
//       const selectedText = document.getElementById(selectedId);

//       toggle.addEventListener("click", function () {
//         const isOpen = menu.classList.toggle("show");
//         icon.src = isOpen ? "images/sort-up.png" : "images/sort-down.png";
//       });

//       // Set selected text and close menu
//       Array.from(menu.children).forEach(item => {
//         item.addEventListener("click", function () {
//           selectedText.textContent = item.textContent;
//           menu.classList.remove("show");
//           icon.src = "images/sort-down.png";
//         });
//       });
//     }

//     setupDropdown("toggle1", "menu1", "icon1", "selected1");
//     setupDropdown("toggle2", "menu2", "icon2", "selected2");
//   });
// --------------------------------------------------------- index.html ------------------------------------

 // downwards in about section

// const section = document.getElementsById('expandableSection');
// const toggleBtn = document.getElementsById('toggle-btn');

//   const downarrow = `<svg width="40px" height="40px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet"><path d="M53.212 10.785c-11.715-11.714-30.711-11.714-42.426 0c-11.715 11.717-11.715 30.711 0 42.427c11.715 11.717 30.711 11.717 42.426 0c11.717-11.716 11.717-30.71 0-42.427M31.999 47l-20-20h40l-20 20" fill="#000000"></path></svg>`;
//   const uparrow = `<svg width="40px" height="40px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet"><path d="M53.213 10.788c-11.715-11.717-30.711-11.717-42.426 0c-11.716 11.715-11.716 30.71 0 42.426c11.715 11.715 30.711 11.715 42.426 0c11.717-11.716 11.717-30.711 0-42.426zM12 38l20-20l20 20H12z" fill="#000000"></path></svg>`;


//   toggleBtn.addEventListener('click', ()=>{
//     const isCollapsed = section.classList.conatins('collapsed');
//     if(isCollapsed){
//       section.classList.remove('collapsed');
//       section.classList.add('expanded');
//       toggleBtn.innerHTML = uparrow;
//     }
//     else{
//       section.classList.add('collapsed');
//       section.classList.remove('expanded');
//       toggleBtn.innerHTML = downarrow
//     }
//   })
