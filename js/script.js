document.addEventListener("DOMContentLoaded", () => { // makes sure my script works after the DOM is loaded
    const tooltip = document.getElementById("tooltip"); // gets the names of the countries from the area tags
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
        "arabia-area": "Arab states",
        "iran-area": "Guarded Domains of Iran",
        "russia-area": "Russian Empire",
        "ally-area": "Entente Powers",
        "central-area": "Central Powers",
        "neutral-area": "Neutral nations",
    };

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
    });
});