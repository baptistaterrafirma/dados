var map1 = L.map('mapazambezia').setView([-18.85, 36.32], 6);

	var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 20,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(map1);


       


$.ajax('http://cavateco.terrafirma.co.mz:8090/geoserver/ows',{
  type: 'GET',
  data: {
    service: 'WFS',
    version: '1.1.0',
    request: 'GetFeature',
    typename: 'cavateco_gras_zambezia:povoados',
    //CQL_FILTER: "column='demo'",
    srsname: 'EPSG:4326',
    outputFormat: 'text/javascript',
    },
  dataType: 'jsonp',
  jsonpCallback:'callback:handleJson3',
  jsonp:'format_options'
 });
  //Geojson style file
  var myStyle = {
    'color': 'red'
  }
 
// the ajax callback function
var coloico=document.querySelector('#coloico');
 var chisse=document.querySelector('#chisse');
 var mugarula=document.querySelector('#mugarula');
 var libanda=document.querySelector('#libanda');
 var samalungo=document.querySelector('#samalungo');
 var mongessa=document.querySelector('#mongessa');
 var tetete=document.querySelector('#tetete');
 var napila=document.querySelector('#napila');
 var mirintxe=document.querySelector('#mirintxe');
 var macice=document.querySelector('#macice');
 var muagiua=document.querySelector('#muagiua');
 var insurupi=document.querySelector('#insurupi');
 var namarua=document.querySelector('#namarua');
 var rumala=document.querySelector('#rumala');
 var veriha=document.querySelector('#veriha');
 var ethocola=document.querySelector('#ethocola');
 var muduela=document.querySelector('#muduela');
 var mukhopo=document.querySelector('#mukhopo');
 var muthipa=document.querySelector('#muthipa');
 var chaima=document.querySelector('#chaima');
 var marcusa=document.querySelector('#marcusa');
 var wadola=document.querySelector('#wadola');
 var nhumuliua=document.querySelector('#nhumuliua');
 var arjuane=document.querySelector('#arjuane');
 var linda=document.querySelector('#linda');
 var cutal=document.querySelector('#cutal');
 var rampua=document.querySelector('#rampua');

