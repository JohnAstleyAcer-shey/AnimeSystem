
document.getElementById('menu-icon').addEventListener('click', () => {
    document.getElementById('navbar').classList.toggle('active');
  });


  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: 'smooth'
        });
      }
      document.getElementById('navbar').classList.remove('active');
    });
  });


  document.querySelector('form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = this.querySelector('input[placeholder="Name"]').value;
    const email = this.querySelector('input[placeholder="Email"]').value;
    const message = this.querySelector('input[placeholder="Message"]').value;
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been received.`);
      this.reset();
    } else {
      alert('Please fill out all fields.');
    }
  });