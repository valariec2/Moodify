$(document).ready(function () {
  $('#lightModeToggle').click(function () {
    $('body').toggleClass('light-mode');
  });
});

const API_KEY = '127ad582dc1990c26a8ae55bbf6298ef'; // ← Replace this with your actual key

function searchArtist() {
  const artist = document.getElementById('artistInput').value.trim();
  if (!artist) return;

  const url = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${encodeURIComponent(artist)}&api_key=${API_KEY}&format=json`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (!data.artist) {
        document.getElementById('result').innerHTML = 'Artist not found.';
        return;
      }

      const artistInfo = data.artist;
      const image = artistInfo.image.find(img => img.size === 'extralarge')['#text'];
      const bio = artistInfo.bio.summary;

      document.getElementById('result').innerHTML = `
        <h2>${artistInfo.name}</h2>
        <img src="${image}" alt="${artistInfo.name}">
        <p>${bio}</p>
        <p><a href="${artistInfo.url}" target="_blank">View on Last.fm</a></p>
      `;
    })
    .catch(error => {
      console.error(error);
      document.getElementById('result').innerHTML = 'Error loading artist info.';
    });
}