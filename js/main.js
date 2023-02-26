let heroHeading = document.getElementById('typewriter');

let typewriter = new Typewriter(heroHeading, {
    loop: false
});

typewriter.typeString('Hi!')
    .pauseFor(1500)
    .deleteAll()
    .typeString('My naem is')
    .pauseFor(300)
    .deleteChars(5)
    .typeString('me is <span class="text-highlight">Tom</span>')
    .pause()
    .start();