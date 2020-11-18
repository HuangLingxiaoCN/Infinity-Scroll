// Unsplash API
const count = 10;
const apiKey = 'r3-TLMnPnOP58x3cpsHiJXSqa_S3hhRU2f158OQ_X70';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API 
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch(err) {
    console.log('Oops, errrrrooor',err);
  }
}

// On load
getPhotos();