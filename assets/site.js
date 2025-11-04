// Mobile toggle
document.addEventListener('DOMContentLoaded', ()=> {
  const toggle = document.querySelectorAll('.mobile-toggle');
  toggle.forEach(btn=>{
    btn.addEventListener('click', ()=> {
      const nav = document.querySelector('.main-nav');
      if(!nav) return;
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.gap = '10px';
      nav.style.padding = '12px';
      nav.style.background = 'rgba(255,255,255,0.98)';
      nav.style.position = 'absolute';
      nav.style.right = '18px';
      nav.style.top = '68px';
      nav.style.borderRadius = '8px';
      nav.style.boxShadow = '0 8px 24px rgba(21,32,64,0.08)';
    });
  });

  // set current year on footers
  const years = document.querySelectorAll('#year, #year2, #year3, #year4, #year5');
  years.forEach(y => { if (y) y.textContent = new Date().getFullYear(); });

  // contact form: basic mailto fallback
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = encodeURIComponent(form.name.value.trim());
      const email = encodeURIComponent(form.email.value.trim());
      const message = encodeURIComponent(form.message.value.trim());
      if(!name || !email || !message){
        alert('Please complete all fields.');
        return;
      }
      // mailto fallback
      const subj = encodeURIComponent('Website contact: ' + name);
      const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
      window.location.href = `mailto:info@anandmportfolio.com?subject=${subj}&body=${body}`;
    });
  }
});
