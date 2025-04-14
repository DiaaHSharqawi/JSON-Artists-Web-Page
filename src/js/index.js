import getArtists from "./artists/api/artists.api.js";
import {
  createArtistElement,
  getArtistCardComponents,
} from "./artists/helpers/artists.helpers.js";

let artistsSection = document.getElementById("artists-section");

document.addEventListener("DOMContentLoaded", async () => {
  const artistsElement = document.createElement("div");
  artistsElement.setAttribute("class", "artists");
  artistsSection.appendChild(artistsElement);

  const artists = await getArtists();

  artists.forEach((artist) => {
    const artistCardElement = createArtistElement();
    artistsElement.appendChild(artistCardElement);

    const atistCardComponents = getArtistCardComponents(artist);
    atistCardComponents.forEach((component) => {
      artistCardElement.appendChild(component);
    });
  });
});
