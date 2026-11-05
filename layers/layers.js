var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_BLOCK_modified_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'BLOCK_modified<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/BLOCK_modified_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8568522.058838, 1114445.058547, 8726335.851776, 1182227.869329]
        })
    });

lyr_OSMStandard_0.setVisible(true);lyr_BLOCK_modified_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BLOCK_modified_1];
