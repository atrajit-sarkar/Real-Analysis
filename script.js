function searchElements() {
    let input = document.getElementById('search-input').value.toLowerCase();
    let elements = document.querySelectorAll('.searchable');

    elements.forEach(element => {
        let elementType = element.getAttribute('data-type');
        let text = element.textContent.toLowerCase();

        if (text.includes(input)) {
            if (elementType === "section") {
                // Show section and all its descendants (subsections and subsubsections)
                element.style.display = "block";
                let descendants = element.querySelectorAll('.subsection, .subsubsection');
                descendants.forEach(descendant => descendant.style.display = "block");
            } else if (elementType === "subsection") {
                // Show subsection and all its subsubsections
                element.style.display = "block";
                let subsubsections = element.querySelectorAll('.subsubsection');
                subsubsections.forEach(sub => sub.style.display = "block");
            } else if (elementType === "subsubsection") {
                // Only show the matching subsubsection and its parent subsection
                let parent = element.closest('.subsection');
                parent.style.display = "block"; 
                element.style.display = "block"; 
            }
        } else {
            element.style.display = "none";
        }
    });

    // Cross icon logic (remains the same)
    let searchContainer = document.querySelector(".search-container");
    let cross = document.querySelector("#cross");

    if (input !== '') {
        if (!cross) {
            cross = document.createElement("div");
            cross.setAttribute("id", "cross");
            cross.innerHTML = '&times';  // Set cross icon (can use HTML entity)
            searchContainer.appendChild(cross);

            cross.addEventListener("click", () => {
                document.getElementById("search-input").value = '';  // Clear input value
                cross.remove();  // Remove the cross icon
                searchElements();  // Re-run the search to reset the elements
            });
        }
    } else {
        if (cross) {
            cross.remove();
        }
    }
}