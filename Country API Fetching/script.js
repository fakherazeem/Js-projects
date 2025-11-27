'use strict';

const countriesContainer = document.querySelector('.countries');
const countryInput = document.getElementById('countryInput');
const searchBtn = document.getElementById('searchBtn');

function countryData(country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function() {
    const [data] = JSON.parse(this.responseText);
    const html = `
      <article class="country">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} million</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p> 
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
      </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
}

function searchCountry() {
  const country = countryInput.value.trim();
  if (country) {
    countriesContainer.innerHTML = '';
    countriesContainer.style.opacity = 0;
    countryData(country);
    countryInput.value = '';
  }
}

searchBtn.addEventListener('click', searchCountry);
countryInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') searchCountry();
});

