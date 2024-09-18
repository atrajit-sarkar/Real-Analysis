To add a professionally designed search bar to a webpage and enable it to search for elements on the page, you can follow these steps:

### 1. **HTML Structure for the Search Bar**
Create a simple input field with a search button inside a form.

```html
<div class="search-container">
    <input type="text" id="search-input" placeholder="Search..." onkeyup="searchElements()">
    <button type="submit">🔍</button>
</div>
```

### 2. **CSS Styling for a Professional Look**
You can style the search bar to look modern and professional using CSS. Adjust the styles as per your website theme.

```css
.search-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
}

#search-input {
    width: 300px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px 0 0 5px;
    font-size: 16px;
}

button {
    padding: 10px;
    border: none;
    background-color: #4CAF50;
    color: white;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
```

### 3. **JavaScript for Searching Elements on the Webpage**
The search functionality can be implemented using JavaScript. Here’s how to search for specific elements (like paragraphs or divs) on the page that contain the search term.

```javascript
function searchElements() {
    // Get the search term entered by the user
    let input = document.getElementById('search-input').value.toLowerCase();
    // Get all elements you want to search through (e.g., paragraphs)
    let elements = document.querySelectorAll('.searchable');
    
    elements.forEach(element => {
        // If the element contains the search term, display it, else hide it
        if (element.textContent.toLowerCase().includes(input)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
}
```

### 4. **Adding Searchable Elements to Your Webpage**
Ensure that elements you want to be searchable (like paragraphs, divs, or other content) have the class `searchable`.

```html
<div class="searchable">
    <h3>Introduction to HTML</h3>
    <p>HTML is the standard markup language for creating web pages...</p>
</div>

<div class="searchable">
    <h3>CSS Styling</h3>
    <p>CSS is used to control the style of a web document in a simple and easy way...</p>
</div>
```

### 5. **Optimizing for Accessibility**
Make sure your search bar is accessible by adding proper `aria` attributes and labels.

```html
<div class="search-container" role="search">
    <label for="search-input" class="sr-only">Search</label>
    <input type="text" id="search-input" placeholder="Search..." onkeyup="searchElements()" aria-label="Search for content">
    <button type="submit" aria-label="Submit search">🔍</button>
</div>
```

### Summary
This approach allows you to create a clean and professional search bar. The CSS styles the bar professionally, while the JavaScript function handles searching through the elements on the page. You can refine this design and functionality based on your webpage's needs, such as adding more filters, categories, or using third-party libraries for enhanced search capabilities.