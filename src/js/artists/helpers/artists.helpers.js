export function createArtistBioElement(bio) {
  const artistNameElement = document.createElement("p");
  const artistNameElementTextNode = document.createTextNode(bio);
  artistNameElement.appendChild(artistNameElementTextNode);
  return artistNameElement;
}

export function createArtistNameElement(artistName) {
  const artistNameElement = document.createElement("h2");
  const artistNameElementTextNode = document.createTextNode(artistName);
  artistNameElement.appendChild(artistNameElementTextNode);
  return artistNameElement;
}

export function createArtistShortNameElement(artistShortName) {
  const artistShortNameElement = document.createElement("span");
  const artistShortNameElementTextNode =
    document.createTextNode(artistShortName);
  artistShortNameElement.appendChild(artistShortNameElementTextNode);
  return artistShortNameElement;
}

export function createArtistReknownNameElement(artistReknownName) {
  const artistReknownNameElement = document.createElement("p");
  const artistReknownNameElementTextNode =
    document.createTextNode(artistReknownName);
  artistReknownNameElement.appendChild(artistReknownNameElementTextNode);
  return artistReknownNameElement;
}
