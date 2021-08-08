const $mapPanel = document.querySelector(".map__panel");
const $mapNavigate = document.querySelector(".map__navigate");
const $mapPanelButton = document.querySelector(".map__panel__item-button");
const $exitButton = document.querySelector(".exit-button");
const $footerButtons = document.querySelectorAll(".footer .icon");
const $configButton = document.getElementById("config-button");
const $mapConfig = document.getElementById("map-config");
// Switches
const $walkupSwitch = document.getElementById("walkup");
const $walkAwaySwitch = document.getElementById("walk-away");
const $childProtectionSwitch = document.getElementById("child-protection");
const $parkSwitch = document.getElementById("park");

function toggleActive() {
  this.classList.toggle("active");
}

function mapPanelToggleActive() {
  $mapPanel.classList.toggle("active");
}
function mapConfigToggleActive() {
  $mapConfig.classList.toggle("active");
}

$mapNavigate.addEventListener("click", mapPanelToggleActive);
$mapPanelButton.addEventListener("click", mapPanelToggleActive);

$exitButton.addEventListener("click", mapConfigToggleActive);
$footerButtons.forEach((icon) =>
  icon.addEventListener("click", mapConfigToggleActive)
);
$configButton.addEventListener("click", mapConfigToggleActive);

$walkupSwitch.addEventListener("click", toggleActive);
$walkAwaySwitch.addEventListener("click", toggleActive);
$childProtectionSwitch.addEventListener("click", toggleActive);
$parkSwitch.addEventListener("click", toggleActive);
