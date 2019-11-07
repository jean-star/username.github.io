ol.proj.get("EPSG:2154").setExtent([889516.650823, 6542558.226788, 989132.275925, 6609471.351856]);
var wms_layers = [];

var format_CLCfrancemodifi_0 = new ol.format.GeoJSON();
var features_CLCfrancemodifi_0 = format_CLCfrancemodifi_0.readFeatures(json_CLCfrancemodifi_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_CLCfrancemodifi_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLCfrancemodifi_0.addFeatures(features_CLCfrancemodifi_0);
var lyr_CLCfrancemodifi_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CLCfrancemodifi_0, 
                style: style_CLCfrancemodifi_0,
                interactive: true,
    title: 'CLC france modifié<br />\
    <img src="styles/legend/CLCfrancemodifi_0_0.png" /> 1<br />\
    <img src="styles/legend/CLCfrancemodifi_0_1.png" /> 2<br />\
    <img src="styles/legend/CLCfrancemodifi_0_2.png" /> 3<br />\
    <img src="styles/legend/CLCfrancemodifi_0_3.png" /> 4<br />\
    <img src="styles/legend/CLCfrancemodifi_0_4.png" /> 5<br />\
    <img src="styles/legend/CLCfrancemodifi_0_5.png" /> <br />'
        });
var format_CLC12_RBFC_RGF_1 = new ol.format.GeoJSON();
var features_CLC12_RBFC_RGF_1 = format_CLC12_RBFC_RGF_1.readFeatures(json_CLC12_RBFC_RGF_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_CLC12_RBFC_RGF_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLC12_RBFC_RGF_1.addFeatures(features_CLC12_RBFC_RGF_1);
var lyr_CLC12_RBFC_RGF_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CLC12_RBFC_RGF_1, 
                style: style_CLC12_RBFC_RGF_1,
                interactive: true,
    title: 'CLC12_RBFC_RGF<br />\
    <img src="styles/legend/CLC12_RBFC_RGF_1_0.png" /> 1<br />\
    <img src="styles/legend/CLC12_RBFC_RGF_1_1.png" /> 2<br />\
    <img src="styles/legend/CLC12_RBFC_RGF_1_2.png" /> 3<br />\
    <img src="styles/legend/CLC12_RBFC_RGF_1_3.png" /> 4<br />\
    <img src="styles/legend/CLC12_RBFC_RGF_1_4.png" /> 5<br />\
    <img src="styles/legend/CLC12_RBFC_RGF_1_5.png" /> <br />'
        });
var format_CLCsuissemodifi_2 = new ol.format.GeoJSON();
var features_CLCsuissemodifi_2 = format_CLCsuissemodifi_2.readFeatures(json_CLCsuissemodifi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_CLCsuissemodifi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLCsuissemodifi_2.addFeatures(features_CLCsuissemodifi_2);
var lyr_CLCsuissemodifi_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CLCsuissemodifi_2, 
                style: style_CLCsuissemodifi_2,
                interactive: true,
    title: 'CLC suisse modifié<br />\
    <img src="styles/legend/CLCsuissemodifi_2_0.png" /> 1<br />\
    <img src="styles/legend/CLCsuissemodifi_2_1.png" /> 2<br />\
    <img src="styles/legend/CLCsuissemodifi_2_2.png" /> 3<br />\
    <img src="styles/legend/CLCsuissemodifi_2_3.png" /> 4<br />\
    <img src="styles/legend/CLCsuissemodifi_2_4.png" /> 5<br />\
    <img src="styles/legend/CLCsuissemodifi_2_5.png" /> <br />'
        });
var lyr_Ombrage_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Ombrage",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Ombrage_3.png",
    attributions: ' ',
                                projection: 'EPSG:2154',
                                alwaysInRange: true,
                                imageExtent: [853125.000000, 6482375.000000, 1024625.000000, 6640125.000000]
                            })
                        });
var format_poncutelle_4 = new ol.format.GeoJSON();
var features_poncutelle_4 = format_poncutelle_4.readFeatures(json_poncutelle_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_poncutelle_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poncutelle_4.addFeatures(features_poncutelle_4);
var lyr_poncutelle_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poncutelle_4, 
                style: style_poncutelle_4,
                interactive: true,
    title: 'poncutelle<br />\
    <img src="styles/legend/poncutelle_4_0.png" /> aeroport<br />\
    <img src="styles/legend/poncutelle_4_1.png" /> Annemasse<br />\
    <img src="styles/legend/poncutelle_4_2.png" /> Bellegarde-sur-Valserine<br />\
    <img src="styles/legend/poncutelle_4_3.png" /> Bonneville<br />\
    <img src="styles/legend/poncutelle_4_4.png" /> Genève<br />\
    <img src="styles/legend/poncutelle_4_5.png" /> Gex<br />\
    <img src="styles/legend/poncutelle_4_6.png" /> mont<br />\
    <img src="styles/legend/poncutelle_4_7.png" /> Nyon<br />\
    <img src="styles/legend/poncutelle_4_8.png" /> Saint-Julien-en-Genevois<br />\
    <img src="styles/legend/poncutelle_4_9.png" /> Thonon-les-Bains<br />\
    <img src="styles/legend/poncutelle_4_10.png" /> <br />'
        });
var format_nomville_5 = new ol.format.GeoJSON();
var features_nomville_5 = format_nomville_5.readFeatures(json_nomville_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_nomville_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nomville_5.addFeatures(features_nomville_5);
var lyr_nomville_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nomville_5, 
                style: style_nomville_5,
                interactive: true,
                title: '<img src="styles/legend/nomville_5.png" /> nomville'
            });
