import getArtists from "./artists/api/artists.api.js";
import { getArtistCardComponents } from "./artists/helpers/artists.helpers.js";

document.addEventListener("DOMContentLoaded", async () => {
  const artistsSection = document.getElementById("artists-section");
  const artistsElement = document.createElement("div");
  artistsElement.setAttribute("class", "artists");
  artistsSection.appendChild(artistsElement);

  const artistElement = document.createElement("div");
  artistElement.setAttribute("class", "artist");
  artistsElement.appendChild(artistElement);

  const artists = await getArtists();
  artists.forEach((artist) => {
    const atistCardComponents = getArtistCardComponents(artist);
    atistCardComponents.forEach((component) => {
      artistElement.appendChild(component);
    });
  });
});
