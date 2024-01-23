new Splide(".splide", {
  type: "loop",
  padding: {
    right: "5rem",
    left: "5rem",
  },
  width: "60%",
  breakpoints: {
    768: {
      width: "90%",
    },
    475: {
      padding: {
        right: "1rem",
        left: "1rem",
      },
      gap: "1rem",
      width: "100%",
    },
    662: {
      padding: {
        right: "1rem",
        left: "1rem",
      },
      gap: "1rem",
      width: "100%",
    },
  },
}).mount();

const menu = document.querySelector(".menu");
const btn = menu.querySelector(".nav-tgl");
var elements = document.querySelectorAll("#list li");
var navlist = document.getElementById("navlist");

const denims = document.getElementById("denims");
const kurti = document.getElementById("kurti");
const bridal = document.getElementById("bridal");
const drapes = document.getElementById("drapes");
const cdresses = document.getElementById("cdresses");
const tunics = document.getElementById("tunics");
const midis = document.getElementById("midis");
const jwithd = document.getElementById("jwithd");
const coats = document.getElementById("coats");
const fcuts = document.getElementById("fcuts");
const rdresses = document.getElementById("rdresses");
const pandnb = document.getElementById("pandnb");
const ddesigns = document.getElementById("ddesigns");
const jwithj = document.getElementById("jwithj");
const ldresses = document.getElementById("ldresses");
const sdresses = document.getElementById("sdresses");
const asuits = document.getElementById("asuits");
const gdresses = document.getElementById("gdresses");
const kpalazo = document.getElementById("kpalazo");

// const lightbox = GLightbox({
//   touchNavigation: true,
//   loop: true,
//   onOpen: () => {
//     console.log("Lightbox opened");
//   },
// });

