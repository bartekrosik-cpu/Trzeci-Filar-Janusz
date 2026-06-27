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

// ---- Dane produktów (łatwe do edycji) ----
var IMG = "https://trzecifilar.com/media/com_hikashop/upload/";
var THUMB = "https://trzecifilar.com/media/com_hikashop/upload/thumbnails/100x100f/";

var CAT_ORDER = [
  "Alkomaty dowodowe i testery",
  "Bezustnikowe i bramkowe",
  "Blokady i systemy",
  "Narkotesty i badania",
  "Testy COVID-19",
  "Ustniki i materiały",
  "Akcesoria i inne"
];

var ALL_PRODUCTS = [
  // Alkomaty dowodowe i testery
  {name:"Alkomat ALKOHIT X100", cat:"Alkomaty dowodowe i testery", price:"840,00", tag:"Promocja", note:"Na ustnik i lejek. Szkolenie on-line gratis.", img:"alkohit_x100_lej.jpg", featured:true},
  {name:"ALKOHIT X100 z drukarką", cat:"Alkomaty dowodowe i testery", price:"1 750,00", tag:"", note:"Wydruk wyniku pomiaru. Szkolenie on-line gratis.", img:"alkohit_x100_lej_782731316.jpg", featured:true},
  {name:"ALKOHIT X100 + świadectwo wzorcowania", cat:"Alkomaty dowodowe i testery", price:"990,00", tag:"", note:"Wersja dowodowa ze świadectwem wzorcowania.", img:"alkohit_x100_lej_843322718.jpg"},
  {name:"ALKOHIT X100 — zestaw ze szkoleniem", cat:"Alkomaty dowodowe i testery", price:"1 950,00", tag:"", note:"Drukarka, szkolenie i świadectwo wzorcowania w zestawie.", img:"alkohit_x100d_front_opis_570495349.jpg"},
  {name:"ALKOHIT X600 dowodowy", cat:"Alkomaty dowodowe i testery", price:"3 190,00", tag:"", note:"Sensor elektrochemiczny klasy dowodowej.", img:"aaa62ce9_x600d_3_na_strone.jpg", featured:true},
  {name:"Alkomat ALKOHIT X60", cat:"Alkomaty dowodowe i testery", price:"618,00", tag:"Promocja", note:"Kompaktowy tester na ustnik i lejek.", img:"alkomat-alkohit-x60.jpg"},
  {name:"Alkomat Alkohit X8", cat:"Alkomaty dowodowe i testery", price:"380,00", tag:"Nowość", note:"Kompaktowy tester trzeźwości.", img:"x8_nowosc.jpg"},
  {name:"Alco-Sensor IV CM", cat:"Alkomaty dowodowe i testery", price:"5 166,00", tag:"", note:"Profesjonalny alkomat dowodowy.", img:"Alco___Sensor_IV_4c0e860d150bf.jpg"},
  {name:"Alco-Sensor IV CM z drukarką Martel", cat:"Alkomaty dowodowe i testery", price:"7 501,77", tag:"", note:"Z termiczną drukarką wyniku.", img:"as_iv.jpg"},
  {name:"Alkomat A2,0", cat:"Alkomaty dowodowe i testery", price:"12 915,00", tag:"Negocjuj", note:"Stacjonarny alkomat dowodowy AWAT.", img:"alkometr-a2-0-4l.jpg"},
  {name:"Dräger Alkotest 9510 IR+EC", cat:"Alkomaty dowodowe i testery", price:"17 077,00", tag:"Premium", note:"Dwa sensory (IR + EC) w jednym urządzeniu.", img:"dreger__irec.jpg", featured:true},

  // Bezustnikowe i bramkowe
  {name:"AlcoSensor FST bezustnikowy", cat:"Bezustnikowe i bramkowe", price:"2 890,50", tag:"Negocjuj", note:"Szybki przesiew bez wymiany ustnika.", img:"fst0.jpg", featured:true},
  {name:"Alkomat bramkowy EBS (Alkoskaner)", cat:"Bezustnikowe i bramkowe", price:"1 990,00", tag:"Promocja", note:"Alkoskaner do kontroli przejść i wejść.", img:"ebs_opis_nowe.png", featured:true},
  {name:"Alkomat iBlow bezustnikowy", cat:"Bezustnikowe i bramkowe", price:"1 546,00", tag:"Nowość", note:"Pomiar z dystansu, bez kontaktu z ustnikiem.", img:"iblow-141x150.png", featured:true},

  // Blokady i systemy
  {name:"Blokada alkoholowa AUTOWATCH 720 TAB", cat:"Blokady i systemy", price:"4 200,00", tag:"", note:"Blokada zapłonu do auta i flot firmowych.", img:"img_5577_800x600.jpg", featured:true},
  {name:"Depozytor zintegrowany z alkomatem", cat:"Blokady i systemy", price:"33 499,05", tag:"", note:"Depozyt kluczy z kontrolą trzeźwości.", img:"depozytor_z_alkomatem.jpg"},

  // Narkotesty i badania
  {name:"Narkotest DrugWipe 6S", cat:"Narkotesty i badania", price:"153,00", tag:"Dla firm", note:"Test śliny na 6 grup substancji.", img:"drugwipe_6s_100630_504592067.jpg", featured:true},
  {name:"Narkotest DrugWipe 5A", cat:"Narkotesty i badania", price:"170,50", tag:"Dla firm", note:"Test śliny — 5 grup substancji.", img:"drugwipe-a-icon-500x500.jpg"},
  {name:"WipeAlyser® — narkotest przenośny", cat:"Narkotesty i badania", price:"18 990,00", tag:"Premium", note:"Urządzenie do obiektywnej analizy próbki.", img:"armas-saborit-wipealyser_668958104.jpg"},
  {name:"Narkotest na dopalacze (5 substancji)", cat:"Narkotesty i badania", price:"51,84", tag:"od 10 szt.", note:"Cena za sztukę przy zakupie min. 10.", img:"trst2.png"},
  {name:"RIGAKU Progeny ResQ", cat:"Narkotesty i badania", price:"Zapytaj o cenę", tag:"", note:"Przenośny analizator substancji.", img:"progenyorangebrom-3_11521342.jpg"},
  {name:"Analiza włosów (badanie laboratoryjne)", cat:"Narkotesty i badania", price:"od 1 200,00", tag:"Akredytacja", note:"Narkotyki, alkohol (EtG), nikotyna — szczegóły na stronie Badanie włosów.", img:"peryt-top_25.jpg"},

  // Testy COVID-19
  {name:"Test NADAL® COVID-19 IgG / IgM", cat:"Testy COVID-19", price:"32,40", tag:"od 30 szt.", note:"Test przeciwciał. Czułość 97,4%. Cena za szt. od 30.", img:"test_-covid_igm.jpg"},
  {name:"Test NADAL® COVID-19 Ag", cat:"Testy COVID-19", price:"32,40", tag:"od 30 szt.", note:"Test antygenowy. Cena za szt. przy zakupie od 30.", img:"covid-19_ag_group_1000x1000px_72dpi_1096205976.jpg"},

  // Ustniki i materiały
  {name:"Ustnik do AlcoSensor FST", cat:"Ustniki i materiały", price:"1,48", tag:"", note:"", img:"fst_ustn.jpg"},
  {name:"Ustnik do alkomatu AWAT A2.0", cat:"Ustniki i materiały", price:"1,17", tag:"", note:"", img:"Ustnik_do_alkoma_4d84afef43b67.jpg"},
  {name:"Ustnik ALCOQUANT 3020 / DRAEGER 7410", cat:"Ustniki i materiały", price:"1,17", tag:"", note:"", img:"ustnik_a20.jpg"},
  {name:"Ustnik ALCOQUANT 6020", cat:"Ustniki i materiały", price:"1,17", tag:"", note:"", img:"ustnik_invitek_alcquant.jpg"},
  {name:"Ustnik do alkomatu ALCOSENSOR IV", cat:"Ustniki i materiały", price:"1,30", tag:"", note:"", img:"ustnik_as_4.jpg"},
  {name:"Ustnik Alkohit AH69 / X100 / X600 / X50 / X60", cat:"Ustniki i materiały", price:"1,00", tag:"", note:"", img:"Ustnik_do_alkoma_4c0e83a25bf15.jpg"},
  {name:"Ustnik Alkohit — zamiennik", cat:"Ustniki i materiały", price:"0,31", tag:"", note:"", img:"Ustnik_do_alkoma_52e62989a6c80.jpg"},
  {name:"Ustnik uniwersalny zamiennik BLOW-IN", cat:"Ustniki i materiały", price:"0,31", tag:"od 100 szt.", note:"Cena za sztukę przy zakupie min. 100.", img:"Ustnik_zamiennik_4c0f66ee414ab.jpg"},
  {name:"Ustnik do testera LION SD 400", cat:"Ustniki i materiały", price:"1,71", tag:"", note:"", img:"pobrane_2.jpg"},
  {name:"Ustnik do AUTOWATCH 720 TAB", cat:"Ustniki i materiały", price:"3,57", tag:"", note:"Do blokady alkoholowej AUTOWATCH 720 TAB.", img:"ustnik_tab_720.jpg"},
  {name:"Taśma barwiąca do drukarki DP 1012", cat:"Ustniki i materiały", price:"9,76", tag:"", note:"Materiał eksploatacyjny.", img:"tasma_barw_dp_1012.jpg"},
  {name:"Taśma (rolka) do drukarki DP 1012", cat:"Ustniki i materiały", price:"1,22", tag:"od 10 szt.", note:"Cena za sztukę przy zakupie min. 10.", img:"rolki_do_alco-sensor_iv.jpg"},

  // Akcesoria i inne
  {name:"Kalibrator / symulator GUTH 12V500", cat:"Akcesoria i inne", price:"7 067,58", tag:"", note:"Symulator wydychanego powietrza do wzorcowania.", img:"guth_symulator_guth_12v500.jpeg"},
  {name:"David Delight Plus (biofeedback)", cat:"Akcesoria i inne", price:"2 024,39", tag:"", note:"Urządzenie do relaksu i koncentracji.", img:"ave_david.jpg"},
  {name:"Olimax olejek konopny 7% CBD 10 ml", cat:"Akcesoria i inne", price:"139,00", tag:"BIO", note:"Polski olejek CBD, 200 kropli.", img:"ccbd.jpg"}
];

