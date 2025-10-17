const cardSpace = document.querySelector('#cardspace');
const container = document.querySelector('#container');
const footer = document.querySelector('#footer');

const hotels = [
  { "name": "Amangiri", "location": "Canyon Point, Utah", "rating": "5", "image_url": "https://picsum.photos/200" },
  { "name": "The Grand America Hotel", "location": "Salt Lake City, Utah", "rating": "4.7", "image_url": "https://picsum.photos/200" },
  { "name": "Waldorf Astoria Park City", "location": "Park City, Utah", "rating": "5", "image_url": "https://picsum.photos/200" },
  { "name": "Stein Eriksen Lodge Deer Valley", "location": "Deer Valley / Park City, Utah", "rating": "4.8", "image_url": "https://picsum.photos/200" },
  { "name": "Montage Deer Valley", "location": "Park City region, Utah", "rating": "5", "image_url": "https://picsum.photos/200" },
  { "name": "Red Mountain Resort", "location": "St. George, Utah", "rating": "4.5", "image_url": "https://picsum.photos/200" },
  { "name": "Black Desert Resort", "location": "near Zion National Park, Utah", "rating": "4.6", "image_url": "https://picsum.photos/200" }
];

if (cardSpace) {
  hotels.forEach(element => {
    const card = document.createElement('div');
    const cardClick = document.createElement('a');
    const cardName = document.createElement('h3');
    const cardLocation = document.createElement('p');
    const cardRating = document.createElement('p');
    const cardImage = document.createElement('img');

    cardClick.href = 'book.html';
    cardName.textContent = element.name;
    cardLocation.textContent = element.location;
    cardRating.textContent = `Rating: ${element.rating} stars`;
    cardImage.src = element.image_url;
    cardImage.loading = 'lazy';

    card.append(cardImage, cardName, cardLocation, cardRating);
    cardClick.appendChild(card);
    cardSpace.appendChild(cardClick);

    cardClick.addEventListener('click', e => {
      e.preventDefault();
      localStorage.setItem('selectedHotel', JSON.stringify(element));
      window.location.href = 'book.html';
    });
  });
}

const form = document.querySelector('#form');
if (form) {
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const phoneNum = document.querySelector('#phone-num');

  form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = {
      fullName: name.value.trim(),
      formEmail: email.value.trim(),
      phoneNumber: phoneNum.value.trim()
    };
    localStorage.setItem("formData", JSON.stringify(formData));
    window.location.href = "thankyou.html";
  });
}

if (footer) {
  const footerText = document.createElement('p');
  footerText.textContent = '©Nathan Atwood | 2025';
  footer.appendChild(footerText);
}