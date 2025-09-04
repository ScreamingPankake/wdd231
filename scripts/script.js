
const menu = document.querySelector('#showOnMobile');
const navBar = document.querySelector('.navbar');
const menuButton = document.querySelector('#menubutton');
const date = document.querySelector('#current-date');
const lastModified = document.querySelector('#last-modified');
const credit = document.querySelector('#credits');

const all = document.querySelector('#all');
const cse = document.querySelector('#cse');
const wdd = document.querySelector('#wdd');
const addClasses = document.querySelector('#class');

const currentYear = new Date().getFullYear();
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();


const classes = {
    1: { 'CSE111': 2 },
    2: { 'CSE210': 2 },
    3: { 'CSEPC110': 2 },
    4: { 'WDD130': 2 },
    5: { 'WDD131': 2 },
}

let isX = false;
let toggle = true
let totalCredits = 0;

menu.onclick = function () { ShowMenu() };

addEventListener("resize", function () {
    if (this.window.innerWidth > 800) {
        navBar.style.display = "flex";
    }
    else if (this.window.innerWidth < 801) {
        if (toggle)
        {
            isX = true;
            ShowMenu();
            toggle = false;
        }
    }
});


all.addEventListener("click", () => {
    addClasses.innerHTML = "";
    totalCredits = 0;

    Object.entries(classes).forEach(([key, value]) => {

        const [className, credits] = Object.entries(value)[0];

        const newCard = document.createElement("div");

        const p = document.createElement("p");
        p.textContent = className;

        newCard.appendChild(p);
        addClasses.appendChild(newCard);

        totalCredits += credits;

        credit.textContent = `The total credits for course listed above is ${totalCredits}`;
    });
});
cse.addEventListener("click", () => {
    addClasses.innerHTML = "";
    totalCredits = 0;

    Object.entries(classes).forEach(([key, value]) => {

        const [className, credits] = Object.entries(value)[0];

        if(className[0] == 'C')
        {
            const newCard = document.createElement("div");  

            const p = document.createElement("p");
            p.textContent = className;

            newCard.appendChild(p);
            addClasses.appendChild(newCard);

            totalCredits += credits;

            credit.textContent = `The total credits for course listed above is ${totalCredits}`;
        }
    });
});
wdd.addEventListener("click", () => {
    addClasses.innerHTML = "";
    totalCredits = 0;

    Object.entries(classes).forEach(([key, value]) => {

        const [className, credits] = Object.entries(value)[0];

        if(className[0] == 'W')
        {
            const newCard = document.createElement("div");  

            const p = document.createElement("p");
            p.textContent = className;

            newCard.appendChild(p);
            addClasses.appendChild(newCard);

            totalCredits += credits;

            credit.textContent = `The total credits for course listed above is ${totalCredits}`;
        }
    });
});


function ShowMenu() {
    if (isX) {
        menuButton.src = "images/hamburger.svg";
        isX = false;
        navBar.style.display = "none";
    }
    else {
        menuButton.src = "images/close.svg";
        isX = true;
        navBar.style.display = "flex";
    }
}


date.textContent = `© ${year} | Nathan Atwood | Utah USA`;
lastModified.textContent = `Last Modification: ${month}/${day}/${year} `;