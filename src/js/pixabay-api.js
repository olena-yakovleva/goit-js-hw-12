import axios from 'axios';
// axios.get('/users').then(res => {
//   console.log(res.data);
// });
const API_KEY = '45288911-2aee760e8debc477a1c950329';
const BASE_URL = 'https://pixabay.com/api/';

// export async function fetchImages(query) {
//   const params = new URLSearchParams({
//     key: API_KEY,
//     q: query,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: 'true',
//   });

export async function fetchImages(query, page = 1, perPage = 15) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page,
    per_page: perPage,
  });
  //   try {
  //     const response = await fetch(`${BASE_URL}?${params.toString()}`);
  //     if (!response.ok) {
  //       throw new Error(response.statusText);
  //     }
  //     return await response.json();
  //   } catch (error) {
  //     console.error('Error fetching images:', error);
  //     throw error;
  //   }
  // }

  try {
    const response = await axios.get(`${BASE_URL}?${params.toString()}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}
