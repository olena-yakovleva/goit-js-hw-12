import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

export function renderImages(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <li>
      <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      </a>
      <div class="info">
        <p>Likes:<br /><span>${likes}</span></p>
        <p>Views:<br /><span>${views}</span></p>
        <p>Comments:<br /><span>${comments}</span></p>
        <p>Downloads:<br /><span>${downloads}</span></p>
      </div>
    </li>
  `
    )

    //     .join('');
    //   gallery.innerHTML = markup;
    //   new SimpleLightbox('.gallery a', {
    //     captionsData: 'alt',
    //     captionDelay: 250,
    //   }).refresh();
    // }

    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  }).refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  document.querySelector('.loader').classList.remove('hidden');
}

export function hideLoader() {
  document.querySelector('.loader').classList.add('hidden');
}

export function showLoadMoreButton() {
  document.querySelector('#load-more').classList.remove('hidden');
}

export function hideLoadMoreButton() {
  document.querySelector('#load-more').classList.add('hidden');
}
