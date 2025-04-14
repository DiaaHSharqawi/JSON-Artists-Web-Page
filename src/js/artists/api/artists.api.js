const API_URL =
  "https://gist.githubusercontent.com/planetoftheweb/98f35786733c8cccf81e/raw/f3dad774ed1fe20b36011b1261bb392ee759b867/data.json";

export default async function getArtists() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      console.error(response);
      throw new Error(`Faild to fetch!`);
    }
    const data = await response.json();
    console.info(data);
    return data;
  } catch (error) {
    console.error(`An error happend!`);
    console.error(error);
    return null;
  }
}
