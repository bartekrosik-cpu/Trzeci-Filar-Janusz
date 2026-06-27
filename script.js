// Rok w stopce
var y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Menu mobilne
var nav = document.getElementById('nav');
var toggle = document.getElementById('navToggle');
if (nav && toggle) {
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('.nav__links a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });
}

// Produkty (tylko na stronie głównej) — łatwe do edycji dane
var grid = document.getElementById('productGrid');
if (grid) {
  var IMG = "https://trzecifilar.com/media/com_hikashop/upload/";              // oryginały
  var THUMB = "https://trzecifilar.com/media/com_hikashop/upload/thumbnails/100x100f/"; // fallback
  var products = [
    {name:"Alkomat ALKOHIT X100", cat:"Alkomaty dowodowe", price:"840,00", tag:"Promocja", note:"Na ustnik i lejek. Szkolenie on-line gratis.", img:"alkohit_x100_lej.jpg"},
    {name:"ALKOHIT X100 z drukarką", cat:"Alkomaty dowodowe", price:"1 750,00", tag:"", note:"Wydruk wyniku pomiaru. Szkolenie on-line gratis.", img:"alkohit_x100_lej_782731316.jpg"},
    {name:"ALKOHIT X600 dowodowy", cat:"Alkomaty dowodowe", price:"3 190,00", tag:"", note:"Sensor elektrochemiczny klasy dowodowej.", img:"aaa62ce9_x600d_3_na_strone.jpg"},
    {name:"AlcoSensor FST bezustnikowy", cat:"Bezustnikowe", price:"2 890,50", tag:"Negocjuj", note:"Szybki przesiew bez wymiany ustnika.", img:"fst0.jpg"},
    {name:"Alkomat bramkowy EBS", cat:"Bramkowe", price:"1 990,00", tag:"Promocja", note:"Alkoskaner do kontroli przejść i wejść.", img:"ebs_opis_nowe.png"},
    {name:"Alkomat iBlow bezustnikowy", cat:"Bezustnikowe", price:"1 546,00", tag:"Nowość", note:"Pomiar z dystansu, bez kontaktu z ustnikiem.", img:"iblow-141x150.png"},
    {name:"Blokada alkoholowa AUTOWATCH 720 TAB", cat:"Blokady alkoholowe", price:"4 200,00", tag:"", note:"Blokada zapłonu do auta i flot firmowych.", img:"img_5577_800x600.jpg"},
    {name:"Dräger Alkotest 9510 IR+EC", cat:"Klasa premium", price:"17 077,00", tag:"", note:"Dwa sensory (IR + EC) w jednym urządzeniu.", img:"dreger__irec.jpg"},
    {name:"Narkotest DrugWipe 6S", cat:"Narkotesty", price:"153,00", tag:"Dla firm", note:"Test śliny na 6 grup substancji.", img:"drugwipe_6s_100630_504592067.jpg"}
  ];
  grid.innerHTML = products.map(function (p) {
    return '<article class="product reveal">'
      + '<div class="product__media">'
      + (p.tag ? '<span class="product__tag">' + p.tag + '</span>' : '')
      + '<img src="' + IMG + p.img + '" alt="' + p.name + '" loading="lazy" onerror="this.onerror=null;this.src=\'' + THUMB + p.img + '\'">'
      + '</div>'
      + '<div class="product__body">'
      + '<span class="product__cat">' + p.cat + '</span>'
      + '<h3>' + p.name + '</h3>'
      + '<p class="product__note">' + p.note + '</p>'
      + '<div class="product__foot">'
      + '<span class="product__price">' + p.price + ' <small>PLN</small></span>'
      + '<a class="product__ask" href="kontakt.html">Zapytaj</a>'
      + '</div></div></article>';
  }).join('');
}

// Ujawnianie sekcji przy scrollu
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
} else {
  document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
}
