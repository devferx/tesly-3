const $mapPanel = document.querySelector(".map__panel");
const $mapNavigate = document.querySelector(".map__navigate");
const $mapPanelButton = document.querySelector(".map__panel__item-button");

const mapPanelToggleActive = () => $mapPanel.classList.toggle("active");

$mapNavigate.addEventListener("click", mapPanelToggleActive);

$mapPanelButton.addEventListener("click", mapPanelToggleActive);
