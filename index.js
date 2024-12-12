fetch('./CountriesData.json')
  .then(response => response.json())
  .then(countries => {
    const countriesGrid = document.getElementById('countries-grid');

    countries.forEach(({ name, flag, population, region, capital }) => {
      countriesGrid.innerHTML += `
        <a href="#" class="country scale-effect" data-country-name="${name}">
          <div class="country-flag">
            <img src="${flag}" alt="${name} Flag">
          </div>
          <div class="country-info">
            <h2 class="country-title">${name}</h2>
            <ul class="country-brief">
              <li><strong>Population: </strong>${population}</li>
              <li><strong>Region: </strong>${region}</li>
              <li><strong>Capital: </strong>${capital}</li>
            </ul>
          </div>
        </a>`;
    });
  })
  .catch(error => console.error('Error fetching JSON data:', error));