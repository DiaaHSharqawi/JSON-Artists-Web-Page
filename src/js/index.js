import getArtists from "./artists/api/artists.js";
import {
  createArtistBioElement,
  createArtistNameElement,
  createArtistReknownNameElement,
  createArtistShortNameElement,
} from "./artists/helpers/artists.helpers.js";

document.addEventListener("DOMContentLoaded", async () => {
  const artists = await getArtists();

  const artistsSection = document.getElementById("artists-section");

  const artistsElement = document.createElement("div");
  artistsElement.setAttribute("class", "artists");

  artistsSection.appendChild(artistsElement);

  const artistElement = document.createElement("div");
  artistElement.setAttribute("class", "artist");
  artistsElement.appendChild(artistElement);

  // artistElement components

  artists.map((artist) => {
    const artistNameElement = createArtistNameElement(artist.name);
    artistElement.appendChild(artistNameElement);

    const artistShortNameElement = createArtistShortNameElement(
      artist.shortname
    );
    artistElement.appendChild(artistShortNameElement);

    const artistReknownNameElement = createArtistReknownNameElement(
      artist.reknown
    );
    artistElement.appendChild(artistReknownNameElement);

    const artistBioElement = createArtistBioElement(artist.bio);
    artistElement.appendChild(artistBioElement);
  });
});
