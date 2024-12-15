document.addEventListener('DOMContentLoaded', function() {
    // 1. קבלת שם המדינה מתוך ה-URL
    const urlParams = new URLSearchParams(window.location.search);
    const countryName = urlParams.get('country');
    console.log(countryName);  // וודא שאתה מקבל את שם המדינה
  
    fetch('./CountriesData.json')
      .then(response => response.json())
      .then(countries => {
       
        const country = countries.find(c => c.name === countryName);
        // console.log(country)
 
        if (country) {
          // 3. הצגת פרטי המדינה בעמוד
          const countryDetails = document.getElementById('country-details');
          console.log(countryDetails)
  
          countryDetails.innerHTML = `
            <div class="country-header">
              <h1>${country.name}</h1>
              <img src="${country.flag}" alt="${country.name} Flag" />
            </div>
            <ul class="country-info">
              <li><strong>Population: </strong>${country.population}</li>
              <li><strong>Region: </strong>${country.region}</li>
              <li><strong>Capital: </strong>${country.capital}</li>
            </ul>
          `;
        } else {
          // אם המדינה לא נמצאה
          const countryDetails = document.getElementById('country-details');
          countryDetails.innerHTML = `<p>Country not found.</p>`;
        }
      })
      .catch(error => {
        console.error('Error fetching country data:', error);
      });
  });
  