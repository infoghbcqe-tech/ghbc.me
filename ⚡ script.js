// Hamburger menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// RSVP Form JS
const rsvpForm = document.getElementById('rsvpForm');
const rsvpMessage = document.getElementById('rsvpMessage');

if(rsvpForm){
  rsvpForm.addEventListener('submit', function(e){
    e.preventDefault();
    const name = rsvpForm.name.value;
    const email = rsvpForm.email.value;
    rsvpMessage.innerHTML = `Thank you, <strong>${name}</strong>! Your RSVP has been received. We will contact you at <strong>${email}</strong>.`;
    rsvpForm.reset();
  });
}
