var wms_layers = [];

var format_sudt_amb_cyl_comarca_0 = new ol.format.GeoJSON();
var features_sudt_amb_cyl_comarca_0 = format_sudt_amb_cyl_comarca_0.readFeatures(json_sudt_amb_cyl_comarca_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sudt_amb_cyl_comarca_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sudt_amb_cyl_comarca_0.addFeatures(features_sudt_amb_cyl_comarca_0);
var lyr_sudt_amb_cyl_comarca_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sudt_amb_cyl_comarca_0, 
                style: style_sudt_amb_cyl_comarca_0,
                interactive: true,
                title: '<img src="styles/legend/sudt_amb_cyl_comarca_0.png" /> su.dt_amb_cyl_comarca'
            });
var format_pacu_cyl_bic_ejes_vw_1 = new ol.format.GeoJSON();
var features_pacu_cyl_bic_ejes_vw_1 = format_pacu_cyl_bic_ejes_vw_1.readFeatures(json_pacu_cyl_bic_ejes_vw_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pacu_cyl_bic_ejes_vw_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pacu_cyl_bic_ejes_vw_1.addFeatures(features_pacu_cyl_bic_ejes_vw_1);
var lyr_pacu_cyl_bic_ejes_vw_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pacu_cyl_bic_ejes_vw_1, 
                style: style_pacu_cyl_bic_ejes_vw_1,
                interactive: true,
    title: 'pacu_cyl_bic_ejes_vw<br />\
    <img src="styles/legend/pacu_cyl_bic_ejes_vw_1_0.png" /> CALZADA DE LA PLATA EN CASTILLA Y LE�N<br />\
    <img src="styles/legend/pacu_cyl_bic_ejes_vw_1_1.png" /> CAMINO DE SANTIAGO EN CASTILLA Y LE�N - CAMINO FRANC�S -<br />\
    <img src="styles/legend/pacu_cyl_bic_ejes_vw_1_2.png" /> CANAL DE CASTILLA<br />\
    <img src="styles/legend/pacu_cyl_bic_ejes_vw_1_3.png" /> LINEA FERREA "LA FUENTE DE SAN ESTEBAN - LA FREGENEDA"<br />\
    <img src="styles/legend/pacu_cyl_bic_ejes_vw_1_4.png" /> <br />'
        });

lyr_sudt_amb_cyl_comarca_0.setVisible(true);lyr_pacu_cyl_bic_ejes_vw_1.setVisible(true);
var layersList = [lyr_sudt_amb_cyl_comarca_0,lyr_pacu_cyl_bic_ejes_vw_1];
lyr_sudt_amb_cyl_comarca_0.set('fieldAliases', {'comarca': 'comarca', 'provincia': 'provincia', 'cod_com': 'cod_com', 'hectareas': 'hectareas', 'perimetro': 'perimetro', 'fid_1': 'fid_1', });
lyr_pacu_cyl_bic_ejes_vw_1.set('fieldAliases', {'fid': 'fid', 'c_bien_id': 'c_bien_id', 'd_bien_den': 'd_bien_den', 'l_url_pweb': 'l_url_pweb', });
lyr_sudt_amb_cyl_comarca_0.set('fieldImages', {'comarca': '', 'provincia': '', 'cod_com': '', 'hectareas': '', 'perimetro': '', 'fid_1': '', });
lyr_pacu_cyl_bic_ejes_vw_1.set('fieldImages', {'fid': 'Range', 'c_bien_id': 'Range', 'd_bien_den': 'TextEdit', 'l_url_pweb': 'TextEdit', });
lyr_sudt_amb_cyl_comarca_0.set('fieldLabels', {'comarca': 'no label', 'provincia': 'no label', 'cod_com': 'no label', 'hectareas': 'no label', 'perimetro': 'no label', 'fid_1': 'no label', });
lyr_pacu_cyl_bic_ejes_vw_1.set('fieldLabels', {'fid': 'no label', 'c_bien_id': 'no label', 'd_bien_den': 'no label', 'l_url_pweb': 'no label', });
lyr_pacu_cyl_bic_ejes_vw_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});