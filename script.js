const cards = document.querySelectorAll(".glass-card");

document.addEventListener("mousemove", (e) => {
    let x = (window.innerWidth / 2 - e.pageX) / 35;
    let y = (window.innerHeight / 2 - e.pageY) / 35;

    cards.forEach(card => {
        card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });
});