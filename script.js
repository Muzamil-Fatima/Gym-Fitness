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
