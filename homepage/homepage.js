$(document).ready(function () {
  $('#lightModeToggle').click(function () {
    $('body').toggleClass('light-mode');
  });
});

// Example function to process API data
const apiData = {
  result: "success",
  message: "Data Retrieved.",
  data: [
    {
      source: "spotify",
      metric: "top_playlists",
      scope: "total",
      top_playlists: [
        {
          playlist_id: "37i9dQZF1DX8tZsk68tuDw",
          playlist_name: "Dance Rising",
          external_url: "https://open.spotify.com/playlist/37i9dQZF1DX8tZsk68tuDw",
          followers_total: "1.95M",
          image_url: "https://i.scdn.co/image/ab67706f00000002257c27d66bcb62be8c869f49"
        },
        {
          playlist_id: "37i9dQZF1DXa8NOEUWPn9W",
          playlist_name: "Housewerk",
          external_url: "https://open.spotify.com/playlist/37i9dQZF1DXa8NOEUWPn9W",
          followers_total: "1.95M",
          image_url: "https://i.scdn.co/image/ab67706f000000029050160f47bb29ff3a6693e9"
        }
      ]
    },
    {
      source: "deezer",
      metric: "top_playlists",
      scope: "total",
      top_playlists: [
        {
          playlist_id: "2055454184",
          playlist_name: "House Workout",
          external_url: "https://www.deezer.com/playlist/2055454184",
          followers_total: "194K",
          image_url: "https://cdn-images.dzcdn.net/images/playlist/646574d02842d3f4757d3e65f9f5aee0/1000x1000-000000-80-0-0.jpg"
        },
        {
          playlist_id: "1221037371",
          playlist_name: "Top Lithuania",
          external_url: "https://www.deezer.com/playlist/1221037371",
          followers_total: "42.3K",
          image_url: "https://cdn-images.dzcdn.net/images/playlist/5c7ffde1e6cd2c79013b1aed2fcad6e2/1000x1000-000000-80-0-0.jpg"
        }
      ]
    },
    {
      source: "tracklist",
      metric: "top_playlists",
      scope: "total",
      top_playlists: [
        {
          playlist_id: "p6rt6l",
          playlist_name: "Eclipse, Freedom Stage, Tomorrowland Weekend 2, Belgium",
          external_url: "https://1001.tl/1rb0chk9",
          followers_total: "14.6K",
          image_url: "https://i1.sndcdn.com/avatars-VoRSk0ogwlSw8tVk-dakhSQ-t500x500.jpg"
        },
        {
          playlist_id: "fgg8cu",
          playlist_name: "DJ Mag Top 100 DJs Virtual Festival",
          external_url: "https://1001.tl/18998nbt",
          followers_total: "11.1K",
          image_url: "https://cdn.1001.tl//images/artworks/djs/9/b/0/4/191006-artwork-afrojack-5d99e646b96a4-Medium.jpg"
        }
      ]
    }
  ],
  artist_info: {
    songstats_artist_id: "pod5zlug",
    avatar: "https://i.scdn.co/image/ab67616100005174385c7f6795314a83bff48a73",
    site_url: "https://songstats.com/artist/pod5zlug/dont-blink",
    name: "DONT BLINK"
  },
  source_ids: [
    "spotify",
    "apple_music",
    "amazon",
    "deezer",
    "instagram",
    "tiktok",
    "youtube",
    "shazam",
    "tracklist",
    "beatport",
    "traxsource",
    "itunes",
    "tidal",
    "soundcloud",
    "facebook",
    "twitter",
    "songkick",
    "bandsintown",
    "radio"
  ]
};

// Example function to display playlists
function displayPlaylists(data) {
  const container = document.getElementById("playlists-container");

  data.forEach(source => {
    // Create a section for each source
    const sourceSection = document.createElement("div");
    sourceSection.className = "source-section";

    // Add the source name as a heading
    const sourceHeading = document.createElement("h2");
    sourceHeading.textContent = `Source: ${source.source}`;
    sourceSection.appendChild(sourceHeading);

    // Add playlists for the source
    source.top_playlists.forEach(playlist => {
      const playlistDiv = document.createElement("div");
      playlistDiv.className = "playlist";

      // Add playlist name
      const playlistName = document.createElement("h3");
      playlistName.textContent = playlist.playlist_name;
      playlistDiv.appendChild(playlistName);

      // Add playlist followers
      const playlistFollowers = document.createElement("p");
      playlistFollowers.textContent = `Followers: ${playlist.followers_total}`;
      playlistDiv.appendChild(playlistFollowers);

      // Add playlist image
      const playlistImage = document.createElement("img");
      playlistImage.src = playlist.image_url;
      playlistImage.alt = playlist.playlist_name;
      playlistImage.style.width = "100px"; // Optional styling
      playlistDiv.appendChild(playlistImage);

      // Add playlist link
      const playlistLink = document.createElement("a");
      playlistLink.href = playlist.external_url;
      playlistLink.textContent = "View Playlist";
      playlistLink.target = "_blank"; // Open link in a new tab
      playlistDiv.appendChild(playlistLink);

      // Append playlist to the source section
      sourceSection.appendChild(playlistDiv);
    });

    // Append the source section to the container
    container.appendChild(sourceSection);
  });
}

// Call the function with the API data
displayPlaylists(apiData.data);