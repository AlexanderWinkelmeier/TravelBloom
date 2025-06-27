let travelData = {};

fetch('travel_recommendation_api.json')
  .then((response) => response.json())
  .then((data) => {
    travelData = data;
    console.log(data);
  })
  .catch((error) => {
    console.error('Error fetching travel recommendations:', error);
  });

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('nav form');
  if (!form) return;

  let resultsDiv = document.getElementById('search-results');
  if (!resultsDiv) {
    resultsDiv = document.createElement('div');
    resultsDiv.id = 'search-results';
    resultsDiv.style.background = 'rgba(255,255,255,0.95)';
    resultsDiv.style.color = '#222';
    resultsDiv.style.padding = '18px 22px';
    resultsDiv.style.borderRadius = '10px';
    resultsDiv.style.marginTop = '10px';
    resultsDiv.style.display = 'none';
    resultsDiv.style.maxWidth = '350px';
    resultsDiv.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
    const navRight = document.querySelector('.nav-right');
    if (navRight) navRight.appendChild(resultsDiv);
    else document.body.appendChild(resultsDiv);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const input = form.querySelector('input[name="search"]');
    const keyword = input.value.trim().toLowerCase();
    if (!keyword) return;

    let results = [];

    if (keyword === 'beach' || keyword === 'beaches') {
      results = (travelData.beaches || []).slice(0, 2);
    } else if (keyword === 'temple' || keyword === 'temples') {
      results = (travelData.temples || []).slice(0, 2);
    } else {
      let country = (travelData.countries || []).find(
        (c) => c.name.toLowerCase() === keyword
      );
      if (!country) {
        country = (travelData.countries || []).find((c) =>
          c.name.toLowerCase().includes(keyword)
        );
      }
      if (country) {
        results = (country.cities || []).slice(0, 2);
      }
    }

    showResults(results, resultsDiv);
  });

  form.addEventListener('reset', function () {
    clearResults(resultsDiv);
  });
});

function showResults(results, resultsDiv) {
  if (!resultsDiv.parentElement.classList.contains('results-wrapper')) {
    let wrapper = document.querySelector('.results-wrapper');
    if (!wrapper) {
      wrapper = document.createElement('div');
      wrapper.className = 'results-wrapper';
      wrapper.style.display = 'flex';
      wrapper.style.flexDirection = 'row';
      wrapper.style.justifyContent = 'flex-end';
      wrapper.style.alignItems = 'flex-start';
      const nav = document.querySelector('nav');
      if (nav && nav.nextSibling) {
        nav.parentNode.insertBefore(wrapper, nav.nextSibling);
      } else if (nav) {
        nav.parentNode.appendChild(wrapper);
      }
    }
    wrapper.appendChild(resultsDiv);
    resultsDiv.style.margin = '32px 40px 0 0';
    resultsDiv.style.position = 'relative';
    resultsDiv.style.background = 'transparent';
    resultsDiv.style.boxShadow = 'none';
    resultsDiv.style.padding = '0';
    resultsDiv.style.maxWidth = 'none';
    resultsDiv.style.width = 'auto';
    resultsDiv.style.right = '0';
    resultsDiv.style.left = 'auto';
    resultsDiv.style.borderRadius = '0';
  }

  resultsDiv.innerHTML = '';
  resultsDiv.style.display = 'block';
  if (!results.length) {
    resultsDiv.textContent = 'No recommendations found.';
    return;
  }

  const cardsContainer = document.createElement('div');
  cardsContainer.style.display = 'flex';
  cardsContainer.style.flexDirection = 'column';
  cardsContainer.style.alignItems = 'flex-end';
  cardsContainer.style.width = '100%';
  cardsContainer.style.background = 'transparent';

  results.forEach((item) => {
    const card = document.createElement('div');
    card.style.border = '1px solid #e0e0e0';
    card.style.borderRadius = '10px';
    card.style.margin = '14px 0';
    card.style.padding = '0 0 14px 0';
    card.style.background = '#fafbfc';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.alignItems = 'flex-start';
    card.style.maxWidth = '320px';
    card.style.width = '320px';
    card.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';

    const img = document.createElement('img');
    img.src = item.imageUrl || '';
    img.alt = item.name || 'Place image';
    img.style.width = '300px';
    img.style.height = '150px';
    img.style.objectFit = 'cover';
    img.style.borderRadius = '8px';
    img.style.margin = '14px 14px 0 10px';
    img.style.alignSelf = 'flex-start';

    const title = document.createElement('h3');
    title.textContent = item.name || 'Unknown Place';
    title.style.margin = '10px 14px 6px 14px';
    title.style.fontSize = '1.08em';
    title.style.textAlign = 'left';

    const desc = document.createElement('p');
    desc.textContent = item.description || '';
    desc.style.margin = '0 14px 0 14px';
    desc.style.fontSize = '0.97em';
    desc.style.textAlign = 'left';

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(desc);

    cardsContainer.appendChild(card);
  });

  resultsDiv.appendChild(cardsContainer);

  resultsDiv.style.display = 'block';
  resultsDiv.style.flexDirection = '';
  resultsDiv.style.alignItems = '';
}

function clearResults(resultsDiv) {
  resultsDiv.innerHTML = '';
  resultsDiv.style.display = 'none';
}

cardsContainer.appendChild(card);

resultsDiv.appendChild(cardsContainer);

resultsDiv.style.display = 'block';
resultsDiv.style.flexDirection = '';
resultsDiv.style.alignItems = '';

function clearResults(resultsDiv) {
  resultsDiv.innerHTML = '';
  resultsDiv.style.display = 'none';
}
