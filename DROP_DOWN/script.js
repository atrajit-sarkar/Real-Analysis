function toggleDropdown(dropdownId) {
    const dropdownContent = document.getElementById(dropdownId);
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';

    const dropdownContainer = dropdownContent.parentNode;
    dropdownContainer.classList.toggle('active');
}
