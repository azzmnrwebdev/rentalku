"use strict";

// list data produk
const cars = [
  {
    imgSrc: `https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
    title: "TOYOTA FORTUNER G 2,5 AT 2.5 AT Diesel 2014",
    desc: `Jarak Tempuh: 158.177 KM
            <br/>Tahun Produksi: 2014
            <br/>Transmisi: Otomatis
            <br/>Bahan Bakar: Diesel
            <br/>Warna: Putih
            <br/>STNK: Pribadi
            <br/>Pajak: Hidup`,
    harga: "Rp 298.000.000",
  },
  {
    imgSrc: `https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNhcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60`,
    title: "HONDA ALL NEW JAZZ RS CVT 1.5 AT Bensin 2019",
    desc: `Jarak Tempuh: 46.104 KM
            <br/>Tahun Produksi: 2019
            <br/>Transmisi: Otomatis
            <br/>Bahan Bakar: Bensin
            <br/>Warna: Putih
            <br/>STNK: Pribadi
            <br/>Pajak: Hidup`,
    harga: "Rp 275.000.000",
  },
  {
    imgSrc: `https://images.unsplash.com/photo-1523983302122-73e869e1f850?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym13JTIwY2FyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
    title: "BMW Series 5 20i Sport 2,0 AT Bensin 2013",
    desc: `Jarak Tempuh: 98.000 KM
            <br/>Tahun Produksi: 2013
            <br/>Transmisi: Otomatis
            <br/>Bahan Bakar: Bensin
            <br/>Warna: Hitam
            <br/>STNK: Pribadi
            <br/>Pajak: Hidup`,
    harga: "Rp 485.250.000",
  },
  {
    imgSrc: `https://images.unsplash.com/photo-1551836989-b4622a17a792?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWVyY2VkZXMlMjBiZW56fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
    title: "MERCEDES BENZ C-Class 200 CGI 1,8 AT Bensin 2013",
    desc: `Jarak Tempuh: 61.567 KM
            <br/>Tahun Produksi: 2013
            <br/>Transmisi: Otomatis
            <br/>Bahan Bakar: Bensin
            <br/>Warna: Putih
            <br/>STNK: Pribadi
            <br/>Pajak: Hidup`,
    harga: "Rp 233.750.000",
  },
  {
    imgSrc: `https://images.unsplash.com/photo-1600016325934-f6e4100c921a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWluaSUyMGNvb3BlcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60`,
    title: "MINI COOPER S Paceman Turbo 1,5 MT BENSIN 2013",
    desc: `Jarak Tempuh: 20.000 KM
            <br/>Tahun Produksi: 2013
            <br/>Transmisi: Manual
            <br/>Bahan Bakar: Bensin
            <br/>Warna: Orange
            <br/>STNK: Pribadi
            <br/>Pajak: Hidup`,
    harga: "Rp 870.000.000",
  },
  {
    imgSrc: `https://images.unsplash.com/photo-1610768207795-72169abdf0d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbmRhJTIwY2FyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
    title: "HONDA CIVIC TURBO Hatchback S CVT 1,5 AT Bensin 2020",
    desc: `Jarak Tempuh: 13.000 KM
            <br/>Tahun Produksi: 2020
            <br/>Transmisi: Automatic
            <br/>Bahan Bakar: Bensin
            <br/>Warna: Merah
            <br/>STNK: Pribadi
            <br/>Pajak: Hidup`,
    harga: "Rp 600.000.000",
  },
];

let listProduct = document.querySelector("#list-product");
cars.forEach((i) => {
  listProduct.innerHTML += `<div class="card">
    <img src=${i.imgSrc} class="card-img-top" alt="${i.title}">
    <div class="card-body">
      <a href="#" class="card-title"><h4 title="${i.title}">${i.title}</h4></a>
      <p class="card-text ellipsis">${i.desc}</p>
      <span class="card-harga">${i.harga}</span>
    </div>
  </div>`;
});

// list data blog
const blogs = [
  {
    id: 1,
    imgSrc: `https://images.unsplash.com/photo-1605756580041-21312e9fb2bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9uZGElMjBjaXZpYyUyMHR5cGUlMjByfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
    title: "Honda Civic Type R 2023 Meluncur, Mobil FWD Terkencang",
    category: "Hot Issue",
    author: {
      id: 1,
      name: "Author 1",
    },
    rilis: "22 Juli 2022",
    desc: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
  },
  {
    id: 2,
    imgSrc: `https://images.unsplash.com/photo-1630356220213-f812ff62bdeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGNhciUyMGV2ZW50fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
    title: "Wow! Harga Mobil BMW F30 Sport Sedang Turun Harga",
    category: "Hot Issue",
    author: {
      id: 2,
      name: "Author 2",
    },
    rilis: "21 Juli 2022",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    id: 3,
    imgSrc: `https://images.unsplash.com/photo-1596986952526-3be237187071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGNhciUyMGdhcmFnZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60`,
    title:
      "Rekomendasi Bengkel Mobil Terbaik di Jakarta dan Kota Besar Lainnya",
    category: "Hot Issue",
    author: {
      id: 3,
      name: "Author 3",
    },
    rilis: "21 Juli 2022",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
];

let listBlog = document.querySelector("#list-blog");
blogs.forEach((i) => {
  listBlog.innerHTML += `<div class="card">
      <img src=${i.imgSrc} class="card-img-top" alt="${i.title}">
      <div class="card-body">
        <span class="card-category">${i.category}</span>
        <a href="#" class="card-title" style="margin-top: 15px;"><h4 title="${i.title}">${i.title}</h4></a>
        <p class="card-text ellipsis">${i.desc}</p>
        <span class="card-rilis">${i.rilis}</span>
      </div>
  </div>`;
});

// Navigation bar
const menuToggle = document.querySelector(".navbar-toggle");
const nav = document.querySelector(".navbar .navbar-nav");
let navIcon = document.querySelector(".navbar-toggle-icon");
let icon = navIcon.querySelector(".fa-bars");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");

  if (icon.classList.contains("fa-bars")) {
    icon.classList.replace("fa-bars", "fa-xmark");
  } else {
    icon.classList.replace("fa-xmark", "fa-bars");
  }
});

// Image slider
let indexValue = 1;
showImg(indexValue);

function btnSlide(e) {
  showImg((indexValue = e));
}

function navigation(e) {
  showImg((indexValue += e));
}

function showImg(e) {
  const slideImg = document.querySelectorAll(".slide-img");
  const sliders = document.querySelectorAll(".btn-sliders span");

  if (e > slideImg.length) {
    indexValue = 1;
  }

  if (e < 1) {
    indexValue = slideImg.length;
  }

  for (let i = 0; i < slideImg.length; i++) {
    slideImg[i].style.display = "none";
  }
  for (let i = 0; i < sliders.length; i++) {
    sliders[i].style.background = "#cbd5e1";
  }

  slideImg[indexValue - 1].style.display = "block";
  sliders[indexValue - 1].style.background = "#14b8a6";
}
