const popupOverlay = document.querySelector('.popup-overlay');
const popupClose = document.querySelector('.popup-close');

setTimeout(() => {
	popupOverlay.classList.toggle('hidden');
}, 10000);

popupClose.addEventListener('click', () => {
	popupOverlay.classList.toggle('hidden');
});