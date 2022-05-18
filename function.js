var map = L.map('mapaniassa').setView([-18.85, 36.32], 6);

	var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 20,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(map);


       


$.ajax('http://cavateco.terrafirma.co.mz:8090/geoserver/ows',{
  type: 'GET',
  data: {
    service: 'WFS',
    version: '1.1.0',
    request: 'GetFeature',
    typename: 'cavateco_cesc_niassa:povoados',
    //CQL_FILTER: "column='demo'",
    srsname: 'EPSG:4326',
    outputFormat: 'text/javascript',
    },
  dataType: 'jsonp',
  jsonpCallback:'callback:handleJson',
  jsonp:'format_options'
 });
  //Geojson style file
  var myStyle = {
    'color': 'red'
  }
  var myStyle1 = {
    'color': 'blue'
  }
 
// the ajax callback function
 var luguesse=document.querySelector('#luguesse');
 var arama=document.querySelector('#arama');
 var repele=document.querySelector('#repele');
 var missoro=document.querySelector('#missoro');
 var lione=document.querySelector('#lione');
 var chala=document.querySelector('#chala');
 var changaussa=document.querySelector('#changaussa');
 var napalavi=document.querySelector('#napalavi');
function handleJson(data1) {
    selectedArea1 = L.geoJson(data1, {
      style: myStyle1,
      onEachFeature: function(feature, layer) {

        layer.bindPopup(`Name da Comunidade: ${feature.properties.name}`)


        layer.addEventListener("click", () => {
          

          if (feature.properties.name == "Luguesse"){
            
            luguesse.style.display='block'
            arama.style.display='none'
            repele.style.display='none'
            missoro.style.display='none'
            lione.style.display='none'
            chala.style.display='none'
            changaussa.style.display='none'
            napalavi.style.display='none'
            
         
            


          
          }
          
          if (feature.properties.name == "Comunidade de arama") {
            
            luguesse.style.display='none'
            arama.style.display='block'
            repele.style.display='none'
            missoro.style.display='none'
            lione.style.display='none'
            chala.style.display='none'
            changaussa.style.display='none'
            napalavi.style.display='none'

          
          }
          if (feature.properties.name == "Repele") {
            
            luguesse.style.display='none'
            arama.style.display='none'
            repele.style.display='block'
            missoro.style.display='none'
            lione.style.display='none'
            chala.style.display='none'
            changaussa.style.display='none'
            napalavi.style.display='none'

          
          }
          if (feature.properties.name == "Missoro") {
            
            luguesse.style.display='none'
            arama.style.display='none'
            repele.style.display='none'
            missoro.style.display='block'
            lione.style.display='none'
            chala.style.display='none'
            changaussa.style.display='none'
            napalavi.style.display='none'

          
          }
          if (feature.properties.name == "Lione") {
            
            luguesse.style.display='none'
            arama.style.display='none'
            repele.style.display='none'
            missoro.style.display='none'
            lione.style.display='block'
            chala.style.display='none'
            changaussa.style.display='none'
            napalavi.style.display='none'

          
          }
          if (feature.properties.name == "Chala_sede") {
            
            luguesse.style.display='none'
            arama.style.display='none'
            repele.style.display='none'
            missoro.style.display='none'
            lione.style.display='none'
            chala.style.display='block'
            changaussa.style.display='none'
            napalavi.style.display='none'

          
          }
          if (feature.properties.name == "Changaussa") {
            
            luguesse.style.display='none'
            arama.style.display='none'
            repele.style.display='none'
            missoro.style.display='none'
            lione.style.display='none'
            chala.style.display='none'
            changaussa.style.display='block'
            napalavi.style.display='none'

          
          }
          if (feature.properties.name == "Comunidade de Napalavi") {
            
            luguesse.style.display='none'
            arama.style.display='none'
            repele.style.display='none'
            missoro.style.display='none'
            lione.style.display='none'
            chala.style.display='none'
            changaussa.style.display='none'
            napalavi.style.display='block'

          
          }
          
        })
      
      } 
    }).addTo(map);
  map.fitBounds(selectedArea1.getBounds());
}

