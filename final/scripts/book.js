document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#container');
  const selectedHotel = JSON.parse(localStorage.getItem('selectedHotel'));

  if (selectedHotel) {
    const card = document.createElement('div');
    const name = document.createElement('h2');
    const location = document.createElement('p');
    const rating = document.createElement('p');
    const image = document.createElement('img');
    const backLink = document.createElement('a');

    name.textContent = selectedHotel.name;
    location.textContent = selectedHotel.location;
    rating.textContent = `Rating: ${selectedHotel.rating} stars`;
    image.src = selectedHotel.image_url;
    image.alt = selectedHotel.name;
    image.loading = 'lazy';

    backLink.href = 'find-hotels.html';
    backLink.textContent = '← Back to hotels';
    backLink.style.display = 'block';
    backLink.style.marginTop = '1rem';

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(rating);
    card.appendChild(backLink);

    container.appendChild(card);

    
  } else {
    container.textContent = 'No hotel selected. Please go back and choose one.';
  }
});