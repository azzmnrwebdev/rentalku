"use strict";

let datas = [
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

datas.forEach((item) => {
  listProduct.innerHTML += `<div class="card">
              <img src=${item.imgSrc} class="card-img-top" alt="Mobil">
              <div class="card-body">
                  <a href="#" class="card-title"><h4>${item.title}</h4></a>
                  <p class="card-text ellipsis">${item.desc}</p>
                  <span class="card-harga">${item.harga}</span>
              </div>
            </div>`;
});
