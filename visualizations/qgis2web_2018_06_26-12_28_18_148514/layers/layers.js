var wms_layers = [];
var lyr_Clippedmask_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Clipped (mask)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Clippedmask_0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3814410.013387, 3644052.210896, 3865724.841257, 3725612.172929]
                            })
                        });


var layersList = [lyr_Clippedmask_0];
