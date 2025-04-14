export function createArtistBioElement(bio) {
  const artistBioElement = document.createElement("div");
  artistBioElement.setAttribute("class", "artist-bio");

  const artistBioElementHeader = document.createElement("h3");
  const artistBioElementHeaderTextNode = document.createTextNode(`📝 Bio`);
  artistBioElementHeader.appendChild(artistBioElementHeaderTextNode);

  const artistBioElementParagraph = document.createElement("p");
  const artistBioElementParagraphTextNode = document.createTextNode(bio);
  artistBioElementParagraph.appendChild(artistBioElementParagraphTextNode);

  artistBioElement.appendChild(artistBioElementHeader);
  artistBioElement.appendChild(artistBioElementParagraph);
  return artistBioElement;
}

export function createArtistNameElement(artistName) {
  const artistNameElement = document.createElement("div");
  artistNameElement.setAttribute("class", "artist-name");

  const artistNameElementHeader = document.createElement("h2");
  const artistNameElementHeaderTextNode = document.createTextNode(artistName);

  artistNameElementHeader.appendChild(artistNameElementHeaderTextNode);

  artistNameElement.appendChild(artistNameElementHeader);
  return artistNameElement;
}

export function createArtistShortNameElement(artistShortName) {
  const artistShortNameElement = document.createElement("div");
  artistShortNameElement.setAttribute("class", "artist-short-name");

  const artistShortNameParagraph = document.createElement("p");
  const artistShortNameParagraphTextNode =
    document.createTextNode(artistShortName);

  artistShortNameParagraph.appendChild(artistShortNameParagraphTextNode);

  artistShortNameElement.appendChild(artistShortNameParagraph);
  return artistShortNameElement;
}

export function createArtistReknownNameElement(artistReknownName) {
  const artistReknowElement = document.createElement("div");
  artistReknowElement.setAttribute("class", "artist-reknow");

  const artistReknownNameParagraph = document.createElement("p");
  const artistReknownNameParagraphTextNode =
    document.createTextNode(artistReknownName);

  artistReknownNameParagraph.appendChild(artistReknownNameParagraphTextNode);

  artistReknowElement.appendChild(artistReknownNameParagraph);
  return artistReknowElement;
}

export function createArtistElement() {
  const artistElement = document.createElement("div");
  artistElement.setAttribute("class", "artist");
  return artistElement;
}

export function getArtistCardComponents(artist) {
  const artistNameElement = createArtistNameElement(artist.name);
  const artistShortNameElement = createArtistShortNameElement(artist.shortname);
  const artistReknownNameElement = createArtistReknownNameElement(
    artist.reknown
  );
  const artistBioElement = createArtistBioElement(artist.bio);
  const artistElementsComponent = [
    artistNameElement,
    artistShortNameElement,
    artistReknownNameElement,
    artistBioElement,
  ];
  return artistElementsComponent;
}
