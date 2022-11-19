ymaps.ready(function () {
    var myMap = new ymaps.Map(
      "map",
      {
        center: [55.617779, 37.719414],
        zoom: 15,
        controls: ['zoomControl']
      },
      {
        searchControlProvider: "yandex#search"
      }
    ),
      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),
      myPlacemarkWithContent = new ymaps.Placemark(
        [55.617779, 37.719414],
        {
          hintContent: "Собственный значок метки с контентом",
          balloonContent:
            "Топовое агенство по работе с маркетплейсами",
          iconContent: ""
        },
        {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: "default#imageWithContent",
          // Своё изображение иконки метки.
          iconImageHref: "img/map-marker.png",
          // Размеры метки.
          iconImageSize: [120, 130],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-38, -125],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          //iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
        }
      );

    myMap.geoObjects.add(myPlacemarkWithContent);

    function onResizeMap() {
      if (window.innerWidth < '660') {
        myMap.setCenter([55.617779, 37.719414]);
      } else if (window.innerWidth < '1200') {
        myMap.setCenter([55.617779, 37.719414]);
      } else {
        myMap.setCenter([55.617779, 37.719414]);
        myMap.setZoom(12);
      }
    } onResizeMap();

    window.onresize = function () {
      onResizeMap();
    };
  });