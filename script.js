
function setLanguage() {
  const lang = document.getElementById("language").value;
  const slogan = {
    sk: "Vôňa, chuť, tradícia. Objav Trdelník, ako ho ešte nepoznáš!",
    hu: "Illat, íz, hagyomány. Fedezd fel a kürtőskalácsot, ahogy még soha!",
    en: "Aroma, taste, tradition. Discover Trdelník like never before!"
  };
  document.getElementById("slogan").textContent = slogan[lang];
  const flavors = document.querySelectorAll(".flavor");
  flavors.forEach(flavor => {
    flavor.textContent = flavor.dataset[lang];
  });
  const btn = document.querySelector("button");
  btn.textContent = {
    sk: "Zisti kde sme dnes!",
    hu: "Tudd meg, hol vagyunk ma!",
    en: "Find out where we are today!"
  }[lang];
}
function findUs() {
  window.open("https://maps.google.com", "_blank");
}
window.onload = setLanguage;