function priceHtml(p) {
  var hasDigit = /[0-9]/.test(p);
  var ask = p.toLowerCase().indexOf("zapyt") >= 0;
  return p + (hasDigit && !ask ? ' <small>PLN</small>' : '');
}

function productCard(p) {
  return '<article class="product reveal">'
    + '<div class="product__media">'
    + (p.tag ? '<span class="product__tag">' + p.tag + '</span>' : '')
    + '<img src="' + IMG + p.img + '" alt="' + p.name + '" loading="lazy" onerror="this.onerror=null;this.src=\'' + THUMB + p.img + '\'">'
    + '</div>'
    + '<div class="product__body">'
    + '<span class="product__cat">' + p.cat + '</span>'
    + '<h3>' + p.name + '</h3>'
    + (p.note ? '<p class="product__note">' + p.note + '</p>' : '')
    + '<div class="product__foot">'
    + '<span class="product__price">' + priceHtml(p.price) + '</span>'
    + '<a class="product__ask" href="kontakt.html">Zapytaj</a>'
    + '</div></div></article>';
}

// Strona główna — wybrane produkty
var grid = document.getElementById('productGrid');
if (grid) {
  grid.innerHTML = ALL_PRODUCTS.filter(function (p) { return p.featured; }).map(productCard).join('');
}

// Strona Katalog — wszystkie produkty pogrupowane
var catalog = document.getElementById('catalogGrid');
if (catalog) {
  var html = '';
  CAT_ORDER.forEach(function (cat, i) {
    var items = ALL_PRODUCTS.filter(function (p) { return p.cat === cat; });
    if (!items.length) return;
    var no = ('0' + (i + 1)).slice(-2);
    html += '<div class="catalog-group">'
      + '<div class="section__head reveal" style="margin-bottom:22px"><span class="eyebrow">' + no + ' · ' + items.length + ' poz.</span><h2>' + cat + '</h2></div>'
      + '<div class="products">' + items.map(productCard).join('') + '</div></div>';
  });
  catalog.innerHTML = html;
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