const S = GLightbox({
  touchNavigation: true,
  loop: true,
  elements: [
    {
      href: "assets/Denim designs/1.jpg",
      type: "image",
    },
    {
      href: "assets/Denim designs/2.jpg",
      type: "image",
    },
    {
      href: "assets/Denim designs/3.jpg",
      type: "image",
    },
    {
      href: "assets/Denim designs/4.jpg",
      type: "image",
    },
    {
      href: "assets/Denim designs/5.jpg",
      type: "image",
    },
    {
      href: "assets/Denim designs/6.jpg",
      type: "image",
    },
    {
      href: "assets/Denim designs/7.jpg",
      type: "image",
    },
    {
      href: "assets/Denim designs/8.jpg",
      type: "image",
    },
    {
      href: "assets/Denim designs/9.jpg",
      type: "image",
    },
    {
      href: "assets/Denim designs/10.jpg",
      type: "image",
    },
    {
      href: "assets/Denim designs/11.jpg",
      type: "image",
    },
    {
      href: "assets/Denim designs/12.jpg",
      type: "image",
    },
  ],
});
const S1 = GLightbox({
  touchNavigation: true,
  loop: true,
  elements: [
    {
      href: "assets/Kurtis/1.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/2.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/3.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/4.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/5.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/6.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/7.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/8.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/9.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/10.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/11.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/12.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/13.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/14.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/15.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/16.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/17.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/18.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/19.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/20.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/21.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/22.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/23.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/24.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/25.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/26.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/27.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/28.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/29.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/30.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/31.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/32.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/33.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/34.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/35.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/36.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/37.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/38.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/39.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/40.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/41.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/42.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/43.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/44.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/45.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/46.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/47.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/48.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/49.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/50.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/51.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/52.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/53.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/54.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/55.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/56.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/57.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/58.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/59.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/60.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/61.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/62.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/63.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/64.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/65.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/66.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/67.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/68.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/69.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/70.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/71.jpg",
      type: "image",
    },
    {
      href: "assets/Kurtis/72.jpg",
      type: "image",
    },
  ],
});
const S2 = GLightbox({
  touchNavigation: true,
  loop: true,
  elements: [
    {
      href: "assets/Bridal dresses/1.jpg",
      type: "image",
    },
    {
      href: "assets/Bridal dresses/2.jpg",
      type: "image",
    },
    {
      href: "assets/Bridal dresses/3.jpg",
      type: "image",
    },
    {
      href: "assets/Bridal dresses/4.jpg",
      type: "image",
    },
    {
      href: "assets/Bridal dresses/5.jpg",
      type: "image",
    },
    {
      href: "assets/Bridal dresses/6.jpg",
      type: "image",
    },
    {
      href: "assets/Bridal dresses/7.jpg",
      type: "image",
    },
    {
      href: "assets/Bridal dresses/8.jpg",
      type: "image",
    },
    {
      href: "assets/Bridal dresses/9.jpg",
      type: "image",
    },
    {
      href: "assets/Bridal dresses/10.jpg",
      type: "image",
    },
    {
      href: "assets/Bridal dresses/11.jpg",
      type: "image",
    },
    {
      href: "assets/Bridal dresses/12.jpg",
      type: "image",
    },
    {
      href: "assets/Bridal dresses/13.jpg",
      type: "image",
    },
    {
      href: "assets/Bridal dresses/14.jpg",
      type: "image",
    },
    {
      href: "assets/Bridal dresses/15.jpg",
      type: "image",
    },
    {
      href: "assets/Bridal dresses/16.jpg",
      type: "image",
    },
    {
      href: "assets/Bridal dresses/17.jpg",
      type: "image",
    },
    {
      href: "assets/Bridal dresses/18.jpg",
      type: "image",
    },
  ],
});
const S3 = GLightbox({
  touchNavigation: true,
  loop: true,
  elements: [
    {
      href: "assets/Drape/1.jpg",
      type: "image",
    },
    {
      href: "assets/Drape/2.jpg",
      type: "image",
    },
    {
      href: "assets/Drape/3.jpg",
      type: "image",
    },
    {
      href: "assets/Drape/4.jpg",
      type: "image",
    },
    {
      href: "assets/Drape/5.jpg",
      type: "image",
    },
    {
      href: "assets/Drape/6.jpg",
      type: "image",
    },
  ],
});
const S4 = GLightbox({
  touchNavigation: true,
  loop: true,
  elements: [
    {
      href: "assets/Cowled dresses/1.jpg",
      type: "image",
    },
    {
      href: "assets/Cowled dresses/2.jpg",
      type: "image",
    },
    {
      href: "assets/Cowled dresses/3.jpg",
      type: "image",
    },
    {
      href: "assets/Cowled dresses/4.jpg",
      type: "image",
    },
  ],
});
const S5 = GLightbox({
  touchNavigation: true,
  loop: true,
  elements: [
    {
      href: "assets/Tunics/1.jpg",
      type: "image",
    },
    {
      href: "assets/Tunics/2.jpg",
      type: "image",
    },
    {
      href: "assets/Tunics/3.jpg",
      type: "image",
    },
    {
      href: "assets/Tunics/4.jpg",
      type: "image",
    },
  ],
});
const S6 = GLightbox({
  touchNavigation: true,
  loop: true,
  elements: [
    {
      href: "assets/Midis/1.jpg",
      type: "image",
    },
    {
      href: "assets/Midis/2.jpg",
      type: "image",
    },
    {
      href: "assets/Midis/3.jpg",
      type: "image",
    },
  ],
});
const S7 = GLightbox({
  touchNavigation: true,
  loop: true,
  elements: [
    {
      href: "assets/Jumpsuits with drape/1.jpg",
      type: "image",
    },
    {
      href: "assets/Jumpsuits with drape/2.jpg",
      type: "image",
    },
    {
      href: "assets/Jumpsuits with drape/3.jpg",
      type: "image",
    },
    {
      href: "assets/Jumpsuits with drape/4.jpg",
      type: "image",
    },
    {
      href: "assets/Jumpsuits with drape/5.jpg",
      type: "image",
    },
  ],
});
const S8 = GLightbox({
  touchNavigation: true,
  loop: true,
  elements: [
    {
      href: "assets/Coats/1.jpg",
      type: "image",
    },
    {
      href: "assets/Coats/2.jpg",
      type: "image",
    },
    {
      href: "assets/Coats/3.jpg",
      type: "image",
    },
    {
      href: "assets/Coats/4.jpg",
      type: "image",
    },
    {
      href: "assets/Coats/5.jpg",
      type: "image",
    },
    {
      href: "assets/Coats/6.jpg",
      type: "image",
    },
  ],
});
const S9 = GLightbox({
  touchNavigation: true,
  loop: true,
  elements: [
    {
      href: "assets/Fish cut skirt/1.jpg",
      type: "image",
    },
    {
      href: "assets/Fish cut skirt/2.jpg",
      type: "image",
    },
    {
      href: "assets/Fish cut skirt/3.jpg",
      type: "image",
    },
    {
      href: "assets/Fish cut skirt/4.jpg",
      type: "image",
    },
    {
      href: "assets/Fish cut skirt/5.jpg",
      type: "image",
    },
    {
      href: "assets/Fish cut skirt/6.jpg",
      type: "image",
    },
    {
      href: "assets/Fish cut skirt/7.jpg",
      type: "image",
    },
    {
      href: "assets/Fish cut skirt/8.jpg",
      type: "image",
    },
    {
      href: "assets/Fish cut skirt/9.jpg",
      type: "image",
    },
    {
      href: "assets/Fish cut skirt/10.jpg",
      type: "image",
    },
    {
      href: "assets/Fish cut skirt/11.jpg",
      type: "image",
    },
    {
      href: "assets/Fish cut skirt/12.jpg",
      type: "image",
    },
  ],
});
const S10 = GLightbox({
  touchNavigation: true,
  loop: true,
  elements: [
    {
      href: "assets/Ruffled dresses/1.jpg",
      type: "image",
    },
    {
      href: "assets/Ruffled dresses/2.jpg",
      type: "image",
    },
    {
      href: "assets/Ruffled dresses/3.jpg",
      type: "image",
    },
    {
      href: "assets/Ruffled dresses/4.jpg",
      type: "image",
    },
    {
      href: "assets/Ruffled dresses/5.jpg",
      type: "image",
    },
    {
      href: "assets/Ruffled dresses/6.jpg",
      type: "image",
    },
    {
      href: "assets/Ruffled dresses/7.jpg",
      type: "image",
    },
  ],
});
const S11 = GLightbox({
  touchNavigation: true,
  loop: true,
  elements: [
    {
      href: "assets/Padded and Non-Padded blouses/1.jpg",
      type: "image",
    },
    {
      href: "assets/Padded and Non-Padded blouses/2.jpg",
      type: "image",
    },
    {
      href: "assets/Padded and Non-Padded blouses/3.jpg",
      type: "image",
    },
    {
      href: "assets/Padded and Non-Padded blouses/4.jpg",
      type: "image",
    },
    {
      href: "assets/Padded and Non-Padded blouses/5.jpg",
      type: "image",
    },
    {
      href: "assets/Padded and Non-Padded blouses/6.jpg",
      type: "image",
    },
    {
      href: "assets/Padded and Non-Padded blouses/7.jpg",
      type: "image",
    },
    {
      href: "assets/Padded and Non-Padded blouses/8.jpg",
      type: "image",
    },
    {
      href: "assets/Padded and Non-Padded blouses/9.jpg",
      type: "image",
    },
    {
      href: "assets/Padded and Non-Padded blouses/10.jpg",
      type: "image",
    },
    {
      href: "assets/Padded and Non-Padded blouses/11.jpg",
      type: "image",
    },
    {
      href: "assets/Padded and Non-Padded blouses/12.jpg",
      type: "image",
    },
    {
      href: "assets/Padded and Non-Padded blouses/13.jpg",
      type: "image",
    },
    {
      href: "assets/Padded and Non-Padded blouses/14.jpg",
      type: "image",
    },
    {
      href: "assets/Padded and Non-Padded blouses/15.jpg",
      type: "image",
    },
    {
      href: "assets/Padded and Non-Padded blouses/16.jpg",
      type: "image",
    },
    {
      href: "assets/Padded and Non-Padded blouses/17.jpg",
      type: "image",
    },
    {
      href: "assets/Padded and Non-Padded blouses/18.jpg",
      type: "image",
    },
  ],
});
const S12 = GLightbox({
  touchNavigation: true,
  loop: true,
  elements: [
    {
      href: "assets/Dupatta/1.jpg",
      type: "image",
    },
    {
      href: "assets/Dupatta/2.jpg",
      type: "image",
    },
    {
      href: "assets/Dupatta/3.jpg",
      type: "image",
    },
    {
      href: "assets/Dupatta/4.jpg",
      type: "image",
    },
    {
      href: "assets/Dupatta/5.jpg",
      type: "image",
    },
    {
      href: "assets/Dupatta/6.jpg",
      type: "image",
    },
    {
      href: "assets/Dupatta/7.jpg",
      type: "image",
    },
    {
      href: "assets/Dupatta/8.jpg",
      type: "image",
    },
  ],
});
const S13 = GLightbox({
  touchNavigation: true,
  loop: true,
  elements: [
    {
      href: "assets/Jumpsuits with jacket/1.jpg",
      type: "image",
    },
    {
      href: "assets/Jumpsuits with jacket/2.jpg",
      type: "image",
    },
    {
      href: "assets/Jumpsuits with jacket/3.jpg",
      type: "image",
    },
    {
      href: "assets/Jumpsuits with jacket/4.jpg",
      type: "image",
    },
    {
      href: "assets/Jumpsuits with jacket/5.jpg",
      type: "image",
    },
    {
      href: "assets/Jumpsuits with jacket/6.jpg",
      type: "image",
    },
  ],
});
const S14 = GLightbox({
  touchNavigation: true,
  loop: true,
  elements: [
    {
      href: "assets/Lehanga dresses/1.jpg",
      type: "image",
    },
    {
      href: "assets/Lehanga dresses/2.jpg",
      type: "image",
    },
    {
      href: "assets/Lehanga dresses/3.jpg",
      type: "image",
    },
    {
      href: "assets/Lehanga dresses/4.jpg",
      type: "image",
    },
    {
      href: "assets/Lehanga dresses/5.jpg",
      type: "image",
    },
    {
      href: "assets/Lehanga dresses/6.jpg",
      type: "image",
    },
    {
      href: "assets/Lehanga dresses/7.jpg",
      type: "image",
    },
    {
      href: "assets/Lehanga dresses/8.jpg",
      type: "image",
    },
    {
      href: "assets/Lehanga dresses/9.jpg",
      type: "image",
    },
    {
      href: "assets/Lehanga dresses/10.jpg",
      type: "image",
    },
    {
      href: "assets/Lehanga dresses/11.jpg",
      type: "image",
    },
    {
      href: "assets/Lehanga dresses/12.jpg",
      type: "image",
    },
    {
      href: "assets/Lehanga dresses/13.jpg",
      type: "image",
    },
    {
      href: "assets/Lehanga dresses/14.jpg",
      type: "image",
    },
    {
      href: "assets/Lehanga dresses/15.jpg",
      type: "image",
    },
    {
      href: "assets/Lehanga dresses/16.jpg",
      type: "image",
    },
    {
      href: "assets/Lehanga dresses/17.jpg",
      type: "image",
    },
    {
      href: "assets/Lehanga dresses/18.jpg",
      type: "image",
    },
    {
      href: "assets/Lehanga dresses/19.jpg",
      type: "image",
    },
    {
      href: "assets/Lehanga dresses/20.jpg",
      type: "image",
    },
    {
      href: "assets/Lehanga dresses/21.jpg",
      type: "image",
    },
  ],
});
const S15 = GLightbox({
  touchNavigation: true,
  loop: true,
  elements: [
    {
      href: "assets/Sharara dress/1.jpg",
      type: "image",
    },
    {
      href: "assets/Sharara dress/2.jpg",
      type: "image",
    },
    {
      href: "assets/Sharara dress/3.jpg",
      type: "image",
    },
    {
      href: "assets/Sharara dress/4.jpg",
      type: "image",
    },
    {
      href: "assets/Sharara dress/5.jpg",
      type: "image",
    },
    {
      href: "assets/Sharara dress/6.jpg",
      type: "image",
    },
    {
      href: "assets/Sharara dress/7.jpg",
      type: "image",
    },
    {
      href: "assets/Sharara dress/8.jpg",
      type: "image",
    },
    {
      href: "assets/Sharara dress/9.jpg",
      type: "image",
    },
    {
      href: "assets/Sharara dress/10.jpg",
      type: "image",
    },
  ],
});
const S16 = GLightbox({
  touchNavigation: true,
  loop: true,
  elements: [
    {
      href: "assets/Anarkali suits/1.jpg",
      type: "image",
    },
    {
      href: "assets/Anarkali suits/2.jpg",
      type: "image",
    },
    {
      href: "assets/Anarkali suits/3.jpg",
      type: "image",
    },
    {
      href: "assets/Anarkali suits/4.jpg",
      type: "image",
    },
    {
      href: "assets/Anarkali suits/5.jpg",
      type: "image",
    },
    {
      href: "assets/Anarkali suits/6.jpg",
      type: "image",
    },
    {
      href: "assets/Anarkali suits/7.jpg",
      type: "image",
    },
    {
      href: "assets/Anarkali suits/8.jpg",
      type: "image",
    },
    {
      href: "assets/Anarkali suits/9.jpg",
      type: "image",
    },
  ],
});
const S17 = GLightbox({
  touchNavigation: true,
  loop: true,
  elements: [
    {
      href: "assets/Garara dresses/1.jpg",
      type: "image",
    },
    {
      href: "assets/Garara dresses/2.jpg",
      type: "image",
    },
    {
      href: "assets/Garara dresses/3.jpg",
      type: "image",
    },
    {
      href: "assets/Garara dresses/4.jpg",
      type: "image",
    },
    {
      href: "assets/Garara dresses/5.jpg",
      type: "image",
    },
    {
      href: "assets/Garara dresses/6.jpg",
      type: "image",
    },
    {
      href: "assets/Garara dresses/7.jpg",
      type: "image",
    },
    {
      href: "assets/Garara dresses/8.jpg",
      type: "image",
    },
    {
      href: "assets/Garara dresses/9.jpg",
      type: "image",
    },
    {
      href: "assets/Garara dresses/10.jpg",
      type: "image",
    },
  ],
});
const S18 = GLightbox({
  touchNavigation: true,
  loop: true,
  elements: [
    {
      href: "assets/Kalidar plazzo/1.jpg",
      type: "image",
    },
    {
      href: "assets/Kalidar plazzo/2.jpg",
      type: "image",
    },
    {
      href: "assets/Kalidar plazzo/3.jpg",
      type: "image",
    },
    {
      href: "assets/Kalidar plazzo/4.jpg",
      type: "image",
    },
    {
      href: "assets/Kalidar plazzo/5.jpg",
      type: "image",
    },
  ],
});
// var list = document.getElementById('list')

