const API_URL =
  "https://gist.githubusercontent.com/planetoftheweb/98f35786733c8cccf81e/raw/f3dad774ed1fe20b36011b1261bb392ee759b867/data.json";

export default async function getArtists() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}
