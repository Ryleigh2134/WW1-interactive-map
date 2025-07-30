const areas = document.querySelectorAll("area");
const dialogs = {
    "portugal-area": document.getElementById("portugal"),
    "spain-area": document.getElementById("spain"),
    "france-area": document.getElementById("france"),
    "italy-area": document.getElementById("italy"),
    "swiss-area": document.getElementById("swiss"),
    "luxembourg-area": document.getElementById("luxembourg"),
    "belgium-area": document.getElementById("belgium"),
    "netherlands-area": document.getElementById("netherlands"),
    "germany-area": document.getElementById("germany"),
};

document.addEventListener("DOMContentLoaded", () => {
    const tooltip = document.getElementById("tooltip");
    const countryTooltips = {
        "portugal-area": "Kingdom of Portugal",
        "spain-area": "Kingdom of Spain",
        "france-area": "French Third Republic",
        "italy-area": "Kingdom of Italy",
        "swiss-area": "Swiss Confederation",
        "luxembourg-area": "Grand Duchy of Luxembourg",
        "belgium-area": "Kingdom of Belgium",
        "netherlands-area": "Kingdom of the Netherlands",
        "germany-area": "German Empire",
    };

    document.querySelectorAll("area").forEach(area => {
        area.addEventListener("mouseenter", (event) => {
            const countryName = countryTooltips[area.id];
            if (countryName) {
                tooltip.innerText = countryName;
                tooltip.style.opacity = "1";
            }
        });

        area.addEventListener("mousemove", (event) => {
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;
        });

        area.addEventListener("mouseleave", () => {
            tooltip.style.opacity = "0";
        });
    });
});

areas.forEach(area => {
    area.addEventListener("click", (event) => {
        event.preventDefault();
        const dialog = dialogs[area.id];
        if (dialog) {
            if (countryMapImages[area.id]) {
                mapImg.src = countryMapImages[area.id];
            }
            dialog.showModal();
        }
    });
});

document.querySelectorAll("dialog").forEach(dialog => {
    dialog.addEventListener("close", () => {
        mapImg.src = mainMapSrc;
    });
});