denims.addEventListener("click", (evt) => {
  S.open();
});
kurti.addEventListener("click", (evt) => {
  S1.open();
});
bridal.addEventListener("click", (evt) => {
  S2.open();
});
drapes.addEventListener("click", (evt) => {
  S3.open();
});
cdresses.addEventListener("click", (evt) => {
  S4.open();
});
tunics.addEventListener("click", (evt) => {
  S5.open();
});
midis.addEventListener("click", (evt) => {
  S6.open();
});
jwithd.addEventListener("click", (evt) => {
  S7.open();
});
coats.addEventListener("click", (evt) => {
  S8.open();
});
fcuts.addEventListener("click", (evt) => {
  S9.open();
});
rdresses.addEventListener("click", (evt) => {
  S10.open();
});
pandnb.addEventListener("click", (evt) => {
  S11.open();
});
ddesigns.addEventListener("click", (evt) => {
  S12.open();
});
jwithj.addEventListener("click", (evt) => {
  S13.open();
});
ldresses.addEventListener("click", (evt) => {
  S14.open();
});
sdresses.addEventListener("click", (evt) => {
  S15.open();
});
asuits.addEventListener("click", (evt) => {
  S16.open();
});
gdresses.addEventListener("click", (evt) => {
  S17.open();
});
kpalazo.addEventListener("click", (evt) => {
  S18.open();
});

function fadeIn(el) {
  el.classList.add("show");
  el.classList.remove("hide");
}

function fadeOut(el) {
  el.classList.add("hide");
  el.classList.remove("show");
}

btn.addEventListener("click", (evt) => {
  console.log(elements);

  if (menu.className.indexOf("active") === -1) {
    sendfront();
    for (let i = 0; i < elements.length; i++) {
      setTimeout(function () {
        fadeIn(elements[i]);
      }, i * 100);
    }
  } else {
    // navlist.classList.add("back")
    for (let j = 0; j < elements.length; j++) {
      setTimeout(function () {
        fadeOut(elements[j]);
      }, j * 100);
    }
    sendback();
  }
});
function sendfront() {
  menu.classList.add("active");
  navlist.classList.add("front");
}
function sendback() {
  menu.classList.remove("active");
  navlist.classList.remove("front");
}
window.onload = function () {
  document.getElementById("button").onclick = function () {
    document.getElementById("modalOverlay").style.display = "none";
  };
};
// function initMap() {
//   var uluru = { lat: 28.669178, lng: 77.1052347 };
//   var map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 15,
//     center: uluru,
//   });
//   var marker = new google.maps.Marker({ position: uluru, map: map });
// }
