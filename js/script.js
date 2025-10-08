document.addEventListener("DOMContentLoaded", () => { // makes sure my script works after the DOM is loaded
    const tooltip = document.getElementById("tooltip"); // gets the names of the countries from the area tags
    const mapImg = document.getElementById("main-map"); 

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
        "denmark-area": "Kingdom of Denmark",
        "norway-area": "Kingdom of Norway",
        "sweden-area": "Kingdom of Sweden",
        "austria-area": "Austria-Hungary",
        "montenegro-area": "Kingdom of Montenegro",
        "albania-area": "Principality of Albania",
        "serbia-area": "Kingdom of Serbia",
        "romania-area": "Kingdom of Romania",
        "bulgaria-area": "Tsardom of Bulgaria",
        "greece-area": "Kingdom of Greece",
        "uk-area": "United Kingdom of Great Britain and Ireland",
        "egypt-area": "Khedivate of Egypt",
        "ottoman-area": "Sublime Ottoman State",
        "arabia-area": "Arab States",
        "iran-area": "Guarded Domains of Iran",
        "russia-area": "Russian Empire",
        "ally-area": "Entente Powers",
        "central-area": "Central Powers",
        "neutral-area": "Neutral nations",
    };

    const countryMapImages = {
        "portugal-area": "images/maps/portugal.png",
        "spain-area": "images/maps/spain.png",
        "france-area": "images/maps/france.png",
        "italy-area": "images/maps/italy.png",
        "swiss-area": "images/maps/swiss.png",
        "luxembourg-area": "images/maps/luxembourg.png",
        "belgium-area": "images/maps/belgium.png",
        "netherlands-area": "images/maps/netherlands.png",
        "germany-area": "images/maps/germany.png",
        "denmark-area": "images/maps/denmark.png",
        "norway-area": "images/maps/norway.png",
        "sweden-area": "images/maps/sweden.png",
        "austria-area": "images/maps/austria.png",
        "montenegro-area": "images/maps/montenegro.png",
        "albania-area": "images/maps/albania.png",
        "serbia-area": "images/maps/serbia.png",
        "romania-area": "images/maps/romania.png",
        "bulgaria-area": "images/maps/bulgaria.png",
        "greece-area": "images/maps/greece.png",
        "uk-area": "images/maps/uk.png",
        "egypt-area": "images/maps/egypt.png",
        "ottoman-area": "images/maps/ottomans.png",
        "arabia-area": "images/maps/arabia.png",
        "iran-area": "images/maps/iran.png",
        "russia-area": "images/maps/russia.png",
        "ally-area": "images/maps/allies.png",
        "central-area": "images/maps/central.png", 
        "neutral-area": "images/maps/neutral.png",
    };

    let mainMapSrc = "images/maps/base_map.png";
    if (window.location.pathname.includes("allies.html")) {
        mainMapSrc = "images/maps/factions.png";
    }

    document.querySelectorAll("area").forEach(area => { // allows for my tooltips to show up when hovering over a country
        area.addEventListener("mouseenter", (event) => {
            const countryName = countryTooltips[area.id];
            if (countryName) {
                tooltip.innerText = countryName;
                tooltip.style.opacity = "1";
            }
        });

        area.addEventListener("mousemove", (event) => { // puts the tooltip near the mouse cursor and moves it if near the edge of the screen
            const tooltipRect = tooltip.getBoundingClientRect();
            const padding = 10;
            let left = event.pageX + padding;
            let top = event.pageY + padding;

            
            if (left + tooltipRect.width > window.innerWidth) {
                left = event.pageX - tooltipRect.width - padding;
            }
            
            if (top + tooltipRect.height > window.innerHeight) {
                top = event.pageY - tooltipRect.height - padding;
            }

            tooltip.style.left = `${left}px`;
            tooltip.style.top = `${top}px`;
        });

        area.addEventListener("mouseleave", () => {
            tooltip.style.opacity = "0";
        });

        area.addEventListener("click", (event) => { // opens a dialog when a area is clicked on
            event.preventDefault(); 
            // Change map image if needed
            if (countryMapImages[area.id] && mapImg) {
                mapImg.src = countryMapImages[area.id];
            }
            const areaId = area.id.replace('-area', ''); 
            const dialog = document.getElementById(areaId);
            if (dialog) {
                dialog.showModal();
            }

            
        });
    });

    document.querySelectorAll("dialog").forEach(dialog => { // makes it so when you click outside the dialog it closes
        dialog.addEventListener("click", function(event) {
            if (event.target === dialog) {
                dialog.close();
            }
        });

        dialog.addEventListener("close", function() {
            if (mapImg) {
                mapImg.src = mainMapSrc;
            }
        });
    });
});
    document.querySelectorAll(".close-button").forEach(button => { // makes the close button work
        button.addEventListener("click", (event) => {
            const dialog = button.closest("dialog");
            if (dialog) {
                dialog.close();
            }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
        });
    });
});