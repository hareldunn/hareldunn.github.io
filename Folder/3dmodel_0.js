// Qgis2threejs Project
project = new Q3D.Project({crs:"USER:100000",wgs84Center:{lat:31.0351628573,lon:35.2900567247},proj:"+proj=tmerc +lat_0=31.7343936111111 +lon_0=35.2045169444445 +k=1.0000067 +x_0=219529.584 +y_0=626907.39 +ellps=GRS80 +towgs84=-24.002400,-17.103200,-17.844400,-0.330090,-1.852690,1.669690,5.424800 +units=m +no_defs",title:"3dmodel",baseExtent:[219071.394619,543381.60812,236189.936303,555301.087298],rotation:0,zShift:300.0,width:100.0,zExaggeration:1.5});

// Layer 0
lyr = project.addLayer(new Q3D.DEMLayer({q:1,shading:true,type:"dem",name:"SRTM_v3"}));
