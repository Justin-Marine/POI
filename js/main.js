var map = new ol.Map({
    var map = new ol.Map({
        target: 'map',  // 위 index.html에 div id가 map인 엘리먼트에 맵을 표출
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([37.41, 8.82]),  // 맵이 로딩되었을 때 보여질 기본 위치(좌표) 설정
          zoom: 4  // 줌 레벨은 말 그대로 확대 레벨 (숫자가 커질수록 확대 됨)
        })
    });
});