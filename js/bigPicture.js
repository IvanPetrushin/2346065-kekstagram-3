const imageUpload = document.querySelector('.img-upload__overlay');
const fileInput = document.querySelector('.img-upload__input');
const closeImageUploadButton = document.querySelector('.img-upload__cancel');

function escapeKeyHandler(ev) {
  if (ev.key === 'Escape') {
    closeImageUpload();
  }
}

function closeImageUpload() {
  imageUpload.classList.add('hidden');
  document.removeEventListener('keydown', escapeKeyHandler);
}

function openImageUpload() {
  imageUpload.classList.remove('hidden');
  document.addEventListener('keydown', escapeKeyHandler);
}

fileInput.addEventListener('change', openImageUpload);
closeImageUploadButton.addEventListener('click', closeImageUpload);
