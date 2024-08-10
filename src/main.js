import { fetchImages } from './js/pixabay-api.js';
import {
  renderImages,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const loadMoreBtn = document.querySelector('#load-more');

let query = '';
let page = 1;
let totalHits = 0;

form.addEventListener('submit', async event => {
  event.preventDefault();

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  query = event.currentTarget.elements.query.value.trim();
  page = 1;

  if (!query) {
    iziToast.error({
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  try {
    const data = await fetchImages(query, page);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    } else {
      renderImages(data.hits);
      if (totalHits > 15) {
        showLoadMoreButton();
      }
    }
  } catch (error) {
    iziToast.error({ title: 'Error', message: error.message });
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  showLoader();

  try {
    const data = await fetchImages(query, page);
    renderImages(data.hits);

    if (page * 15 >= totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      smoothScroll();
    }
  } catch (error) {
    iziToast.error({ title: 'Error', message: error.message });
  } finally {
    hideLoader();
  }
});

// function hideLoadMoreButton() {
//   loadMoreBtn.classList.add('hidden');
// }

// function showLoadMoreButton() {
//   loadMoreBtn.classList.remove('hidden');
// }

function smoothScroll() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

// Hide the Load More button initially
// hideLoadMoreButton();