function handleJson3(data3) {
    selectedArea3 = L.geoJson(data3, {
      style: myStyle,
      onEachFeature: function(feature, layer) {

        layer.bindPopup(`Name da Comunidade: ${feature.properties.name}`)
       
        
        
        layer.addEventListener("click", () => {

            if (feature.properties.name == "Coloico") {
            
                coloico.style.display='block'
                chisse.style.display='none'
                mugarula.style.display='none'
                libanda.style.display='none'
                samalungo.style.display='none'
                mongessa.style.display='none'
                tetete.style.display='none'
                napila.style.display='none'
                mirintxe.style.display='none'
                macice.style.display='none'
                muagiua.style.display='none'
                insurupi.style.display='none'
                namarua.style.display='none'
                rumala.style.display='none'
                veriha.style.display='none'
                ethocola.style.display='none'
                muduela.style.display='none'
                mukhopo.style.display='none'
                muthipa.style.display='none'
                chaima.style.display='none'
                marcusa.style.display='none'
                wadola.style.display='none'
                nhumuliua.style.display='none'
                arjuane.style.display='none'
                linda.style.display='none'
                cutal.style.display='none'
                rampua.style.display='none'

                
    
              
              }
              if (feature.properties.name == "Chisse") {
                
                coloico.style.display='none'
                chisse.style.display='block'
                mugarula.style.display='none'
                libanda.style.display='none'
                samalungo.style.display='none'
                mongessa.style.display='none'
                tetete.style.display='none'
                napila.style.display='none'
                mirintxe.style.display='none'
                macice.style.display='none'
                muagiua.style.display='none'
                insurupi.style.display='none'
                namarua.style.display='none'
                rumala.style.display='none'
                veriha.style.display='none'
                ethocola.style.display='none'
                muduela.style.display='none'
                mukhopo.style.display='none'
                muthipa.style.display='none'
                chaima.style.display='none'
                marcusa.style.display='none'
                wadola.style.display='none'
                nhumuliua.style.display='none'
                arjuane.style.display='none'
                linda.style.display='none'
                cutal.style.display='none'
                rampua.style.display='none'

              
              }
              if (feature.properties.name == "Mugarula") {
                
                coloico.style.display='none'
                chisse.style.display='none'
                mugarula.style.display='block'
                libanda.style.display='none'
                samalungo.style.display='none'
                mongessa.style.display='none'
                tetete.style.display='none'
                napila.style.display='none'
                mirintxe.style.display='none'
                macice.style.display='none'
                muagiua.style.display='none'
                insurupi.style.display='none'
                namarua.style.display='none'
                rumala.style.display='none'
                veriha.style.display='none'
                ethocola.style.display='none'
                muduela.style.display='none'
                mukhopo.style.display='none'
                muthipa.style.display='none'
                chaima.style.display='none'
                marcusa.style.display='none'
                wadola.style.display='none'
                nhumuliua.style.display='none'
                arjuane.style.display='none'
                linda.style.display='none'
                cutal.style.display='none'
                rampua.style.display='none'

    
              
              }
              if (feature.properties.name == "Libanda") {
                
                coloico.style.display='none'
                chisse.style.display='none'
                mugarula.style.display='none'
                libanda.style.display='block'
                samalungo.style.display='none'
                mongessa.style.display='none'
                tetete.style.display='none'
                napila.style.display='none'
                mirintxe.style.display='none'
                macice.style.display='none'
                muagiua.style.display='none'
                insurupi.style.display='none'
                namarua.style.display='none'
                rumala.style.display='none'
                veriha.style.display='none'
                ethocola.style.display='none'
                muduela.style.display='none'
                mukhopo.style.display='none'
                muthipa.style.display='none'
                chaima.style.display='none'
                marcusa.style.display='none'
                wadola.style.display='none'
                nhumuliua.style.display='none'
                arjuane.style.display='none'
                linda.style.display='none'
                cutal.style.display='none'
                rampua.style.display='none'

    
              
              }
              if (feature.properties.name == "Samalungo") {
                
                coloico.style.display='none'
                chisse.style.display='none'
                mugarula.style.display='none'
                libanda.style.display='none'
                samalungo.style.display='block'
                mongessa.style.display='none'
                tetete.style.display='none'
                napila.style.display='none'
                mirintxe.style.display='none'
                macice.style.display='none'
                muagiua.style.display='none'
                insurupi.style.display='none'
                namarua.style.display='none'
                rumala.style.display='none'
                veriha.style.display='none'
                ethocola.style.display='none'
                muduela.style.display='none'
                mukhopo.style.display='none'
                muthipa.style.display='none'
                chaima.style.display='none'
                marcusa.style.display='none'
                wadola.style.display='none'
                nhumuliua.style.display='none'
                arjuane.style.display='none'
                linda.style.display='none'
                cutal.style.display='none'
                rampua.style.display='none'

    
              
              }
              if (feature.properties.name == "Mongessa") {
                
                coloico.style.display='none'
                chisse.style.display='none'
                mugarula.style.display='none'
                libanda.style.display='none'
                samalungo.style.display='none'
                mongessa.style.display='block'
                tetete.style.display='none'
                napila.style.display='none'
                mirintxe.style.display='none'
                macice.style.display='none'
                muagiua.style.display='none'
                insurupi.style.display='none'
                namarua.style.display='none'
                rumala.style.display='none'
                veriha.style.display='none'
                ethocola.style.display='none'
                muduela.style.display='none'
                mukhopo.style.display='none'
                muthipa.style.display='none'
                chaima.style.display='none'
                marcusa.style.display='none'
                wadola.style.display='none'
                nhumuliua.style.display='none'
                arjuane.style.display='none'
                linda.style.display='none'
                cutal.style.display='none'
                rampua.style.display='none'

    
              
              }
              if (feature.properties.name == "Tetete Sede") {
                
                coloico.style.display='none'
                chisse.style.display='none'
                mugarula.style.display='none'
                libanda.style.display='none'
                samalungo.style.display='none'
                mongessa.style.display='none'
                tetete.style.display='block'
                napila.style.display='none'
                mirintxe.style.display='none'
                macice.style.display='none'
                muagiua.style.display='none'
                insurupi.style.display='none'
                namarua.style.display='none'
                rumala.style.display='none'
                veriha.style.display='none'
                ethocola.style.display='none'
                muduela.style.display='none'
                mukhopo.style.display='none'
                muthipa.style.display='none'
                chaima.style.display='none'
                marcusa.style.display='none'
                wadola.style.display='none'
                nhumuliua.style.display='none'
                arjuane.style.display='none'
                linda.style.display='none'
                cutal.style.display='none'
                rampua.style.display='none'

    
              
              }
              if (feature.properties.name == "Napila") {
                
                coloico.style.display='none'
                chisse.style.display='none'
                mugarula.style.display='none'
                libanda.style.display='none'
                samalungo.style.display='none'
                mongessa.style.display='none'
                tetete.style.display='none'
                napila.style.display='block'
                mirintxe.style.display='none'
                macice.style.display='none'
                muagiua.style.display='none'
                insurupi.style.display='none'
                namarua.style.display='none'
                rumala.style.display='none'
                veriha.style.display='none'
                ethocola.style.display='none'
                muduela.style.display='none'
                mukhopo.style.display='none'
                muthipa.style.display='none'
                chaima.style.display='none'
                marcusa.style.display='none'
                wadola.style.display='none'
                nhumuliua.style.display='none'
                arjuane.style.display='none'
                linda.style.display='none'
                cutal.style.display='none'
                rampua.style.display='none'

              }
            if (feature.properties.name == "Mirintxe") {
                
                coloico.style.display='none'
                chisse.style.display='none'
                mugarula.style.display='none'
                libanda.style.display='none'
                samalungo.style.display='none'
                mongessa.style.display='none'
                tetete.style.display='none'
                napila.style.display='none'
                mirintxe.style.display='block'
                macice.style.display='none'
                muagiua.style.display='none'
                insurupi.style.display='none'
                namarua.style.display='none'
                rumala.style.display='none'
                veriha.style.display='none'
                ethocola.style.display='none'
                muduela.style.display='none'
                mukhopo.style.display='none'
                muthipa.style.display='none'
                chaima.style.display='none'
                marcusa.style.display='none'
                wadola.style.display='none'
                nhumuliua.style.display='none'
                arjuane.style.display='none'
                linda.style.display='none'
                cutal.style.display='none'
                rampua.style.display='none'

            }
            if (feature.properties.name == "Macice") {
                
                coloico.style.display='none'
                chisse.style.display='none'
                mugarula.style.display='none'
                libanda.style.display='none'
                samalungo.style.display='none'
                mongessa.style.display='none'
                tetete.style.display='none'
                napila.style.display='none'
                mirintxe.style.display='none'
                macice.style.display='block'
                muagiua.style.display='none'
                insurupi.style.display='none'
                namarua.style.display='none'
                rumala.style.display='none'
                veriha.style.display='none'
                ethocola.style.display='none'
                muduela.style.display='none'
                mukhopo.style.display='none'
                muthipa.style.display='none'
                chaima.style.display='none'
                marcusa.style.display='none'
                wadola.style.display='none'
                nhumuliua.style.display='none'
                arjuane.style.display='none'
                linda.style.display='none'
                cutal.style.display='none'
                rampua.style.display='none'

            }
            if (feature.properties.name == "Muagiua sede") {
                
                coloico.style.display='none'
                chisse.style.display='none'
                mugarula.style.display='none'
                libanda.style.display='none'
                samalungo.style.display='none'
                mongessa.style.display='none'
                tetete.style.display='none'
                napila.style.display='none'
                mirintxe.style.display='none'
                macice.style.display='none'
                muagiua.style.display='block'
                insurupi.style.display='none'
                namarua.style.display='none'
                rumala.style.display='none'
                veriha.style.display='none'
                ethocola.style.display='none'
                muduela.style.display='none'
                mukhopo.style.display='none'
                muthipa.style.display='none'
                chaima.style.display='none'
                marcusa.style.display='none'
                wadola.style.display='none'
                nhumuliua.style.display='none'
                arjuane.style.display='none'
                linda.style.display='none'
                cutal.style.display='none'
                rampua.style.display='none'

            }
            if (feature.properties.name == "Insurupi") {
                
                coloico.style.display='none'
                chisse.style.display='none'
                mugarula.style.display='none'
                libanda.style.display='none'
                samalungo.style.display='none'
                mongessa.style.display='none'
                tetete.style.display='none'
                napila.style.display='none'
                mirintxe.style.display='none'
                macice.style.display='none'
                muagiua.style.display='none'
                insurupi.style.display='block'
                namarua.style.display='none'
                rumala.style.display='none'
                veriha.style.display='none'
                ethocola.style.display='none'
                muduela.style.display='none'
                mukhopo.style.display='none'
                muthipa.style.display='none'
                chaima.style.display='none'
                marcusa.style.display='none'
                wadola.style.display='none'
                nhumuliua.style.display='none'
                arjuane.style.display='none'
                linda.style.display='none'
                cutal.style.display='none'
                rampua.style.display='none'

            }
            if (feature.properties.name == "Namarua") {
                
                coloico.style.display='none'
                chisse.style.display='none'
                mugarula.style.display='none'
                libanda.style.display='none'
                samalungo.style.display='none'
                mongessa.style.display='none'
                tetete.style.display='none'
                napila.style.display='none'
                mirintxe.style.display='none'
                macice.style.display='none'
                muagiua.style.display='none'
                insurupi.style.display='none'
                namarua.style.display='block'
                rumala.style.display='none'
                veriha.style.display='none'
                ethocola.style.display='none'
                muduela.style.display='none'
                mukhopo.style.display='none'
                muthipa.style.display='none'
                chaima.style.display='none'
                marcusa.style.display='none'
                wadola.style.display='none'
                nhumuliua.style.display='none'
                arjuane.style.display='none'
                linda.style.display='none'
                cutal.style.display='none'
                rampua.style.display='none'

            }
            if (feature.properties.name == "Rumala") {
                
                coloico.style.display='none'
                chisse.style.display='none'
                mugarula.style.display='none'
                libanda.style.display='none'
                samalungo.style.display='none'
                mongessa.style.display='none'
                tetete.style.display='none'
                napila.style.display='none'
                mirintxe.style.display='none'
                macice.style.display='none'
                muagiua.style.display='none'
                insurupi.style.display='none'
                namarua.style.display='none'
                rumala.style.display='block'
                veriha.style.display='none'
                ethocola.style.display='none'
                muduela.style.display='none'
                mukhopo.style.display='none'
                muthipa.style.display='none'
                chaima.style.display='none'
                marcusa.style.display='none'
                wadola.style.display='none'
                nhumuliua.style.display='none'
                arjuane.style.display='none'
                linda.style.display='none'
                cutal.style.display='none'
                rampua.style.display='none'

            }
            if (feature.properties.name == "Veriha") {
                
                coloico.style.display='none'
                chisse.style.display='none'
                mugarula.style.display='none'
                libanda.style.display='none'
                samalungo.style.display='none'
                mongessa.style.display='none'
                tetete.style.display='none'
                napila.style.display='none'
                mirintxe.style.display='none'
                macice.style.display='none'
                muagiua.style.display='none'
                insurupi.style.display='none'
                namarua.style.display='none'
                rumala.style.display='none'
                veriha.style.display='block'
                ethocola.style.display='none'
                muduela.style.display='none'
                mukhopo.style.display='none'
                muthipa.style.display='none'
                chaima.style.display='none'
                marcusa.style.display='none'
                wadola.style.display='none'
                nhumuliua.style.display='none'
                arjuane.style.display='none'
                linda.style.display='none'
                cutal.style.display='none'
                rampua.style.display='none'

            }
            if (feature.properties.name == "Ethocola") {
                
                coloico.style.display='none'
                chisse.style.display='none'
                mugarula.style.display='none'
                libanda.style.display='none'
                samalungo.style.display='none'
                mongessa.style.display='none'
                tetete.style.display='none'
                napila.style.display='none'
                mirintxe.style.display='none'
                macice.style.display='none'
                muagiua.style.display='none'
                insurupi.style.display='none'
                namarua.style.display='none'
                rumala.style.display='none'
                veriha.style.display='none'
                ethocola.style.display='block'
                muduela.style.display='none'
                mukhopo.style.display='none'
                muthipa.style.display='none'
                chaima.style.display='none'
                marcusa.style.display='none'
                wadola.style.display='none'
                nhumuliua.style.display='none'
                arjuane.style.display='none'
                linda.style.display='none'
                cutal.style.display='none'
                rampua.style.display='none'

            }
            if (feature.properties.name == "Muduela") {
                
                coloico.style.display='none'
                chisse.style.display='none'
                mugarula.style.display='none'
                libanda.style.display='none'
                samalungo.style.display='none'
                mongessa.style.display='none'
                tetete.style.display='none'
                napila.style.display='none'
                mirintxe.style.display='none'
                macice.style.display='none'
                muagiua.style.display='none'
                insurupi.style.display='none'
                namarua.style.display='none'
                rumala.style.display='none'
                veriha.style.display='none'
                ethocola.style.display='none'
                muduela.style.display='block'
                mukhopo.style.display='none'
                muthipa.style.display='none'
                chaima.style.display='none'
                marcusa.style.display='none'
                wadola.style.display='none'
                nhumuliua.style.display='none'
                arjuane.style.display='none'
                linda.style.display='none'
                cutal.style.display='none'
                rampua.style.display='none'

            }
            if (feature.properties.name == "Mukhopo") {
                
                coloico.style.display='none'
                chisse.style.display='none'
                mugarula.style.display='none'
                libanda.style.display='none'
                samalungo.style.display='none'
                mongessa.style.display='none'
                tetete.style.display='none'
                napila.style.display='none'
                mirintxe.style.display='none'
                macice.style.display='none'
                muagiua.style.display='none'
                insurupi.style.display='none'
                namarua.style.display='none'
                rumala.style.display='none'
                veriha.style.display='none'
                ethocola.style.display='none'
                muduela.style.display='none'
                mukhopo.style.display='block'
                muthipa.style.display='none'
                chaima.style.display='none'
                marcusa.style.display='none'
                wadola.style.display='none'
                nhumuliua.style.display='none'
                arjuane.style.display='none'
                linda.style.display='none'
                cutal.style.display='none'
                rampua.style.display='none'

            }
            if (feature.properties.name == "Muthipa") {
                
                coloico.style.display='none'
                chisse.style.display='none'
                mugarula.style.display='none'
                libanda.style.display='none'
                samalungo.style.display='none'
                mongessa.style.display='none'
                tetete.style.display='none'
                napila.style.display='none'
                mirintxe.style.display='none'
                macice.style.display='none'
                muagiua.style.display='none'
                insurupi.style.display='none'
                namarua.style.display='none'
                rumala.style.display='none'
                veriha.style.display='none'
                ethocola.style.display='none'
                muduela.style.display='none'
                mukhopo.style.display='none'
                muthipa.style.display='block'
                chaima.style.display='none'
                marcusa.style.display='none'
                wadola.style.display='none'
                nhumuliua.style.display='none'
                arjuane.style.display='none'
                linda.style.display='none'
                cutal.style.display='none'
                rampua.style.display='none'

            }
            if (feature.properties.name == "Chaima") {
                
                coloico.style.display='none'
                chisse.style.display='none'
                mugarula.style.display='none'
                libanda.style.display='none'
                samalungo.style.display='none'
                mongessa.style.display='none'
                tetete.style.display='none'
                napila.style.display='none'
                mirintxe.style.display='none'
                macice.style.display='none'
                muagiua.style.display='none'
                insurupi.style.display='none'
                namarua.style.display='none'
                rumala.style.display='none'
                veriha.style.display='none'
                ethocola.style.display='none'
                muduela.style.display='none'
                mukhopo.style.display='none'
                muthipa.style.display='none'
                chaima.style.display='block'
                marcusa.style.display='none'
                wadola.style.display='none'
                nhumuliua.style.display='none'
                arjuane.style.display='none'
                linda.style.display='none'
                cutal.style.display='none'
                rampua.style.display='none'

            }
            if (feature.properties.name == "Marcusa") {
                
                coloico.style.display='none'
                chisse.style.display='none'
                mugarula.style.display='none'
                libanda.style.display='none'
                samalungo.style.display='none'
                mongessa.style.display='none'
                tetete.style.display='none'
                napila.style.display='none'
                mirintxe.style.display='none'
                macice.style.display='none'
                muagiua.style.display='none'
                insurupi.style.display='none'
                namarua.style.display='none'
                rumala.style.display='none'
                veriha.style.display='none'
                ethocola.style.display='none'
                muduela.style.display='none'
                mukhopo.style.display='none'
                muthipa.style.display='none'
                chaima.style.display='none'
                marcusa.style.display='block'
                wadola.style.display='none'
                nhumuliua.style.display='none'
                arjuane.style.display='none'
                linda.style.display='none'
                cutal.style.display='none'
                rampua.style.display='none'

            }
            if (feature.properties.name == "Wadola") {
                
                coloico.style.display='none'
                chisse.style.display='none'
                mugarula.style.display='none'
                libanda.style.display='none'
                samalungo.style.display='none'
                mongessa.style.display='none'
                tetete.style.display='none'
                napila.style.display='none'
                mirintxe.style.display='none'
                macice.style.display='none'
                muagiua.style.display='none'
                insurupi.style.display='none'
                namarua.style.display='none'
                rumala.style.display='none'
                veriha.style.display='none'
                ethocola.style.display='none'
                muduela.style.display='none'
                mukhopo.style.display='none'
                muthipa.style.display='none'
                chaima.style.display='none'
                marcusa.style.display='none'
                wadola.style.display='block'
                nhumuliua.style.display='none'
                arjuane.style.display='none'
                linda.style.display='none'
                cutal.style.display='none'
                rampua.style.display='none'

            }
            if (feature.properties.name == "Nhumulia") {
                
                coloico.style.display='none'
                chisse.style.display='none'
                mugarula.style.display='none'
                libanda.style.display='none'
                samalungo.style.display='none'
                mongessa.style.display='none'
                tetete.style.display='none'
                napila.style.display='none'
                mirintxe.style.display='none'
                macice.style.display='none'
                muagiua.style.display='none'
                insurupi.style.display='none'
                namarua.style.display='none'
                rumala.style.display='none'
                veriha.style.display='none'
                ethocola.style.display='none'
                muduela.style.display='none'
                mukhopo.style.display='none'
                muthipa.style.display='none'
                chaima.style.display='none'
                marcusa.style.display='none'
                wadola.style.display='none'
                nhumuliua.style.display='block'
                arjuane.style.display='none'
                linda.style.display='none'
                cutal.style.display='none'
                rampua.style.display='none'

            }
            if (feature.properties.name == "Arjuane") {
                
                coloico.style.display='none'
                chisse.style.display='none'
                mugarula.style.display='none'
                libanda.style.display='none'
                samalungo.style.display='none'
                mongessa.style.display='none'
                tetete.style.display='none'
                napila.style.display='none'
                mirintxe.style.display='none'
                macice.style.display='none'
                muagiua.style.display='none'
                insurupi.style.display='none'
                namarua.style.display='none'
                rumala.style.display='none'
                veriha.style.display='none'
                ethocola.style.display='none'
                muduela.style.display='none'
                mukhopo.style.display='none'
                muthipa.style.display='none'
                chaima.style.display='none'
                marcusa.style.display='none'
                wadola.style.display='none'
                nhumuliua.style.display='none'
                arjuane.style.display='block'
                linda.style.display='none'
                cutal.style.display='none'
                rampua.style.display='none'

            }
            if (feature.properties.name == "Linda") {
                
                coloico.style.display='none'
                chisse.style.display='none'
                mugarula.style.display='none'
                libanda.style.display='none'
                samalungo.style.display='none'
                mongessa.style.display='none'
                tetete.style.display='none'
                napila.style.display='none'
                mirintxe.style.display='none'
                macice.style.display='none'
                muagiua.style.display='none'
                insurupi.style.display='none'
                namarua.style.display='none'
                rumala.style.display='none'
                veriha.style.display='none'
                ethocola.style.display='none'
                muduela.style.display='none'
                mukhopo.style.display='none'
                muthipa.style.display='none'
                chaima.style.display='none'
                marcusa.style.display='none'
                wadola.style.display='none'
                nhumuliua.style.display='none'
                arjuane.style.display='none'
                linda.style.display='block'
                cutal.style.display='none'
                rampua.style.display='none'

            }
            if (feature.properties.name == "Cuntal") {
                
                coloico.style.display='none'
                chisse.style.display='none'
                mugarula.style.display='none'
                libanda.style.display='none'
                samalungo.style.display='none'
                mongessa.style.display='none'
                tetete.style.display='none'
                napila.style.display='none'
                mirintxe.style.display='none'
                macice.style.display='none'
                muagiua.style.display='none'
                insurupi.style.display='none'
                namarua.style.display='none'
                rumala.style.display='none'
                veriha.style.display='none'
                ethocola.style.display='none'
                muduela.style.display='none'
                mukhopo.style.display='none'
                muthipa.style.display='none'
                chaima.style.display='none'
                marcusa.style.display='none'
                wadola.style.display='none'
                nhumuliua.style.display='none'
                arjuane.style.display='none'
                linda.style.display='none'
                cutal.style.display='block'
                rampua.style.display='none'

            }
            if (feature.properties.name == "Rampua") {
                
                coloico.style.display='none'
                chisse.style.display='none'
                mugarula.style.display='none'
                libanda.style.display='none'
                samalungo.style.display='none'
                mongessa.style.display='none'
                tetete.style.display='none'
                napila.style.display='none'
                mirintxe.style.display='none'
                macice.style.display='none'
                muagiua.style.display='none'
                insurupi.style.display='none'
                namarua.style.display='none'
                rumala.style.display='none'
                veriha.style.display='none'
                ethocola.style.display='none'
                muduela.style.display='none'
                mukhopo.style.display='none'
                muthipa.style.display='none'
                chaima.style.display='none'
                marcusa.style.display='none'
                wadola.style.display='none'
                nhumuliua.style.display='none'
                arjuane.style.display='none'
                linda.style.display='none'
                cutal.style.display='none'
                rampua.style.display='block'

            }

          
        })
      
      } 
    }).addTo(map1);
  map1.fitBounds(selectedArea3.getBounds());
}

