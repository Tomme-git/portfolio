let heroHeading = document.getElementById('typewriter');

let typewriter = new Typewriter(heroHeading, {
  loop: false
});

typewriter.typeString('Hi!')
  .pauseFor(900)
  .deleteAll()
  .typeString('My naem is')
  .pauseFor(300)
  .deleteChars(5)
  .typeString('me is <span class="text-highlight">Tom</span>.')
  .pause()
  .start();

window.addEventListener('DOMContentLoaded', () => {
  let nav = document.querySelectorAll(`.nav-wrapper div a`);

  const options = {
    rootMargin: '-50% 0px -50% 0px',
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        nav.forEach(link => {
          /*
          console.log(entry.target.id);
          console.log(link.getAttribute("href").split('#'));
          */
          if (entry.target.id === link.getAttribute("href").split('#')[1]) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        })
      }
    });
  }, options);

  // Track all sections that have an `id` applied
  document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
  });

});