import getArtists from "./artists/api/artists.api.js";
import {
  createArtistElement,
  getArtistCardComponents,
} from "./artists/helpers/artists.helpers.js";

let artistsSection = document.getElementById("artists-section");
const loader = document.getElementById("loader");

function triggerLoader(isLoading) {
  artistsSection.style.display = isLoading ? "none" : "flex";
  loader.style.display = isLoading ? "flex" : "none";
}

document.addEventListener("DOMContentLoaded", async () => {
  const artistsElement = document.createElement("div");
  artistsElement.setAttribute("class", "artists");
  artistsSection.appendChild(artistsElement);

  triggerLoader(true);

  try {
    const artists = await getArtists();
    const artistsHasContent = artists.length > 0;
    if (artistsHasContent) {
      setTimeout(() => {
        triggerLoader(false);
      }, 500);
      artists.forEach((artist) => {
        const artistCardElement = createArtistElement();
        artistsElement.appendChild(artistCardElement);

        const atistCardComponents = getArtistCardComponents(artist);
        atistCardComponents.forEach((component) => {
          artistCardElement.appendChild(component);
        });
      });
    }
  } catch (error) {
    console.error(`An error happen!`);
    return;
  }
});
