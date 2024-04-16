
let center = [52.538319, 39.786789];

function init() {
    let map = new ymaps.Map('YMapsID', {
        center: center,
        zoom: 17
    });

    let placemark = new ymaps.Placemark(center, {
        balloonContentHeader: 'Хедер балуна',
        balloonContentBody: 'Боди балуна',
        balloonContentFooter: 'Подвал',
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'https://image.flaticon.com/icons/png/512/64/64113.png',
        iconImageSize: [40, 40],
        iconImageOffset: [-19, -44]
    });

    let placemark1 = new ymaps.Placemark(center, {
        balloonContent: `

			<div class="balloon">
				<div class="balloon__address">г. Париж</div>
				<div class="balloon__contacts">
					<a href="tel:+7999999999">+7999999999</a>
				</div>
			</div>

		`
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../images/marcer.svg',
        iconImageSize: [60, 60],
        iconImageOffset: [-30, -60]
    });


    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим  
    map.controls.remove('rulerControl'); // удаляем контрол правил



    map.geoObjects.add(placemark1);
}

ymaps.ready(init);