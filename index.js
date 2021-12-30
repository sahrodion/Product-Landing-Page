function load() {
    let cards = document.querySelectorAll(".cards");

    cards.forEach(card => {
        let hoverDiv = card.querySelector(".onhover_div");
        card.onmouseenter = () => {
            hoverDiv.style.display = "flex";
        }

        card.onmouseleave = () => {
            hoverDiv.style.display = "none";
        }
    })
}

window.onload = load;