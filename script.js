const statusButton = document.getElementById('status');
const itemsButton = document.getElementById('items');
const skillsButton = document.getElementById('skills');
const expertisesButton = document.getElementById('expertises');

function tabChanger(newTab) {
    const tabBackground = document.getElementById('tabsDiv');
    tabBackground.style.borderImageSource = `url("Tab ${newTab}.png")`;

    const tabHolders = document.getElementsByClassName('tabHolder');
    Array.from(tabHolders).forEach(element => {
        element.style.display = "none";
    });

    const lowercaseNewTab = newTab.toLowerCase();
    const activeTab = document.getElementById(`${lowercaseNewTab}Holder`);
    activeTab.style.display = "flex";
}

statusButton.addEventListener('click', () => tabChanger("Status"));
itemsButton.addEventListener('click', () => tabChanger("Items"));
skillsButton.addEventListener('click', () => tabChanger("Skills"));
expertisesButton.addEventListener('click', () => tabChanger("Expertises"));

const statusArray = ["Health", "Mana", "Energy", "Inteligency"];
statusArray.forEach(element => {
     const newElement = document.createElement('span');
     newElement.textContent = element;
     const father = document.getElementById('statusHolder');
     father.appendChild(newElement);
});
   