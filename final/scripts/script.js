const cardSpace = document.querySelector('#cardspace');
const footer = document.querySelector('#footer');

let fullName;
let formEmail;
let phoneNumber;

const hotels = [
  {
    "name": "Amangiri",
    "location": "Canyon Point, Utah",
    "rating": "5", 
    "image_url": "https://picsum.photos/200"
  },
  {
    "name": "The Grand America Hotel",
    "location": "Salt Lake City, Utah",
    "rating": "4.7" ,
    "image_url": "https://picsum.photos/200"
  },
  {
    "name": "Waldorf Astoria Park City",
    "location": "Park City, Utah",
    "rating": "5" ,
    "image_url": "https://picsum.photos/200"
  },
  {
    "name": "Stein Eriksen Lodge Deer Valley",
    "location": "Deer Valley / Park City, Utah",
    "rating": "4.8" ,
    "image_url": "https://picsum.photos/200"
  },
  {
    "name": "Montage Deer Valley",
    "location": "Park City region, Utah",
    "rating": "5" ,
    "image_url": "https://picsum.photos/200"
  },
  {
    "name": "Red Mountain Resort",
    "location": "St. George, Utah",
    "rating": "4.5" ,
    "image_url": "https://picsum.photos/200"
  },
  {
    "name": "Black Desert Resort",
    "location": "near Zion National Park, Utah",
    "rating": "4.6" ,
    "image_url": "https://picsum.photos/200"
  }];

hotels.forEach(element => {
    const name = element.name;
    const location = element.location;
    const rating = element.rating;
    const image = element.image_url;

    const cardName = document.createElement('h3');
    const cardLocation = document.createElement('p');
    const cardRating = document.createElement('p');
    const cardImage = document.createElement('img');
    const card = document.createElement('div');

    cardName.textContent = name;
    cardLocation.textContent = location;
    cardRating.textContent = `Rating: ${rating} stars`;
    cardImage.src = image;
    cardImage.loading = 'lazy';

    card.appendChild(cardImage);
    card.appendChild(cardName);
    card.appendChild(cardLocation);
    card.appendChild(cardRating);

    cardSpace.appendChild(card);
});

const form = document.querySelector('#form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const phoneNum = document.querySelector('#phone-num');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = {
    fullName: name.value.trim(),
    formEmail: email.value.trim(),
    phoneNumber: phoneNum.value.trim()
  };
  localStorage.setItem("formData", JSON.stringify(formData));
  window.location.href = "thankyou.html";
});


footerText = footer.createElement('p');
footerText.textContent = '©Nathan Atwood | 2025';
footerText.appendChild(footer);