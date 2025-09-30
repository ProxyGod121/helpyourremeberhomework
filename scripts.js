function resetCheckboxes() {
    const checkboxes = document.querySelectorAll('#contain input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}

function addCheckbox() {
    const newCheckboxText = document.getElementById('newCheckboxText').value.trim();
    if (newCheckboxText === "") {
        alert("Please enter a value for the new checkbox.");
        return;
    }

    const container = document.getElementById('contain');
    const newId = newCheckboxText.toLowerCase().replace(/\s/g, ''); // Create a unique ID

    // Check if an element with this ID already exists
    if (document.getElementById(newId)) {
        alert("A checkbox with this name already exists.");
        return;
    }

    const newCheckDiv = document.createElement('div');
    newCheckDiv.classList.add('check');
    newCheckDiv.id = `check-${newId}`; // Give the parent div an ID for easy removal

    newCheckDiv.innerHTML = `
        <input type="checkbox" id="${newId}" name="fruit" value="${newId}">
        <span class="checkmark" onclick="document.getElementById('${newId}').click()"></span>
        <span class="check-label-text">${newCheckboxText}</span>
        <button class="remove-button" onclick="removeCheckbox('check-${newId}')">Remove</button>
    `;
    container.appendChild(newCheckDiv);
    document.getElementById('newCheckboxText').value = ''; // Clear the input field
}

function removeCheckbox(checkboxDivId) {
    const checkboxDiv = document.getElementById(checkboxDivId);
    if (checkboxDiv) {
        checkboxDiv.remove();
    }
}