var format_nommont_6 = new ol.format.GeoJSON();
var features_nommont_6 = format_nommont_6.readFeatures(json_nommont_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_nommont_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nommont_6.addFeatures(features_nommont_6);
var lyr_nommont_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nommont_6, 
                style: style_nommont_6,
                interactive: true,
                title: 'nom mont'
            });
var format_Frontiereshape_7 = new ol.format.GeoJSON();
var features_Frontiereshape_7 = format_Frontiereshape_7.readFeatures(json_Frontiereshape_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Frontiereshape_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frontiereshape_7.addFeatures(features_Frontiereshape_7);
var lyr_Frontiereshape_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Frontiereshape_7, 
                style: style_Frontiereshape_7,
                interactive: true,
                title: '<img src="styles/legend/Frontiereshape_7.png" /> Frontiere shape'
            });

lyr_CLCfrancemodifi_0.setVisible(true);lyr_CLC12_RBFC_RGF_1.setVisible(true);lyr_CLCsuissemodifi_2.setVisible(true);lyr_Ombrage_3.setVisible(true);lyr_poncutelle_4.setVisible(true);lyr_nomville_5.setVisible(true);lyr_nommont_6.setVisible(true);lyr_Frontiereshape_7.setVisible(true);
var layersList = [lyr_CLCfrancemodifi_0,lyr_CLC12_RBFC_RGF_1,lyr_CLCsuissemodifi_2,lyr_Ombrage_3,lyr_poncutelle_4,lyr_nomville_5,lyr_nommont_6,lyr_Frontiereshape_7];
lyr_CLCfrancemodifi_0.set('fieldAliases', {'ID': 'ID', 'CODE_12': 'CODE_12', 'AREA_HA': 'AREA_HA', 'code11': 'code11', });
lyr_CLC12_RBFC_RGF_1.set('fieldAliases', {'ID': 'ID', 'CODE_12': 'CODE_12', 'AREA_HA': 'AREA_HA', 'code11': 'code11', });
lyr_CLCsuissemodifi_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CODE_12': 'CODE_12', 'Area_Ha': 'Area_Ha', 'Remark': 'Remark', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'code11': 'code11', });
lyr_poncutelle_4.set('fieldAliases', {'id': 'id', 'type': 'type', });
lyr_nomville_5.set('fieldAliases', {'id': 'id', 'nom': 'nom', });
lyr_nommont_6.set('fieldAliases', {'id': 'id', 'nommont': 'nommont', });
lyr_Frontiereshape_7.set('fieldAliases', {'CANTON_DEP': 'CANTON_DEP', 'COMMUNE': 'COMMUNE', 'PAYS': 'PAYS', 'NUMERO_CAN': 'NUMERO_CAN', 'NUMERO_COM': 'NUMERO_COM', 'CODE_POSTA': 'CODE_POSTA', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'CC': 'CC', 'navetteurs': 'navetteurs', 'supericie': 'supericie', });
lyr_CLCfrancemodifi_0.set('fieldImages', {'ID': 'TextEdit', 'CODE_12': 'TextEdit', 'AREA_HA': 'TextEdit', 'code11': 'TextEdit', });
lyr_CLC12_RBFC_RGF_1.set('fieldImages', {'ID': 'TextEdit', 'CODE_12': 'TextEdit', 'AREA_HA': 'TextEdit', 'code11': 'TextEdit', });
lyr_CLCsuissemodifi_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'CODE_12': 'TextEdit', 'Area_Ha': 'TextEdit', 'Remark': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'code11': 'TextEdit', });
lyr_poncutelle_4.set('fieldImages', {'id': 'TextEdit', 'type': 'TextEdit', });
lyr_nomville_5.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', });
lyr_nommont_6.set('fieldImages', {'id': 'TextEdit', 'nommont': 'TextEdit', });
lyr_Frontiereshape_7.set('fieldImages', {'CANTON_DEP': 'TextEdit', 'COMMUNE': 'TextEdit', 'PAYS': 'TextEdit', 'NUMERO_CAN': 'Range', 'NUMERO_COM': 'TextEdit', 'CODE_POSTA': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', 'CC': 'TextEdit', 'navetteurs': 'TextEdit', 'supericie': '', });
lyr_CLCfrancemodifi_0.set('fieldLabels', {'ID': 'no label', 'CODE_12': 'no label', 'AREA_HA': 'no label', 'code11': 'no label', });
lyr_CLC12_RBFC_RGF_1.set('fieldLabels', {'ID': 'no label', 'CODE_12': 'no label', 'AREA_HA': 'no label', 'code11': 'no label', });
lyr_CLCsuissemodifi_2.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'CODE_12': 'no label', 'Area_Ha': 'no label', 'Remark': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'code11': 'no label', });
lyr_poncutelle_4.set('fieldLabels', {'id': 'no label', 'type': 'no label', });
lyr_nomville_5.set('fieldLabels', {'id': 'no label', 'nom': 'no label', });
lyr_nommont_6.set('fieldLabels', {'id': 'no label', 'nommont': 'no label', });
lyr_Frontiereshape_7.set('fieldLabels', {'CANTON_DEP': 'no label', 'COMMUNE': 'no label', 'PAYS': 'no label', 'NUMERO_CAN': 'no label', 'NUMERO_COM': 'no label', 'CODE_POSTA': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', 'CC': 'no label', 'navetteurs': 'no label', 'supericie': 'no label', });
lyr_Frontiereshape_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});