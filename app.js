// Инициализируем карту с использованием Mapbox
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
const map = new mapboxgl.Map({
    container: 'map', // ID контейнера
    style: 'mapbox://styles/mapbox/streets-v11', // Стиль карты
    center: [37.618423, 55.751244], // Координаты центра (Москва)
    zoom: 12 // Масштаб
});

// Данные для остановок транспорта
const stops = [
    { name: 'Остановка 1', coords: [37.617635, 55.755814], routes: ['Маршрут 1', 'Маршрут 3'] },
    { name: 'Остановка 2', coords: [37.627135, 55.760241], routes: ['Маршрут 2', 'Маршрут 4'] },
    { name: 'Остановка 3', coords: [37.633411, 55.746017], routes: ['Маршрут 1', 'Маршрут 5'] }
];

// Добавляем метки для каждой остановки
stops.forEach(stop => {
    const marker = new mapboxgl.Marker()
        .setLngLat(stop.coords)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // добавляем всплывающее окно
        .setHTML(`<h3>${stop.name}</h3><p>Доступные маршруты: ${stop.routes.join(', ')}</p>`))
        .addTo(map);

    // Добавляем обработчик клика на метку
    marker.getElement().addEventListener('click', () => {
        displayRouteInfo(stop);
    });
});

// Функция для отображения информации о маршрутах
function displayRouteInfo(stop) {
    const routeInfo = document.getElementById('route-info');
    routeInfo.innerHTML = `
        <h2>${stop.name}</h2>
        <p>Доступные маршруты: ${stop.routes.join(', ')}</p>
    `;
}

// Добавление маркера в Душанбе
L.marker([38.536, 68.78]).addTo(map)
    .bindPopup('Душанбе') // Всплывающее окно с названием
    .openPopup();
