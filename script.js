// script.js
var map = L.map('map', {
    zoom: 1
}).setView([3.453932, -76.563042], 15);   

var mapabase = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 15,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var mapabase2 = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

mapabase.addTo(map);

L.control.scale({ position: 'bottomleft' }).addTo(map);
var leyenda = L.control.layers({ mapabase, mapabase2 }).addTo(map);

var icono = L.icon({
    iconSize: [35, 35],
    iconUrl: 'images/marcador.png'
});

var geojsonFeature = [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.5620235020614,
          3.4543276271352
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.56296159970685,
          3.4541320434315423
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.5613697986018,
          3.4528572199488394
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.57058674638368,
          3.454493033680677
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.57113933894142,
          3.4545115092116276
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.57089074464773,
          3.454234373911646
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.57100180046058,
          3.4552135848242216
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.56456598025031,
          3.452526135343078
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.56523231574421,
          3.45409657040382
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.56774987593184,
          3.4530045745694338
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.57178490663861,
          3.453799786587396
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.57291397486377,
          3.4540953976884197
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.56715757784612,
          3.4532085641078254
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.56741670825647,
          3.4532824669268365
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.5766702526809,
          3.455419118803107
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.55380969715652,
          3.456445845794292
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.5544888507423,
          3.4551682299609467
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.55341787778042,
          3.4562372555719065
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.55414927394942,
          3.456863026101445
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.55101471970781,
          3.455063934587969
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.54897434333728,
          3.4546467531397695
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.55020294395534,
          3.4559765172145376
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.5525016176293,
          3.454125276472098
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.55362483317492,
          3.4582710077705485
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.55600187072763,
          3.4569151731091665
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.555138703956,
          3.4547226503992476
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.55367591161797,
          3.45224563404895
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.55299675785726,
          3.4552441266761917
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.55511258213507,
          3.4538100661798126
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.55561521251754,
          3.4557395289235444
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.5589587378613,
          3.4562088571063896
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.55780940102458,
          3.4584251259408063
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.5572021378563,
          3.457432506289706
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.55707153142174,
          3.4540168391716577
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.55398921899503,
          3.456650293528753
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.55876941538526,
          3.4552944565551087
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.55721548026294,
          3.4517663175397075
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.55538699018527,
          3.452496386568882
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.55748187353804,
          3.4501690970549106
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.55910139362673,
          3.4507166497903086
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.55847448262463,
          3.4521246410911743
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.55964994075349,
          3.4530893746664333
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.56291510222243,
          3.4538455165133684
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.56051194332541,
          3.455462093510917
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.56078961976955,
          3.4538249512445987
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.5593016821647,
          3.455948669338923
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.56624994577034,
          3.4516986322791183
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.56436921276457,
          3.451020710499023
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.561678719714,
          3.449769161325108
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.56852241119826,
          3.4532104181376866
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.56694665203152,
          3.4546189825487374
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.56617650461754,
          3.4546894101848267
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.56563557236609,
          3.454079032575194
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.56582372271471,
          3.4547598383453817
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.56556501598587,
          3.454736362292124
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.57069211297612,
          3.4535390828241503
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -76.57200088604537,
          3.454077292986682
        ],
        "type": "Point"
      }
    },];

var estilo = {
    radius: 4,
    fillColor: "yellow",
    color: "black",
    weight: 1,
    opacity: 1,
    fillOpacity: 1,
};

var encima = {
    radius: 4,
    fillColor: "black",
    color: "black",
    weight: 1,
    opacity: 1,
    fillOpacity: 1,
};

var marcador = L.geoJSON(geojsonFeature, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, estilo).bindTooltip("persona", {
            permanent: false,
            className: 'labelstyle',
            direction: 'top',
            opacity: 1
        }).openTooltip()
    }
});



L.easyButton('<img src="iconos/restart.png"  align="absmiddle" height="16px" >', function () {
    alert('reiniciando pagina');
    location.reload();
}).addTo(map);


var marcadoresVisibles = false; // Declarar una variable para rastrear el estado de visibilidad

L.easyButton('<img src="iconos/zoom.png"  align="absmiddle" height="16px" >', function () {
    if (marcadoresVisibles) {
        // Si los marcadores están visibles, quítalos y actualiza el estado
        map.removeLayer(marcador);
        leyenda.removeLayer(marcador);
        marcadoresVisibles = false;
    } else {
        // Si los marcadores no están visibles, agrégalos y actualiza el estado
        marcador.addTo(map);
        leyenda.addOverlay(marcador, 'Marcador');
        marcadoresVisibles = true;
    }
}).addTo(map);


L.easyButton('<img src="iconos/colors.png"  align="absmiddle" height="16px" >', function () {
    var colors = $('#seleccionar_color').val();
    var color_click = {
        radius: 7,
        fillColor: $('#seleccionar_color').val(),
        color: "black",
        weight: 1,
        opacity: 1,
        fillOpacity: 1,
    };
    marcador.setStyle(color_click);

    marcador.on('mouseover', function () {
        this.setStyle(encima);
    });
    marcador.on('mouseout', function () {
        this.setStyle(color_click);
    });
}).addTo(map);

L.easyButton('<img src="iconos/heatmap.png"  align="absmiddle" height="16px" >', function () {
  var heatData = [];
  
  for (var i = 0; i < geojsonFeature.length; i++) {
      var latlng = geojsonFeature[i].geometry.coordinates;
      heatData.push([latlng[1], latlng[0], 10]);
  }

  var heat = L.heatLayer(heatData, { radius: 23 }).addTo(map);
}).addTo(map);

L.control.locate({setView: 'false',flyto: 'false',showCompass: 'true',drawMarker: 'false',keepCurrentZoomLevel: 'true',locateOptions: {enableHighAccuracy: true,}
}).addTo(map);


var comunas = L.tileLayer.wms('http://ws-idesc.cali.gov.co:8081/geoserver/wms?service=WMS&version=1.1.0', {
    layers: 'idesc:mc_comunas',
    format: 'image/png',
    transparent: true,
});
map.addLayer(comunas);


