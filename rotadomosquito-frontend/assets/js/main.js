(function () {
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Navegação mobile botão
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Abrir/Fechar menu
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

})()

/**
  * dados
  */
function setDados(url, body) {
  let request = new XMLHttpRequest()
  request.open("POST", url, true)
  request.setRequestHeader("Content-type", "aplication/json")
  request.send(JSON.stringify(body))

  request.onload = function () {
    console.log(this.responseText)
  }

  return request.responseText
}

function returnDados() {

  body = {
    "mode": "formdata",
    "formdata": [
      {
        "key": "file",
        "type": "file",
        "src": "C:/planilha.xlsx"
      }
    ]
  }

  //enviaDados("http://localhost:8080/dados", body)
  return (getDados())
}

/**
  * Map
  */
let map = L.map('mapid').setView([-25.7511034, -53.0606298], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 13.5
}).addTo(map);

var iconNaoConfirmado = L.icon({
  iconUrl: 'assets/img/iconeAzul.png',

  iconSize: [40, 40], // size of the icon    
});

var iconeConfirmado = L.icon({
  iconUrl: 'assets/img/iconeVermelho.png',

  iconSize: [40, 40], // size of the icon    
});

let request = fetch("http://localhost:8080/dados?cidade=Dois Vizinhos")
  .then(r => r.json())
  .then(jsonBody => {

    console.log(jsonBody.listDados[0].dtOcorrencia)

    let length = parseInt(jsonBody.listDados.length)

    for (let i = 0; i < length; i++) {
      let situacao = parseInt(jsonBody.listDados[i].fgSituacao)
      if (jsonBody.listDados[i].dsLatitude != null && jsonBody.listDados[i].dsLongitude != null) {
        if (situacao == 1) {          
          L.marker([jsonBody.listDados[i].dsLatitude, jsonBody.listDados[i].dsLongitude], { icon: iconeConfirmado }).addTo(map);
        }
        else {          
          L.marker([jsonBody.listDados[i].dsLatitude, jsonBody.listDados[i].dsLongitude], { icon: iconNaoConfirmado }).addTo(map);
        }
      }
    }
  })

