function scrollToDiv(inputElement) {
    // let inputElement=document.querySelector("#search-input")
    const searchTerm = inputElement.value.toLowerCase();

    // Get all divs with an id attribute (potential search targets)
    const allDivs = document.querySelectorAll('div[id]');

    let targetDiv = null;

    // Iterate through the divs and find the first one that matches
    for (const div of allDivs) {
        // Check if the div's id or its inner text content matches the search term
        if (div.id.toLowerCase().includes(searchTerm) ||
            div.textContent.toLowerCase().includes(searchTerm)) {
            targetDiv = div;
            break; // Stop searching once a match is found
        }
    }

    if (targetDiv) {
        targetDiv.scrollIntoView({ behavior: 'smooth' });
    }


    // Cross icon logic (remains the same)
    let searchContainer = document.querySelector(".search-container");
    let cross = document.querySelector("#cross");

    if (searchTerm !== '') {
        if (!cross) {
            cross = document.createElement("div");
            cross.setAttribute("id", "cross");
            cross.innerHTML = '&times';  // Set cross icon (can use HTML entity)
            searchContainer.appendChild(cross);

            cross.addEventListener("click", () => {
                document.getElementById("search-input").value = '';  // Clear input value
                cross.remove();  // Remove the cross icon
                scrollToDiv(inputElement);  // Re-run the search to reset the elements
            });
        }
    } else {
        if (cross) {
            cross.remove();
        }
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const offcanvasToggler = document.getElementById('offcanvasToggler');
    const offcanvas = document.getElementById('offcanvasSidebar');
    const offcanvasClose = document.getElementById('offcanvasClose');

    // Offcanvas toggle functionality
    offcanvasToggler.addEventListener('click', function () {
        offcanvas.classList.toggle('show');
    });

    offcanvasClose.addEventListener('click', function () {
        offcanvas.classList.remove('show');
    });

    // Dropdown functionality
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const dropdownMenu = this.nextElementSibling;
            dropdownMenu.classList.toggle('show');
            this.classList.toggle('collapsed');
        });
    });

    // Close offcanvas when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!offcanvas.contains(event.target) && !offcanvasToggler.contains(event.target)) {
            offcanvas.classList.remove('show');
        }
    });

    // Prevent closing dropdowns when clicking inside them
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.addEventListener('click', function (e) {
            e.stopPropagation(); // Prevent the dropdown from closing
        });
    });
});




