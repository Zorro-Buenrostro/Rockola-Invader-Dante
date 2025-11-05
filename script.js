const items = [
  { cover: "Badmj.jpg", src: "Bad.mp3", title: "Bad - Michael Jackson" },
  {
    cover: "Blue-Hawaii.jpg",
    src: "Can't-Help-Falling-in Love.mp3",
    title: "Can't Help Falling in Love - Elvis",
  },
  {
    cover: "Selena.jpeg",
    src: "Como-La-Flor.mp3",
    title: "Como La Flor - Selena",
  },
  {
    cover: "Yem.jpg",
    src: "Por-Si-No-Te-Vuelvo-A-Ver.mp3",
    title: "Por Si No Te Vuelvo a Ver - Morat",
  },
  {
    cover: "Onda-Vaselina.jpg",
    src: "Vuela-Más-Alto.mp3",
    title: "Vuela Más Alto - Onda Vaselina",
  },
  {
    cover: "oo1990.jpg",
    src: "SpotiDownloader.com - La chica yeyé - Ole Ole.mp3",
    title: "La Chica Yeyé - Ole Ole",
  },
  {
    cover: "LosTeenTops.png",
    src: "SpotiDownloader.com - La Plaga - Enrique Guzman.mp3",
    title: "La Plaga - Los Teen Tops",
  },
  {
    cover: "RockShow.jpg",
    src: "corro,vuelo,me acelero.mp3",
    title: "Corro, Vuelo, Me Acelero - Timbiriche",
  },
  {
    cover: "31minutos4.jpg",
    src: "SpotiDownloader.com - Son Pololos - 31 Minutos.mp3",
    title: "Son Pololos - La Corchetis",
  },
  {
    cover: "Mecano.jpg",
    src: "SpotiDownloader.com - Hawaii-Bombay - Mecano.mp3",
    title: "Hawaii Bombay - Mecano",
  },
];

let currentIndex = 0;
const carouselContent = document.getElementById("carousel-content");
const prevPreview = document.getElementById("prev-preview");
const nextPreview = document.getElementById("next-preview");

function showItem(index) {
  const item = items[index];
  carouselContent.style.opacity = "0";

  setTimeout(() => {
    carouselContent.innerHTML = "";

    const wrapper = document.createElement("div");
    wrapper.classList.add("image-wrapper");

    const img = document.createElement("img");
    img.src = item.cover;
    wrapper.appendChild(img);
    carouselContent.appendChild(wrapper);

    const info = document.createElement("div");
    info.classList.add("song-info");
    info.innerText = item.title;
    carouselContent.appendChild(info);

    const audio = document.createElement("audio");
    audio.src = item.src;
    audio.controls = true;
    audio.classList.add("play-button");
    carouselContent.appendChild(audio);

    carouselContent.style.opacity = "1";
  }, 200);

  const prevIndex = (index - 1 + items.length) % items.length;
  const nextIndex = (index + 1) % items.length;
  showPreview(prevPreview, prevIndex);
  showPreview(nextPreview, nextIndex);
}

function showPreview(previewElement, index) {
  const item = items[index];
  previewElement.innerHTML = "";
  const img = document.createElement("img");
  img.src = item.cover;
  previewElement.appendChild(img);
}

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  showItem(currentIndex);
});

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showItem(currentIndex);
});

showItem(currentIndex);
