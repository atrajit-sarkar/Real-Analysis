let clicked = false;

document.addEventListener("DOMContentLoaded", () => {
    const topics = document.querySelector("#topic-button");
    const topic_content = document.querySelector(".topic-content");

    if (topics && topic_content) {
        topics.addEventListener("click", () => {
            clicked = !clicked;
            if (clicked) {
                // Setting the initial innerHTML for the topic content
                topic_content.innerHTML = `
                <ol type="1">
                    <li id="seq-list">
                        <div class="list">
                            <a href="#sequences">Sequences</a>
                            <span class="span" id="sequence"><img src="dropdown.svg" alt="" srcset=""></span>
                        </div>
                    </li>
                </ol>`;

                const dropdown = document.querySelector("#sequence");
                let click_dropdown = false;
                const seqList = document.querySelector("#seq-list");

                if (dropdown) {
                    dropdown.addEventListener("click", () => {
                        click_dropdown = !click_dropdown;
                        if (click_dropdown) {
                            // Append the dropdown list items to the existing HTML
                            seqList.innerHTML += `
                            <ul>
                                <li>Infinitely Large Sequence</li>
                                <li>Cauchy Sequence</li>
                            </ul>`;
                        } else {
                            // Remove the dropdown list if clicked again
                            const ul = seqList.querySelector("ul");
                            if (ul) {
                                ul.remove();
                            }
                        }
                    });
                }
            } else {
                topic_content.innerHTML = ``;
            }
        });
    } else {
        console.log("Required elements not found in the DOM.");
    }
});
