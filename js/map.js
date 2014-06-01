function map() {

  var dataCopyright = 'Data &copy; by <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>.';
  var tileOSM = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: dataCopyright,
		maxZoom: 19
	});

  var tileMapQuest = L.tileLayer('http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
		subdomains: ['otile1','otile2','otile3','otile4'],
		attribution: 'Map tiles by <a href="http://open.mapquestapi.com/">MapQuest</a>. ' + dataCopyright,
		maxZoom: 19
	});

	var tileMapQuestAerial = L.tileLayer('http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
		subdomains: ['otile1','otile2','otile3','otile4'],
		attribution: 'Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency.'
      + dataCopyright,
		maxZoom: 19
	});

	var tileToner = L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', {
		attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. ' + dataCopyright,
		maxZoom: 18
	});

	var tileWatercolor = L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png', {
		attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. ' + dataCopyright,
		maxZoom: 18
	});

	var categories = ["Amenity", "Arts", "Financial", "Food", "Healthcare", "Shopping", "Transport"];
	var clusters = {};
	for (var i = 0; i < categories.length; i++) {
		clusters[categories[i]] = new L.MarkerClusterGroup(
        {showCoverageOnHover: false, maxClusterRadius: 64});
	}

	window.total_count = 0;
	//for (var i = 0; i < categories.length; i++) {
  //  map_populate_overpass(clusters[categories[i]], categories[i]);
	//}
	var map_layers = [tileMapQuest];
	map_layers.push(clusters[categories[0]]); // select first category

	var map = L.map('map', {
		center: [35.91081,-79.07171],
		zoom: 16,
    minZoom: 13,
    maxZoom: 19,
		layers: map_layers,
		worldCopyJump: true
	});

	var layers = L.control.layers({
		"OpenStreetMap": tileOSM,
		"MapQuestOpen": tileMapQuest,
		"Toner": tileToner,
		"Watercolor": tileWatercolor,
  },{},{
		collapsed: true
	}).addTo(map);

  var categoryLayers = L.control.layers(
    clusters,
    {},
		{collapsed: false}
  ).addTo(map);

	map.on('moveend', function(e){
		if(map.getZoom() >= 13){
			document.getElementById("osm-edit-link").href = "http://www.openstreetmap.org/edit#map=" + map.getZoom() + "/" + map.getCenter().lat.toFixed(6) + "/" + map.getCenter().lng.toFixed(6);
		}
		else{
			document.getElementById("osm-edit-link").href = "http://www.openstreetmap.org/edit#map=13/" + map.getCenter().lat.toFixed(6) + "/" + map.getCenter().lng.toFixed(6);
		}
	});


  var locateControl = L.control({position: 'topleft'});
  locateControl.onAdd = function(map){
    this._div = L.DomUtil.create('div', 'locate-control');
    this._div.id = "locate_div";
    L.DomUtil.addClass(this._div, 'leaflet-control');
    L.DomUtil.addClass(this._div, 'leaflet-control-layers')
    L.DomUtil.addClass(this._div, 'leaflet-bar')
    L.DomUtil.addClass(this._div, 'leaflet-control-zoom')
    L.DomUtil.addClass(this._div, 'leaflet-control-zoom-in');

    L.DomEvent.disableClickPropagation(this._div);

    var link = L.DomUtil.create('a', 'locate-button', this._div);
		link.innerHTML = '<center><img src=\"img/locate.png\" width="22"  height="22" /></center>';
		link.href = '#';
		link.title = 'Find me';

		L.DomEvent
		    .on(link, 'mousedown dblclick', L.DomEvent.stopPropagation)
		    .on(link, 'click', L.DomEvent.stop)
		    .on(link, 'click', locateControl.locate, this)
		    .on(link, 'click', this._refocusOnMap, this);

    return this._div;
  }
  locateControl.locate = function(){
    map.locate({setView: true, maxZoom: 18});
  };
  map.addControl(locateControl);

  var waitControl = L.control({position: 'topleft'});
  waitControl.onAdd = function(map){
      this._handlingClick = false;

      this._div = L.DomUtil.create('div', 'wait-control');
      this._div.id = "wait_div";
      L.DomUtil.addClass(this._div, 'leaflet-control');
      L.DomUtil.addClass(this._div, 'leaflet-control-layers');
      L.DomUtil.addClass(this._div, 'leaflet-bar');
      L.DomUtil.addClass(this._div, 'leaflet-control-zoom');
      L.DomUtil.addClass(this._div, 'leaflet-control-zoom-in');
      L.DomUtil.addClass(this._div, 'leaflet-container');

      var wait = L.DomUtil.create('img', 'wait-span', this._div);
      wait.src = 'img/loader.gif';
		  wait.title = 'Loading';

      return this._div;
  }
  map.addControl(waitControl);

  var helpControl = L.control({position: 'topleft'});
  helpControl.onAdd = function(map){
      this._handlingClick = false;

      this._div = L.DomUtil.create('div', 'help-control');
      this._div.id = "help_div";
      L.DomUtil.addClass(this._div, 'leaflet-control');
      L.DomUtil.addClass(this._div, 'leaflet-control-layers');
      L.DomUtil.addClass(this._div, 'leaflet-bar');
      L.DomUtil.addClass(this._div, 'leaflet-control-zoom');
      L.DomUtil.addClass(this._div, 'leaflet-control-zoom-in');
      L.DomUtil.addClass(this._div, 'leaflet-container');
      L.DomEvent.disableClickPropagation(this._div);

      L.DomEvent
          .on(this._div, 'mouseenter', helpControl.open)
          .on(this._div, 'mouseleave', helpControl.close);
      $('#help_div').mouseenter( function(){
          helpControl.open();
      });
      $('#help_div').mouseleave( function(){
          helpControl.close();
      });
      var button = L.DomUtil.create('a', 'help-button', this._div);
		  button.innerHTML = '?';
		  button.href = '#';
		  button.title = 'Help';

      var helpContents = L.DomUtil.create('div', 'help-contents', this._div)
      L.DomUtil.removeClass(helpContents, 'leaflet-bar');
      helpContents.id = 'helpContents';
      L.DomUtil.addClass(helpContents, 'leaflet-container');
      helpContents.innerHTML = '<span class=\'title\'>Welcome to Carrboro Map</span>';
      $("#helpContents").append = L.DomUtil.create('div', 'leaflet-control-layers-separator', helpContents);
      var helpContentsSpan = L.DomUtil.create('span', 'help-contents', helpContents);
      helpContentsSpan.innerHTML = 'To list your venue go to <a id="osm-edit-link" href=\"http://www.openstreetmap.org/edit\" target=\"_blank\">OpenStreetMap editor</a>.</br></br>';
      helpContentsSpan.innerHTML += 'Please report bugs and feature requests on the <a href=\"http://github.com/townofcarrboro/map/issues\" target=\"_blank\">github issue tracker</a>.</br></br>';
      helpContentsSpan.innerHTML += 'This project is open-source (<a href=\"http://www.apache.org/licenses/LICENSE-2.0.html\" target=\"_blank\">Apache 2 license</a>) and can be forked on <a href=\"http://github.com/townofcarrboro/map\" target=\"_blank\">github</a>.</br></br>';
      $("#helpContents").append = helpContentsSpan;
      return this._div;
  }
  helpControl.onmouseenter = function() {
      helpControl.open()
  };
  helpControl.onmouseleave = function() {
      helpControl.close()
  };
  helpControl.open = function(){
      L.DomUtil.addClass(helpControl._div, 'help-control-expanded');
  };
  helpControl.close = function(){
      L.DomUtil.removeClass(helpControl._div, 'help-control-expanded');
  };
  map.addControl(helpControl);

  var logoControl = L.control({position: 'bottomleft'});
  logoControl.onAdd = function(map){
    this._div = L.DomUtil.create('div', 'logo-control');
    return this._div;
  };
  map.addControl(logoControl);

  $.getJSON('http://overpass-api.de/api/interpreter?data=[out:json];relation%28179859%29%3B%28%2E%5F%3B%3E%3B%29%3Bout%20skel%3B', function(data){
      var nodes = {};
      var ways = {};
      var relation = {};
      // Extract nodes, ways and the unique relation
      for (var i = 0; i < data.elements.length; ++i){
          element = data.elements[i];
          switch (element['type']){
          case 'node':
              nodes [element['id']] = [element['lat'],element['lon']];
              break;
          case 'way':
              ways [element['id']] = element['nodes'];
              break;
          case 'relation':
              relation = element;
          default:
              break;
          }
      };
      // Merge ways that are connected
      var mergedWays = {};
      var numMergedWays = 0;
      for (var wid in ways){
          var firstNode = ways[wid][0];
          var lastNode = ways[wid][ways[wid].length-1];
          // search if the way is connected with an existing merged way
          var merged = false;
          for (var mid in mergedWays){
              if (mergedWays[mid][0] == lastNode){
                  mergedWays[mid] = ways[wid].concat(mergedWays[mid]);
                  merged = true;
                  //alert('Merge ' + wid + ' with ' + mid   );
              } else if (mergedWays[mid][mergedWays[mid].length -1] == firstNode){
                  mergedWays[mid] = mergedWays[mid].concat(ways[wid]);
                  merged = true;
                  //alert('Merge ' + wid + ' with '+ mid   );
              }
          }
          if (!merged){
              mergedWays[wid] = ways[wid];
              ++numMergedWays;
              //alert('Create new way for ' + wid   )
          }
      }
      //alert(numMergedWays)
      // Draw merged ways
      var latlngs = [[[49.3457868,-124.7844079],
                      [49.3457868, -66.9513812],
                      [24.7433195, -66.9513812],
                      [24.7433195, -124.7844079]]];
      $.each(relation['members'], function(key, value){
          if (value['role'] == 'outer'){
              if (mergedWays.hasOwnProperty(value['ref'])){
                  way = mergedWays[value['ref']];
                  var latlng = [];
                  for (var i = 0; i < way.length; ++i){
                      latlng.push(nodes[way[i]])
                  };
                  //var positivePolygon = L.polygon(latlng, {smoothFactor: 10,
                  //                                 opacity: 0.,
                  //                                 fillOpacity: 0.3,
                  //                                 clickable:false});
                  //positivePolygon.addTo(map);
                  latlngs.push(latlng);
              }
          };
        });
      var negativePolygon = L.polygon(latlngs,
                                      {color: '#5b524f',
                                       opacity: 0.0,
                                       fillOpacity: 0.1,
                                       clickable:false});
      negativePolygon.addTo(map);
  });

  var points = {};

  var info = L.control();
  info.id = "info";

  info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info-control');
    this._div.id = "info_div";
    L.DomUtil.addClass(this._div, 'leaflet-control-layers');
    L.DomUtil.addClass(this._div, 'leaflet-control-layers-expanded');
    L.DomUtil.addClass(this._div, 'leaflet-control');
    L.DomUtil.addClass(this._div, 'leaflet-container');
    L.DomEvent.disableScrollPropagation(this._div);
    L.DomEvent.disableClickPropagation(this._div);

    //this.update();
    return this._div;
  };
  info.update = function () {
		var inBounds = [];
		var bounds = map.getBounds();
		categories.forEach(function (category) {
			categoryLayer = clusters[category];
			if (!map.hasLayer(categoryLayer)) {
				return;
			}
			categoryLayer.eachLayer(function(layer) {
				if (bounds.contains(layer.getLatLng())) {
						right_html = '<div class="placename">' + layer.options.title + '</div>';
						var newdiv = $(right_html);
						$(newdiv).click(function() {
              map.panTo(layer.getLatLng())
							// this is needed to get over clusters
							var visible = categoryLayer.getVisibleParent(layer);
							visible.bindPopup(layer.getPopup()).openPopup();
						});
						// title for sorting
						inBounds.push({div:newdiv,title:layer.options.title});
				}
			});
			var marker_html;
			inBounds.sort(function(a,b){
				// no idea what will it do with chinese/arabic, but should work
				return a.title.localeCompare(b.title);
			});
			// these are not yet translated
			if (inBounds.length==0) {
				marker_html="<span class='title'>No venues visible.</span>";
			} else {
				marker_html="<span class='title'>Currently visible ("+inBounds.length+")</span><div class='leaflet-control-layers-separator'></div>";
			}
      info._div.innerHTML = marker_html;
	    inBounds.forEach(function(object){
        $('#info_div').append(object.div);
		  });
    });
      var top = $("#info_div").offset() ? $("#info_div").offset().top : 0;
      var height = info._div.scrollHeight;
      var attributionControl = map.attributionControl;
      var attributionTop =  attributionControl? $(attributionControl._container).offset().top : 0;
      var maxHeight = attributionTop - top;
      height = Math.min(height, maxHeight - 20);
      $('#info_div').css("maxHeight", height);
  };
  map.addControl(info);

	map.on('moveend', info.update);
	map.on('layeradd', info.update);
	//map.on('layerremove', info.update);
  info.update();

  var server = 'http://overpass-api.de/api/interpreter?data='
  var query = server + '[out:json][timeout:25];area(3600179859)->.area;('
  query += 'node["amenity"](area.area);way["amenity"](area.area);'
  query += 'node["shop"](area.area);way["shop"](area.area);'
  query += 'node["tourism"](area.area);way["tourism"](area.area);'
  query += 'node["leisure"](area.area);way["leisure"](area.area);'
  query += 'node["craft"](area.area);way["craft"](area.area);'
  query += 'node["highway"="bus_stop"](area.area);'
  query += 'node["barrier"](area.area);'
  query += ');out body;>;out skel qt;'

  $.getJSON(query, function(data){
    for (var i = 0; i < categories.length; i++) {
      var category= categories[i];
      points[category] = parseElements(data, category.toLowerCase());
      populateMarkers(clusters[category], points[category]);
	  }
    info.update();
    map.removeControl(waitControl);
  });


}
