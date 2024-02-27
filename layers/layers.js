var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Isochrones_1 = new ol.format.GeoJSON();
var features_Isochrones_1 = format_Isochrones_1.readFeatures(json_Isochrones_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Isochrones_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isochrones_1.addFeatures(features_Isochrones_1);
var lyr_Isochrones_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Isochrones_1, 
                style: style_Isochrones_1,
                interactive: true,
    title: 'Isochrones<br />\
    <img src="styles/legend/Isochrones_1_0.png" /> 5 min<br />\
    <img src="styles/legend/Isochrones_1_1.png" /> 10 min<br />\
    <img src="styles/legend/Isochrones_1_2.png" /> 15 min<br />\
    <img src="styles/legend/Isochrones_1_3.png" /> 20 min<br />\
    <img src="styles/legend/Isochrones_1_4.png" /> 25 min<br />'
        });
var format_ustorage_2 = new ol.format.GeoJSON();
var features_ustorage_2 = format_ustorage_2.readFeatures(json_ustorage_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ustorage_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ustorage_2.addFeatures(features_ustorage_2);
var lyr_ustorage_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ustorage_2, 
                style: style_ustorage_2,
                interactive: true,
                title: '<img src="styles/legend/ustorage_2.png" /> ustorage'
            });
var format_Disuelto_3 = new ol.format.GeoJSON();
var features_Disuelto_3 = format_Disuelto_3.readFeatures(json_Disuelto_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Disuelto_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Disuelto_3.addFeatures(features_Disuelto_3);
var lyr_Disuelto_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Disuelto_3, 
                style: style_Disuelto_3,
                interactive: true,
                title: '<img src="styles/legend/Disuelto_3.png" /> Disuelto'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Isochrones_1.setVisible(true);lyr_ustorage_2.setVisible(true);lyr_Disuelto_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Isochrones_1,lyr_ustorage_2,lyr_Disuelto_3];
lyr_Isochrones_1.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_ustorage_2.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_Disuelto_3.set('fieldAliases', {'country': 'country', 'locality': 'locality', 'state': 'state', 'zonificacion': 'zonificacion', 'catstationid': 'catstationid', 'station_code': 'station_code', 'zipcode': 'zipcode', 'region': 'region', 'station_name': 'station_name', 'id': 'id', 'coverage_type': 'coverage_type', 'cobertura_diferenciada': 'cobertura_diferenciada', 'cluster_diferenciado': 'cluster_diferenciado', 'polygon': 'polygon', 'neighborhood': 'neighborhood', 'fid': 'fid', });
lyr_Isochrones_1.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'Range', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_ustorage_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_Disuelto_3.set('fieldImages', {'country': 'TextEdit', 'locality': 'TextEdit', 'state': 'TextEdit', 'zonificacion': 'TextEdit', 'catstationid': 'TextEdit', 'station_code': 'TextEdit', 'zipcode': 'TextEdit', 'region': 'TextEdit', 'station_name': 'TextEdit', 'id': 'TextEdit', 'coverage_type': 'TextEdit', 'cobertura_diferenciada': 'TextEdit', 'cluster_diferenciado': 'TextEdit', 'polygon': 'TextEdit', 'neighborhood': 'TextEdit', 'fid': 'TextEdit', });
lyr_Isochrones_1.set('fieldLabels', {'ID': 'header label', 'CENTER_LON': 'header label', 'CENTER_LAT': 'header label', 'AA_MINS': 'header label', 'AA_MODE': 'header label', 'TOTAL_POP': 'header label', });
lyr_ustorage_2.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_Disuelto_3.set('fieldLabels', {'country': 'no label', 'locality': 'no label', 'state': 'no label', 'zonificacion': 'no label', 'catstationid': 'no label', 'station_code': 'no label', 'zipcode': 'no label', 'region': 'no label', 'station_name': 'no label', 'id': 'no label', 'coverage_type': 'no label', 'cobertura_diferenciada': 'no label', 'cluster_diferenciado': 'no label', 'polygon': 'no label', 'neighborhood': 'no label', 'fid': 'no label', });
lyr_Disuelto_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});