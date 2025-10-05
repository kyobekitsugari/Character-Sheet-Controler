const statusButton = document.getElementById('status');
const itemsButton = document.getElementById('items');
const skillsButton = document.getElementById('skills');
const expertisesButton = document.getElementById('expertises');

function tabChanger(newTab) {
    const tabBackground = document.getElementById('tabsDiv');
    tabBackground.style.borderImageSource = `url("Tab ${newTab}.png")`;
}

statusButton.addEventListener('click', () => tabChanger("Status"));
itemsButton.addEventListener('click', () => tabChanger("Items"));
skillsButton.addEventListener('click', () => tabChanger("Skills"));
expertisesButton.addEventListener('click', () => tabChanger("Expertises"));